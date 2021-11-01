import React, { useEffect, useState } from "react";
import destinationImg from "../../images/destination-img.jpg";
import Destination from "../Destination/Destination";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  useEffect(() => {
    fetch("https://stormy-tor-24611.herokuapp.com/destinations")
      .then((res) => res.json())
      .then((data) => setDestinations(data));
  }, []);
  return (
    <div className="container">
      <div className="row justify-content-between my-5">
        <div className="col-md-6 row align-items-center justify-content-between">
          <div>
            <h1 className="my-3 text-color">Find Your Destination</h1>
            <small className="text-secondary">
              We Provide all types of holiday Packages: city breaks, beach
              trips, luxury gateways, all-inclusive resorts, and tours for
              travelers of all ages and packages from all country. To find the
              trip that is right for you in our best travel deals with ghurbo.
            </small>
          </div>
        </div>
        <div className="col-md-6">
          <img className="img-fluid" src={destinationImg} alt="services img" />
        </div>
      </div>

      {/* destination card */}
      <section>
        <h1 className="text-color text-center pb-3">Our Destinations</h1>
        <div className="row g-4 mb-5">
          {destinations.map((destination) => (
            <Destination
              key={destination._id}
              destination={destination}
            ></Destination>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Destinations;
