import React from "react";
import { Link } from "react-router-dom";
import notFoundImg from "../../images/notfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center my-3">
        <div className="col-md-7">
          <img className="img-fluid" src={notFoundImg} alt="not found img" />
        </div>
        <div className="col-md-5">
          <h1 className="text-color">Sorry, page not found :-(</h1>
          <Link
            to="/home"
            className="btn btn-home mt-3 mx-auto rounded-3 text-center"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
