import express from 'express';
import { getAllBlogs, getOneBlog, addBlog } from './controller.js';

const router = express.Router();

// http://localhost:8000/blog/
router.route('/').get(getAllBlogs).post(addBlog);

// http://localhost:8000/blog/:id
router.route('/:id').get(getOneBlog);

export default router;
