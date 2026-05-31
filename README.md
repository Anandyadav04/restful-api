# RESTful API CRUD Application

A full-stack CRUD application built using **Node.js**, **Express.js**, **EJS**, and **CSS**. The project follows REST architectural principles and allows users to create, view, edit, and delete posts through a simple web interface.

## Features

* Create new posts
* View all posts
* Read individual post details
* Edit existing posts
* Delete posts
* RESTful routing
* Server-side rendering with EJS
* Clean and responsive user interface

## Tech Stack

* **Node.js**
* **Express.js**
* **EJS**
* **CSS**
* **JavaScript**

## Project Structure

```text
restful-api/
│
├── public/
│   ├── home.css
│   └── style.css
│
├── views/
│   ├── includes/
│   ├── home.ejs
│   ├── index.ejs
│   ├── post.ejs
│   ├── new.ejs
│   └── edit.ejs
│
├── index.js
├── package.json
├── package-lock.json
└── .gitignore
```

## Application Pages

| Page         | Description             |
| ------------ | ----------------------- |
| Home         | Landing page            |
| Posts        | View all posts          |
| New Post     | Create a new post       |
| Post Details | View a single post      |
| Edit Post    | Update an existing post |

## RESTful Routes

| Method | Route           | Purpose               |
| ------ | --------------- | --------------------- |
| GET    | /posts          | Get all posts         |
| GET    | /posts/new      | Display new post form |
| POST   | /posts          | Create a post         |
| GET    | /posts/:id      | View a single post    |
| GET    | /posts/:id/edit | Display edit form     |
| PATCH  | /posts/:id      | Update a post         |
| DELETE | /posts/:id      | Delete a post         |

## Installation

### Clone Repository

```bash
git clone https://github.com/Anandyadav04/restful-api.git
```

### Navigate to Project

```bash
cd restful-api
```

### Install Dependencies

```bash
npm install
```

### Run Application

```bash
node index.js
```

Open:

```text
http://localhost:3000
```

## What I Learned

* Express Routing
* REST Architecture
* CRUD Operations
* EJS Templating
* HTTP Methods
* Dynamic Route Parameters
* Form Handling
* Server-Side Rendering


## Author

Anand Yadav

GitHub: https://github.com/Anandyadav04

---

⭐ If you found this project useful, feel free to star the repository.
