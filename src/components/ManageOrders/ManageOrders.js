import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ManageOrders = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-tor-24611.herokuapp.com/usersinfo`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleStatus = (id) => {
    const url = `https://stormy-tor-24611.herokuapp.com/usersinfo/${id}`;
    axios.put(url).then((res) => {
      if (res.data.modifiedCount) {
        alert("Reservation Accept Successfully");
        fetch(`https://stormy-tor-24611.herokuapp.com/usersinfo`)
          .then((res) => res.json())
          .then((data) => setCarts(data));
      }
    });
  };

  const cancelReservation = (id) => {
    const proceed = window.confirm(
      "Are You Sure, you want to delete this reservation?"
    );
    if (proceed) {
      const url = `https://stormy-tor-24611.herokuapp.com/usersinfo/${id}`;
      axios.delete(url).then((res) => {
        if (res.data.deletedCount) {
          alert("Reservation Cancel Successfully");
          const remainingReservation = carts.filter((cart) => cart._id !== id);
          setCarts(remainingReservation);
        }
      });
    }
  };

  return (
    <div className="container">
      <h1 className="text-color text-center">Manage All Orders</h1>
      <p className="text-center text-warning">By Admin</p>
      <section>
        <div className="row g-4 my-3">
          {carts.map((cart) => (
            <div className="col-lg-4 col-md-6 text-start" key={cart._id}>
              <div className="shadow rounded-home h-100 card p-4">
                <h3>{cart.title}</h3>
                <p>Total Cost: {cart.cost}</p>

                <h4 className="text-color">Client Information: </h4>
                <div>
                  <h5>Name: {cart.userName}</h5>
                  <p className="text-secondary">Email: {cart.email}</p>
                  <p className="text-secondary">Address: {cart.address}</p>
                  <p className="text-secondary">Phone: {cart.phone}</p>
                  <p className="text-secondary">
                    Status: <span className="text-color">{cart.status}</span>
                  </p>
                </div>
                <div className="my-3">
                  <Link
                    onClick={() => cancelReservation(cart._id)}
                    className="btn btn-warning"
                    to="/manageorders"
                  >
                    Cancel
                  </Link>
                  {cart.status === "pending" && (
                    <span
                      onClick={() => handleStatus(cart._id)}
                      className="btn btn-success ms-1"
                    >
                      Accept
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ManageOrders;
