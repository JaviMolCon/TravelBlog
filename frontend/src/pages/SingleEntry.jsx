// import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState} from "react";
import Contact from "../components/Contact";
import axios from 'axios';

const SingleEntry = () => {
  const [singleBlogPost, setSingleBlogPost] = useState([]);
  const { id } = useParams();

  // get a blog by id
  const getBlogById = async (id) => {
    const { data } = await axios.get(`http://localhost:8000/blog/${id}`);
    setSingleBlogPost(data);
  };
  getBlogById(id);

  return singleBlogPost? (
    <>
      <div className="flex flex-col items-center justify-center my-12">
        <div className="mb-2 text-3xl font-bold">
          <h2 className="text-center ">{singleBlogPost.title}</h2>
        </div>
        <p className="flex text-xl mb-4">
          <p className="font-bold pe-2">Post by:</p> {singleBlogPost.author}
        </p>
        <img
          className="w-[800px] h-[500px] aspect-square object-cover px-2 rounded-3xl"
          src={singleBlogPost.imgSrc}
          alt={singleBlogPost.title}
        />
        <div className="flex justify-center flex-wrap gap-4 md:gap-[440px] lg:gap-[480px] ms-2 my-2">
          <p className="flex">
            <p className="font-bold pe-2">Date: </p>
            {singleBlogPost.date}
          </p>
          <p className="flex">
            <p className="font-bold pe-2">Comments: </p>
            {singleBlogPost.comments}
          </p>
        </div>
        <div className="flex justify-items-center lg:w-[780px] md:w-[730px] mx-4">
          <p className="flex justify-center items-center leading-loose text-lg">
            {singleBlogPost.content}
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center my-12">
        <Link
          to="/home"
          className="btn btn-secondary transition ease-in-out delay-150 hover:-translate-y-1 text-xl"
        >
          Back to home
        </Link>
      </div>
      <Contact />
    </>
  ) : (
    <span className="loading loading-spinner text-secondary"></span>
  );
};

export default SingleEntry;
