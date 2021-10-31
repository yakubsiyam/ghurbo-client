import React, { useEffect, useState } from "react";
import CartDetails from "./CartDetails/CartDetails";

const Mycart = () => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch(`https://stormy-tor-24611.herokuapp.com/usersinfo`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-color text-center">Reserved Destination</h1>
      <section>
        <div className="row g-4 my-3">
          {carts.map((cart) => (
            <CartDetails key={cart._id} cart={cart}></CartDetails>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Mycart;
