import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
  const { title, img, description, author, date } = props.blog;
  return (
    <div className="col-md-6">
      <div class="card">
        <img src={img} class="card-img-top img-fluid" alt="..." />
        <div class="card-body">
          <h4 class="card-title">{title}</h4>
          <p class="card-text">{description}</p>
          <small className="text-secondary d-block">author: {author}</small>
          <small className="text-secondary d-block">date: {date}</small>
          <Link
            to="/notfound"
            className="btn btn-home mt-3 rounded-3 text-center"
          >
            Read More...
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
