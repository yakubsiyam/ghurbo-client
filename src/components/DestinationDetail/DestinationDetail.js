import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const DestinationDetail = () => {
  const { destinationId } = useParams();
  const [singleDestination, setSingleDestination] = useState([]);

  const {
    title,
    img,
    description,
    location,
    tourLength,
    duration,
    cost,
    meal,
    person,
  } = singleDestination;

  useEffect(() => {
    fetch(
      `https://stormy-tor-24611.herokuapp.com/destinations/${destinationId}`
    )
      .then((res) => res.json())
      .then((data) => setSingleDestination(data));
  });
  return (
    <div className="container mt-5">
      <div className="mx-lg-5 px-lg-5">
        <h1 className="fw-bold text-color">{title}</h1>
        <span className="fs-6 text-secondary d-block">
          <i class="fas fa-map-marker-alt"></i> {location}
        </span>
        <small className="my-3 text-secondary d-block">{description}</small>
        <img
          className="my-3 img-fluid rounded d-block mx-auto"
          src={img}
          alt="img"
        />
        <div className="row justify-content-between mt-2">
          <div className="col-md-8">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i class="far fa-calendar-alt"></i> {tourLength}
                  </span>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i class="fas fa-location-arrow"></i> {duration}
                  </span>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i class="fas fa-user"></i> {person}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="fs-3 text-color">
          <i className="fas fa-dollar-sign"></i> {cost}
        </span>
      </div>
    </div>
  );
};

export default DestinationDetail;
