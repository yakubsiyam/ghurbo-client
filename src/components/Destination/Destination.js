import React from "react";
import { Link } from "react-router-dom";

const Destination = (props) => {
  const { _id, title, img, duration, cost, person, location, meal } =
    props.destination;
  return (
    <div className="col-md-4">
      <div className="border rounded shadow">
        <div className="row justify-content-center align-items-center h-100">
          <img className="img-fluid rounded" src={img} alt="" />
          <div className="m-3">
            <div className="ms-3">
              <small className="text-color fw-bold">{duration} Tour</small>
              <h2 className="text-dark fw-bold fs-5">{title}</h2>

              <span className="fs-6 text-secondary d-block">
                <i class="fas fa-map-marker-alt"></i> {location}
              </span>

              <div className="row justify-content-between mt-2">
                <div className="col-lg-4">
                  <span className="fs-6 d-block">
                    <span>
                      <i class="fas fa-utensils"></i> {meal}
                    </span>
                  </span>
                </div>
                <div className="col-lg-4">
                  <span className="fs-6 d-block">
                    <span>
                      <i class="fas fa-user"></i> {person}
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
