import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CartDetails = (props) => {
  const { _id, address, cost, title, userName, email, phone, status } =
    props.cart;

  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-tor-24611.herokuapp.com/usersinfo`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

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
    <div className="col-lg-4 col-md-6 text-start">
      <div className="shadow rounded-home h-100 card p-4">
        <h3>{title}</h3>
        <p>Total Cost: {cost}</p>

        <h4 className="text-color">Client Information: </h4>
        <div>
          <h5>Name: {userName}</h5>
          <p className="text-secondary">Email: {email}</p>
          <p className="text-secondary">Address: {address}</p>
          <p className="text-secondary">Phone: {phone}</p>
          <p className="text-secondary">
            Status: <span className="text-color">{status}</span>
          </p>
        </div>
        <div className="my-3">
          <Link
            onClick={() => cancelReservation(_id)}
            className="btn btn-warning"
            to="/mycart"
          >
            Cancel Reservation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
