import React, { useEffect, useState } from "react";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    fetch("https://stormy-tor-24611.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <div className="container">
      <section>
        <h1 className="text-color text-center pb-3 mt-3">Blogs</h1>
        <div className="row g-4 mb-5">
          {blog.map((blog) => (
            <BlogDetails key={blog.id} blog={blog}></BlogDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
