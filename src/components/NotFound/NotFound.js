import React from "react";
import notFoundImg from "../../images/notfound.png";

const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-md-6">
          <img className="img-fluid" src={notFoundImg} alt="not found img" />
        </div>
        <div className="col-md-6">
          <h1 className="text-color">Sorry, page not found :-(</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
