
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Contact from "../components/Contact";
import axios from 'axios';

export const Post = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [content, setContent] = useState('');

 // add a blog
 const handleSubmit = async (event) => {
  event.preventDefault();

  const { data } = await axios.post('http://localhost:8000/blog', {
    title,
    author,
    imgSrc,
    content,
  });

  console.log('Blog added:', data);
  setTitle('');
  setAuthor('');
  setImgSrc(''),
  setContent('')
  alert("Entry added successfully!");
  navigate("/home");
};

  return (
    <>
      <div className="flex justify-center my-12 text-3xl font-bold">
        <h1>Post your Blog here!</h1>
      </div>
      <form
        className="flex flex-col justify-center my-12 gap-2 mx-2"
        onSubmit={handleSubmit}
        method="post"
      >
        <div className="flex justify-center">
          <input
            type="text"
            name="title"
            value={title}
            placeholder="Enter a title"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="text"
            name="author"
            value={author}
            placeholder="Enter the name of the author"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <input
            type="url"
            name="imageUrl"
            value={imgSrc}
            placeholder="Enter the image url"
            className="input input-bordered input-primary w-[650px]"
            required
            onChange={(e) => setImgSrc(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <textarea
            name="content"
            value={content}
            className="textarea textarea-primary w-[650px] h-[500px]"
            placeholder="Write content"
            required
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div className="flex justify-center w-full">
          <button className="btn btn-active px-32 md:px-80 lg:px-80">
            Post
          </button>
        </div>
      </form>
      <Contact />
    </>
  );
};

export default Post;
