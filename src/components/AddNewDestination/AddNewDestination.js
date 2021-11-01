import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";

const AddNewDestination = () => {
  const refTitle = useRef();
  const refDescription = useRef();
  const refImage = useRef();
  const refLocation = useRef();
  const refDate = useRef();
  const refDuration = useRef();
  const refCost = useRef();
  const refPerson = useRef();
  const refMeal = useRef();

  const history = useHistory();

  const handleAddDestination = (e) => {
    const title = refTitle.current.value;
    const description = refDescription.current.value;
    const img = refImage.current.value;
    const location = refLocation.current.value;
    const date = refDate.current.value;
    const duration = parseInt(refDuration.current.value);
    const cost = parseInt(refCost.current.value);
    const person = parseInt(refPerson.current.value);
    const meal = parseInt(refMeal.current.value);

    const newDestination = {
      title,
      description,
      img,
      location,
      date,
      duration,
      cost,
      person,
      meal,
    };

    axios
      .post(
        "https://stormy-tor-24611.herokuapp.com/destinations",
        newDestination
      )
      .then((res) => {
        if (res.data.insertedId) {
          alert("Destination Added Successfully");
          history.push("/destinations");
        }
      });
    e.preventDefault();
  };

  return (
    <div className="container">
      <form
        onSubmit={handleAddDestination}
        className="row g-3 bg-light shadow p-3 my-5 rounded-home"
      >
        <h3 className="fw-bold text-center">Add A New Destination</h3>
        <p className="text-danger text-center">By Admin</p>
        <div className="col-12">
          <label htmlFor="image" className="form-label">
            Image(url)
          </label>
          <input
            type="url"
            className="form-control"
            id="image"
            required
            ref={refImage}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            required
            ref={refTitle}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="desc" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            required
            ref={refDescription}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="location" className="form-label">
            location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            required
            ref={refLocation}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="text"
            className="form-control"
            id="date"
            placeholder="date month - date month"
            required
            ref={refDate}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="duration" className="form-label">
            Duration
          </label>
          <input
            type="number"
            className="form-control"
            id="duration"
            required
            ref={refDuration}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="cost" className="form-label">
            Cost
          </label>
          <input
            type="number"
            className="form-control"
            id="cost"
            required
            ref={refCost}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="meal" className="form-label">
            Meal
          </label>
          <input
            type="number"
            className="form-control"
            id="meal"
            required
            ref={refMeal}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="person" className="form-label">
            Person
          </label>
          <input
            type="number"
            className="form-control"
            id="person"
            required
            ref={refPerson}
          />
        </div>

        <button
          type="submit"
          className="btn btn-home w-50 mx-auto my-3 rounded-pill"
        >
          Add A New Destination
        </button>
      </form>
    </div>
  );
};

export default AddNewDestination;
