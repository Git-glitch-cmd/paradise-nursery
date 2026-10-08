import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div className="about-container">
      <h1>About Paradise Nursery</h1>
      <p>
        Paradise Nursery is an online plant shop dedicated to bringing the
        beauty of nature into your home and workplace. We carefully select
        healthy, vibrant houseplants and deliver them fresh to your doorstep.
      </p>

      <h2>Our Mission</h2>
      <p>
        Our mission is to make indoor gardening easy and enjoyable for
        everyone — from beginners to experienced plant lovers — by offering
        high-quality plants, honest prices, and helpful care guidance.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Wide variety of indoor houseplants across multiple categories</li>
        <li>Detailed plant information including care instructions</li>
        <li>Easy online shopping with a simple cart experience</li>
        <li>Fast and safe delivery of live plants</li>
      </ul>

      <h2>Contact</h2>
      <p>Email: hello@paradisenursery.com</p>
      <p>Phone: +1 (555) 987-6543</p>

      <Link to="/plants">
        <button className="shop-btn">Shop Plants</button>
      </Link>
    </div>
  );
}

export default AboutUs;
