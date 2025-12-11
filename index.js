import express from "express";
import bodyParser from "body-parser";
import methodOverride from "method-override";

const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Set EJS as templating engine
app.set("view engine", "ejs");

// In-memory storage for blog posts
let posts = [
  {
    id: 1,
    title: "Welcome to My Blog",
    content: "This is your first blog post! You can edit or delete it, or create new posts to share your thoughts with the world.",
    author: "Blog Admin",
    date: new Date("2025-12-11")
  },
  {
    id: 2,
    title: "Getting Started with Blogging",
    content: "Blogging is a wonderful way to express yourself and share your knowledge. Start by writing about topics you're passionate about!",
    author: "Blog Admin",
    date: new Date("2025-12-10")
  }
];

let nextId = 3;

// Routes

// Home page - Display all posts
app.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

// Create new post page
app.get("/posts/new", (req, res) => {
  res.render("create");
});

// View individual post
app.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.render("post", { post: post });
  } else {
    res.redirect("/");
  }
});

// Edit post page
app.get("/posts/:id/edit", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.render("edit", { post: post });
  } else {
    res.redirect("/");
  }
});

// Create post (POST)
app.post("/posts", (req, res) => {
  const newPost = {
    id: nextId++,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author || "Anonymous",
    date: new Date()
  };
  posts.unshift(newPost); // Add to beginning of array
  res.redirect("/");
});

// Update post (PUT)
app.put("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    post.title = req.body.title;
    post.content = req.body.content;
    post.author = req.body.author;
  }
  res.redirect("/");
});

// Delete post (DELETE)
app.delete("/posts/:id", (req, res) => {
  posts = posts.filter(p => p.id !== parseInt(req.params.id));
  res.redirect("/");
});

// Start server
app.listen(port, () => {
  console.log(`Blog server running on http://localhost:${port}`);
});
