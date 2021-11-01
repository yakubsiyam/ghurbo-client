import React, { useEffect, useState } from "react";
import HomeDestination from "../HomeDestination/HomeDestination";
import bannerOne from "../../images/banner1.jpg";
import bannerTwo from "../../images/banner2.jpg";
import bannerThree from "../../images/banner3.jpg";
import paragliding from "../../images/paragliding.png";
import route from "../../images/route.png";
import tourGuide from "../../images/tour-guide.png";
import map from "../../images/map.png";
import { Link } from "react-router-dom";
import Blog from "../Blog/Blog";

const Home = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://stormy-tor-24611.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div className="container">
      {/* home banner */}
      <div className="row my-5 justify-content-between align-items-center">
        <div className="col-md-5">
          <h4 className="text-color">Welcome to ghurbo</h4>
          <h1 className="fw-bold my-4 fs-1">
            Discover Your Favorite Place with Us
          </h1>
          <small className="text-secondary">
            Travel to the any corner of the world, without going around in
            circles
          </small>
        </div>
        <div className="col-md-7 pt-3 pt-md-0">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={bannerOne}
                  className="rounded-home d-block w-100"
                  alt="Banner Img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={bannerTwo}
                  className="rounded-home d-block w-100"
                  alt="Banner Img"
                />
              </div>
              <div className="carousel-item">
                <img
                  src={bannerThree}
                  className="rounded-home d-block w-100"
                  alt="Banner Img"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/*destination card */}
      <section>
        <h1 className="text-color text-center pb-3">Top Destination</h1>
        <div className="row g-4 mb-5">
          {destinations.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            destinations.map((destination) => (
              <HomeDestination
                key={destination._id}
                destination={destination}
              ></HomeDestination>
            ))
          )}
        </div>
      </section>

      {/* about us */}
      <section>
        <h1 className="text-color text-center pb-3">About Us</h1>
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <div className="row justify-content-between align-items-center g-4">
              <div className="col-lg-6">
                <div className="card">
                  <img
                    src={paragliding}
                    className="card-img-top w-25 pt-2 d-block mx-auto"
                    alt="paragliding"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Activities</h6>
                    <small className="card-text text-secondary">
                      A small river named Duden flows by their place and
                      supplies it with the necessary
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <img
                    src={route}
                    className="card-img-top img-fluid w-25 pt-2 d-block mx-auto"
                    alt="route"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Travel Arrangements</h6>
                    <small className="card-text text-secondary">
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <img
                    src={tourGuide}
                    className="card-img-top w-25 pt-2 d-block mx-auto"
                    alt="tour Guide"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Private Guide</h6>
                    <small className="card-text text-secondary">
                      Separated they live in Bookmarksgrove right at the coast
                      large language ocean.
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card">
                  <img
                    src={map}
                    className="card-img-top w-25 pt-2 d-block mx-auto"
                    alt="map"
                  />
                  <div className="card-body">
                    <h6 className="card-title">Location Manager</h6>
                    <small className="card-text text-secondary">
                      We can manage your dream building A small river named
                      Duden flows by their place
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 pt-md-0 pt-3">
            <h1 className="text-dark fw-bold">
              Make Your Tour Memorable and Safe With Us
            </h1>
            <small className="text-secondary my-4 d-block">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth. Far far
              away, behind the word mountains, far from the countries Vokalia
              and Consonantia, there live the blind texts. Separated they live
              in Bookmarksgrove right at the coast of the Semantics, a large
              language ocean. A small river named Duden flows by their place and
              supplies it with the necessary regelialia.
            </small>
            <Link
              to="/destinations"
              className="btn btn-home mt-3 rounded-3 text-center"
            >
              Search Destination
            </Link>
          </div>
        </div>
      </section>

      {/* blog */}
      <Blog></Blog>
    </div>
  );
};

export default Home;
