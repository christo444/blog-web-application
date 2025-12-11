# 📝 Blog Web Application

A modern, full-featured blog application built with Node.js, Express, and EJS. This application allows users to create, read, update, and delete blog posts with a beautiful, responsive user interface.

![Blog Application](https://img.shields.io/badge/Node.js-Express-green)
![EJS](https://img.shields.io/badge/Template-EJS-blue)
![Bootstrap](https://img.shields.io/badge/CSS-Bootstrap_5-purple)

## ✨ Features

- **📝 Create Posts**: Write and publish new blog posts with title, content, and author information
- **👀 View Posts**: Browse all posts on a beautifully designed home page with card-based layout
- **✏️ Edit Posts**: Update existing posts with an intuitive editing interface
- **🗑️ Delete Posts**: Remove posts with confirmation prompts to prevent accidental deletions
- **📱 Responsive Design**: Fully responsive UI that works seamlessly on mobile, tablet, and desktop devices
- **🎨 Modern UI/UX**: Clean, gradient-themed design with smooth animations and transitions
- **⚡ Fast & Lightweight**: Built with performance in mind using Express.js

## 🛠️ Technologies Used

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating
- **Body-Parser** - Parse incoming request bodies
- **Method-Override** - Support PUT and DELETE methods in HTML forms

### Frontend
- **Bootstrap 5** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **Google Fonts** - Playfair Display & Inter fonts
- **Custom CSS** - Additional styling and animations

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

## 🚀 Installation & Setup

1. **Clone or download the project**
   ```bash
   cd "c:\Users\Christo\Desktop\web_development_projects\1.Capstones\3.Blog Web Application"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to: `http://localhost:3000`

## 📁 Project Structure

```
3.Blog Web Application/
├── index.js                    # Main server file with routes and logic
├── package.json                # Project dependencies and scripts
├── README.md                   # Project documentation
├── public/                     # Static files
│   └── styles/
│       └── main.css           # Custom CSS styles
└── views/                      # EJS templates
    ├── index.ejs              # Home page (all posts)
    ├── create.ejs             # Create new post form
    ├── edit.ejs               # Edit existing post form
    ├── post.ejs               # Individual post view
    └── partials/              # Reusable components
        ├── header.ejs         # HTML head, meta tags, imports
        ├── navbar.ejs         # Navigation bar
        └── footer.ejs         # Footer and scripts
```

## 🎯 Usage Guide

### Creating a New Post

1. Click the **"Create New Post"** button on the home page or navigation bar
2. Fill in the form:
   - **Title**: Enter a catchy title for your post
   - **Author**: Your name
   - **Content**: Write your blog post content
3. Click **"Publish Post"** to save

### Viewing Posts

- All posts are displayed on the home page in a card grid layout
- Click **"Read more"** on any post card to view the full post
- Post previews show the first 120 characters

### Editing a Post

1. Open any post by clicking on it
2. Click the **"Edit Post"** button
3. Modify the title, author, or content
4. Click **"Save Changes"** to update

### Deleting a Post

1. Open any post by clicking on it
2. Click the **"Delete Post"** button
3. Confirm the deletion in the popup
4. The post will be permanently removed

## 🎨 Design Features

### Color Scheme
- **Primary Gradient**: Purple to Pink (`#667eea` → `#764ba2`)
- **Typography**: 
  - Headings: Playfair Display (serif)
  - Body: Inter (sans-serif)

### UI Components
- Gradient hero section with call-to-action
- Card-based blog post layout
- Smooth hover effects and animations
- Sticky navigation bar
- Responsive grid system (3 columns → 2 columns → 1 column)
- Empty state with helpful messaging
- Form validation and feedback
- Delete confirmation dialogs

## 🔄 API Routes

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/` | Display all blog posts (home page) |
| GET | `/posts/new` | Show create post form |
| POST | `/posts` | Create a new blog post |
| GET | `/posts/:id` | View a specific post |
| GET | `/posts/:id/edit` | Show edit form for a post |
| PUT | `/posts/:id` | Update an existing post |
| DELETE | `/posts/:id` | Delete a post |

## 💾 Data Storage

Currently, the application uses **in-memory storage** (posts are stored in an array). This means:
- ✅ Fast and simple for development
- ⚠️ Data is lost when the server restarts
- 📝 Sample posts are provided on startup

### Future Database Integration
To persist data permanently, you can integrate:
- MongoDB with Mongoose
- PostgreSQL with Sequelize
- SQLite for lightweight storage

## 🚧 Future Enhancements

- [ ] Add database integration for persistent storage
- [ ] User authentication and authorization
- [ ] Rich text editor for post content
- [ ] Image upload functionality
- [ ] Post categories and tags
- [ ] Search and filter functionality
- [ ] Comments system
- [ ] Social media sharing
- [ ] Dark mode toggle
- [ ] Pagination for large number of posts
- [ ] Draft posts feature
- [ ] Reading time estimation
- [ ] SEO optimization

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can change it in [index.js](index.js):
```javascript
const port = 3001; // Change to any available port
```

### Dependencies Not Installing
Try clearing npm cache and reinstalling:
```bash
npm cache clean --force
npm install
```

### Module Not Found Errors
Make sure you're using ES6 modules. Check that your [package.json](package.json) includes:
```json
"type": "module"
```

## 📝 License

This project is open source and available for educational purposes.

## 👨‍💻 Author

Created as a capstone project for web development learning.

## 🙏 Acknowledgments

- Bootstrap team for the excellent CSS framework
- Google Fonts for beautiful typography
- Express.js community for comprehensive documentation

---

**Happy Blogging! 📝✨**

For questions or issues, please feel free to open an issue or contribute to the project.
