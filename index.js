import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override";

const app = express();
const port = 3000;

app.set("view engine", "ejs")
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set("views",path.join(__dirname, "views"))

app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride('_method'))

let posts = [
    {
        id: uuidv4(), 
        username : "anand",
        content : "consistency is the key!"
    },
    {
        id: uuidv4(),
        username : "aditya",
        content : "Coding is love"
    },
    {
        id: uuidv4(),
        username : "priya",
        content : "sunday means codeday!"
    }
]

app.get("/", (req, res) => {
    res.render("home.ejs")
});

//Get all posts
app.get("/posts", (req, res) => {

    res.render("index.ejs", {posts})
});

//serves form to create new post
app.get("/posts/new", (req, res) => {
    res.render("new.ejs")
})

//post request for new posts
app.post("/posts", (req, res) => {
    console.log(req.body)
    let {username, content} = req.body
    let id = uuidv4()
    posts.push({id, username, content})
    res.redirect("/posts")
})

//to get specific post (detailed view)
app.get("/posts/:id", (req, res) => {
    let {id} = req.params
    let post = posts.find((i) => i.id === id)
    if ( !post) {
        return res.send("No matching posts ")
    }
    res.render("post.ejs", {post})
})

app.patch("/posts/:id",  (req, res) => {
    let {id} = req.params
    let newContent = req.body.content
    let post = posts.find((i) => i.id === id)
    post.content = newContent
    console.log(post);
    res.redirect("/posts")
    
})

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params
    let post = posts.find((i) => i.id === id)
    if (!post) {
    return res.status(404).send("Post not found");
   }
    res.render("edit.ejs", {post})
})

app.delete("/posts/:id", (req, res) => {
    let {id} = req.params
    posts = posts.filter((i) => i.id !== id)
    
    res.redirect("/posts")
})

// default fallback route
app.use("/", (req, res) => {
    res.send("express working well")
})

app.listen(port, ()=> {
    console.log(`Express server is listening at port ${port}`)
});