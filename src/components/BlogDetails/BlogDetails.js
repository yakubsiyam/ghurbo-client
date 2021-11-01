import React from "react";
import { Link } from "react-router-dom";

const BlogDetails = (props) => {
  const { title, img, description, author, date } = props.blog;
  return (
    <div className="col-md-6">
      <div className="card h-100">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
          <small className="text-secondary d-block">Author: {author}</small>
          <small className="text-secondary d-block">
            Published Date: {date}
          </small>
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
