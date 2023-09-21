import Navbar1 from "../components/Navbar/navbar.js";
import Footer from "../components/Footer/footer.js";
import "bootstrap/dist/css/bootstrap.css";

import "./home.css";
import React from "react";
import {profileImage} from '../components/assets/Content/profileImage.js'
const {id, home, imageName, link} = profileImage;
const Home = () => (
  <div className="">
    {/* NAVBAR */}
    <Navbar1 />

    {/* <!--=============== ABOUT ME ===============--> */}
    <div className="portfolio-section d-flex flex-column justify-content-center">
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-5 order-1 order-md-2">
            <img
              // src={require("../components/assets/image/home/Profile Img.jpeg")}
              src={require({link})}
              alt={imageName}
              className="profileImg"
            />
          </div>
          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1 className="devProfileHeading mb-3">
              Hey, I am <span className="dev">Akash Kulshrestha</span>
            </h1>
            <p className="devProfileText mb-3">I am a Software Developer.</p>
          </div>
        </div>
      </div>
    </div>

    {/* FOOTER */}
    <Footer />
  </div>
);

export default Home;
