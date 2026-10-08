import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);
  // cart mein total items gino
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="logo">Paradise Nursery</div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>
        <Link to="/cart">
          Cart<span className="cart-count">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
