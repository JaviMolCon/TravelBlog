import data from "./data/data.js";

// Get all blogs
const getAllBlogs = (req, res) => {
  res.json(data);
};

//  // Get a blog by id
const getOneBlog = (req, res) => {
  const id = req.params.id;
  const blog = data.find((blog) => blog.id === +id);
  res.json(blog);
};

//  // Adding a blog
const addBlog = (req, res) => {
  const { title, author, imgSrc, content } = req.body;

  const blogId = data.length + 1;

  const newBlog = {
    id: blogId,
    title,
    author,
    imgSrc,
    content,
  };
  data.push(newBlog);
  res.status(201).json(newBlog);
};

export { getAllBlogs, getOneBlog, addBlog };
