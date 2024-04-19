import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export const Latest = () => {
  const [blogPosts, setBlogPosts] = useState([]);

    // get all blogs
    const getAllBlogs = async () => {
      const { data } = await axios.get(`http://localhost:8000/blog`);
      setBlogPosts(data);
    };
    useEffect(() => {
      getAllBlogs();
    }, []);
  return (
    <>
      <div
        id="latest"
        className="flex justify-center items-center text-4xl font-extrabold my-12"
      >
        <h1>Latest Posts</h1>
      </div>
      <div className="flex justify-center gap-4 md:gap-18 lg:gap-20 items-center flex-wrap mx-12 md:mx-48 lg:mx-12 xl:mx-64 my-12">
        {blogPosts?.map((post) => (
          <>
            <div
              className="card w-[350px] h-[400px] bg-base-100 shadow-xl"
              key={post.id}
            >
              <figure>
                <img
                  className="w-[350px] aspect-square object-cover"
                  src={post.imgSrc}
                  alt={post.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-center">{post.title}</h2>
                <div className="card-actions justify-center">
                  <Link
                    to={`/home/blogpost/${post.id}`}
                    className="btn btn-secondary transition ease-in-out delay-150 hover:-translate-y-1"
                  >
                    Read more
                    <span>
                      <img
                        src="https://img.icons8.com/?size=16&id=45300&format=png"
                        alt="arrow"
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
