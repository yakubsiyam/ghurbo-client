import React from "react";
import { Link } from "react-router-dom";

const Destination = (props) => {
  const { _id, title, img, duration, cost, person, location, meal } =
    props.destination;
  return (
    <div className="col-md-4">
      <div className="rounded-home box shadow">
        <div className="row justify-content-center align-items-center h-100">
          <div className="mb-3">
            <img
              className="rounded-t img-fluid d-block"
              src={img}
              alt="box img"
            />
            <div className="ms-3">
              <small className="text-color fw-bold">{duration} Tour</small>
              <h2 className="text-dark fw-bold fs-5">{title}</h2>

              <span className="fs-6 text-secondary d-block">
                <i className="fas fa-map-marker-alt"></i> {location}
              </span>

              <div className="row justify-content-between mt-2">
                <div className="col-lg-4">
                  <span className="fs-6 d-block">
                    <span>
                      <i className="fas fa-utensils"></i> {meal}
                    </span>
                  </span>
                </div>
                <div className="col-lg-4">
                  <span className="fs-6 d-block">
                    <span>
                      <i className="fas fa-user"></i> {person}
                    </span>
                  </span>
                </div>
                <div className="col-lg-4">
                  <span className="fs-6 d-block">
                    <span>
                      <i className="fas fa-dollar-sign"></i>
                    </span>{" "}
                    {cost}
                  </span>
                </div>
              </div>
              <Link
                to={`/destinations/${_id}`}
                className="btn btn-destination mt-3 rounded-3 text-center"
              >
                Destination Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
