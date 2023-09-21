import Navbar1 from "../components/Navbar/navbar.js";
import Footer from "../components/Footer/footer.js";
import "bootstrap/dist/css/bootstrap.css";

import "./home.css";
// import About from '../About/About.js'
// import {Home} from './home.js'
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import {RoutePath} from '../../router/Router.js'
// import { Router } from "react-router-dom";

const Home = () => (
  // <Router>
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/* <RoutePath /> */}

      {/* <!--=============== ABOUT ME ===============--> */}
      <div className="portfolio-section d-flex flex-column justify-content-center">
        <div className="container mt-5">
          <div className="row">
            <div className="col-12 col-md-5 order-1 order-md-2">
              <img
                src={require("../components/assets/image/home/Profile Img.jpeg")}
                alt="Profile"
                className="profileImg"
              />
            </div>
            <div className="col-12 col-md-7 order-2 order-md-1">
              <h1 className="devProfileHeading mb-3">
                Hey, I am <span className="dev">Akash Kulshrestha</span>
              </h1>
              <p className="devProfileText mb-3">I am a Software Developer.</p>
              {/* <!-- <button className="custom-Btn">Contact Me</button> --> */}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
    // </Router>
);

export default Home;
