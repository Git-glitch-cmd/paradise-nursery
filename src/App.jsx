import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "./Navbar";
import ProductList from "./ProductList";
import CartItem from "./CartItem";
import AboutUs from "./AboutUs";
import "./App.css";

// Landing page - Paradise Nursery ka home
function LandingPage() {
  return (
    <div className="landing">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>
        <p>
          Welcome to Paradise Nursery — your online destination for beautiful,
          healthy houseplants delivered fresh to your door.
        </p>
        <Link to="/plants">
          <button className="get-started-btn">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
     <BrowserRouter basename="/paradise-nursery">

        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/plants" element={<ProductList />} />
          <Route path="/cart" element={<CartItem />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
