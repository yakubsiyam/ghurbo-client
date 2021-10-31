import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DestinationDetail = () => {
  const { destinationId } = useParams();
  const [singleDestination, setSingleDestination] = useState([]);
  const { user } = useAuth();

  const {
    title,
    img,
    description,
    location,
    tourLength,
    duration,
    cost,
    person,
  } = singleDestination;

  useEffect(() => {
    fetch(
      `https://stormy-tor-24611.herokuapp.com/destinations/${destinationId}`
    )
      .then((res) => res.json())
      .then((data) => setSingleDestination(data));
  }, []);
  return (
    <div className="container mt-5">
      <div className="mx-lg-5 px-lg-5">
        <h1 className="fw-bold text-color">{title}</h1>
        <span className="fs-6 text-secondary d-block">
          <i className="fas fa-map-marker-alt"></i> {location}
        </span>
        <small className="my-3 text-secondary d-block">{description}</small>
        <img
          className="my-3 rounded-home mx-auto img-fluid"
          src={img}
          alt="img"
        />
        <div className="row justify-content-between mt-2">
          <div className="col-md-8">
            <div className="row justify-content-between">
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i className="far fa-calendar-alt"></i> {tourLength}
                  </span>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i className="fas fa-location-arrow"></i> {duration}
                  </span>
                </span>
              </div>
              <div className="col-md-4">
                <span className="fs-6 d-block">
                  <span>
                    <i className="fas fa-user"></i> {person}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <span className="fs-3 text-color d-block">
          <i className="fas fa-dollar-sign"></i> {cost}
        </span>

        <form className="row g-3 bg-light shadow p-3 my-5 rounded-home">
          <h3 className="text-dark text-center">Please Fill Up This Form</h3>
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={user.displayName}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={user.email}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input type="text" className="form-control" id="address" required />
          </div>
          <div className="col-12">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phone" required />
          </div>
          <Link
            to={`/destinations`}
            className="btn btn-home w-50 mx-auto my-3 rounded-pill"
          >
            Book Your Destination
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DestinationDetail;
