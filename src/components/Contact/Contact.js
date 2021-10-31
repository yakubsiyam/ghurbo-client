import React from "react";
import { Link } from "react-router-dom";
import contactImg from "../../images/contact.png";

const Contact = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center my-5">
        <div className="col-md-6">
          <img src={contactImg} alt="contact" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <form className="row g-3 p-3 shadow box rounded-home">
            <h1 className="text-color text-center">Get In Touch</h1>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword4" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input type="text" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress2" className="form-label">
                Phone
              </label>
              <input type="text" className="form-control" id="inputAddress2" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputCity" className="form-label">
                City
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label htmlFor="inputState" className="form-label">
                State
              </label>
              <select id="inputState" className="form-select">
                <option value>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="col-md-2">
              <label htmlFor="inputZip" className="form-label">
                Zip
              </label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  Newsletter
                </label>
              </div>
            </div>
            <div className="col-12">
              <Link
                to="/notfound"
                className="btn btn-home mt-3 rounded-3 text-center"
              >
                Submit
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
