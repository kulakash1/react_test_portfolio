import "./About.css";
import "bootstrap/dist/css/bootstrap.css";
// import Home from '../../home/home.js';
// import About from '../../About/About.js'
// import 'https://fonts.googleapis.com/css2?family=Bree+Serif&family=Caveat:wght@400;700&family=Lobster&family=Monoton&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Playfair+Display+SC:ital,wght@0,400;0,700;1,700&family=Playfair+Display:ital,wght@0,400;0,700;1,700&family=Roboto:ital,wght@0,400;0,700;1,400;1,700&family=Source+Sans+Pro:ital,wght@0,400;0,700;1,700&family=Work+Sans:ital,wght@0,400;0,700;1,700&display=swap'
// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import {Link} from 'react-router-dom';
import Navbar1 from "../components/Navbar/navbar.js";

// // JS Code

// // JavaScript for filter functionality
// const filterInput = document.getElementById("filter");
// const skillsList = document.querySelector(".skills-list");

// filterInput.addEventListener("input", function () {
//   const searchTerm = filterInput.value.toLowerCase();
//   const skills = Array.from(skillsList.children);

//   skills.forEach((skill) => {
//     const skillName = skill.textContent.toLowerCase();
//     if (skillName.includes(searchTerm)) {
//       skill.style.display = "inline-block";
//     } else {
//       skill.style.display = "none";
//     }
//   });
// });

// // To check
// // JavaScript for smooth scrolling when clicking on navigation links
// $(document).ready(function () {
//   $("a").on("click", function (event) {
//       if (this.hash !== "") {
//           event.preventDefault();
//           var hash = this.hash;
//           $("html, body").animate(
//               {
//                   scrollTop: $(hash).offset().top,
//               },
//               800,
//               function () {
//                   window.location.hash = hash;
//               }
//           );
//       }
//   });
// });

// ... Existing JavaScript code ...

// // Function to display the contact popup
// function openContactPopup() {
//   var popup = document.getElementById("contact-popup");
//   popup.style.display = "block";
// }

// // Function to close the contact popup
// function closeContactPopup() {
//   var popup = document.getElementById("contact-popup");
//   popup.style.display = "none";
// }

// // Function to toggle visibility of the education and skills sections
// function toggleSectionVisibility(sectionId) {
//   var section = document.getElementById(sectionId);
//   if (section.style.display === "none") {
//     section.style.display = "block";
//   } else {
//     section.style.display = "none";
//   }
// }

// ... Remaining JavaScript code ...

const About = () => {
  return (
    <div className="">
      {/* NAVBAR */}
      <Navbar1 />

      {/*  <!--=============== About ===============--> */}
      <div className="about-me-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column justify-content-center col-12 col-md-6 order-md-2">
              <h1 className="main-point mb-3">Facts</h1>
              <h1 className="about-me-section-heading mb-3">About me</h1>
              <img
                src={require("../components/assets/image/Profile Pic/home/Profile Img.jpeg")}
                // src={require({link})}
                // alt={imageName}
                alt="Profile Pic"
                className="about-me-section-image d-md-none mb-3"
              />
              <p className="description">
                Hello! I'm Akash Kulshrestha, a passionate technologist and 2023
                graduate from IIT Dhanbad with a BTech degree in Computer
                Science and Engineering. As a tech enthusiast, I have a strong
                foundation in web development, C++ coding, and competitive
                coding. Along with my technical skills, I possess excellent
                communication abilities, enabling me to effectively convey
                complex ideas. I gained valuable industry experience during a
                3-month internship as a Software Design Engineer at Newgen
                Software Technologies. Outside of my professional pursuits, I
                indulge in singing, cinematography, skating, and gymming as my
                hobbies. Let's connect and explore opportunities in the exciting
                world of technology!
              </p>
            </div>

            <div className="col-12 col-md-6 order-1 order-md-1 d-none d-md-block">
              <img
                src={require("../components/assets/image/Profile Pic/home/Profile Img.jpeg")}
                // src={require({link})}
                // alt={imageName}
                alt="Profile Pic"
                className="about-me-section-image"
              />
            </div>
          </div>
        </div>

        {/* <!-- About Me Education & Skills Section --> */}
        <main>
          <section className="education">
            <h2>Education</h2>
            <ul>
              <li>
                <h3>10th Standard</h3>
                <p>School Name: DehraDun Public School(D.D.P.S.), Gzb</p>
                {/* <!-- <p>Year of Passing: YYYY</p> --> */}
              </li>
              <li>
                <h3>12th Standard</h3>
                <p>School Name: DehraDun Public School(D.D.P.S.), Gzb</p>
                {/* <!-- <p>Year of Passing: YYYY</p> --> */}
              </li>
              <li>
                <h3>Graduation</h3>
                <p>College Name: IIT Dhanbad</p>
                <p>Year of Graduation: 2023</p>
                <p>Course: B.Tech in Computer Science & Engineering</p>
              </li>
            </ul>
          </section>
          <section className="skills">
            <h2>Skills</h2>
            <div className="skills-filter">
              <label for="filter">Filter Skills:</label>
              <input
                type="text"
                id="filter"
                placeholder="Type to filter skills..."
              />
            </div>
            <ul className="skills-list">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              {/* <!-- <li>React</li>
                <li>Node.js</li> --> */}
              <li>Python</li>
              <li>SQL</li>
              <li>Git</li>
              <li>C++</li>
              <li>C</li>
              <li>ML</li>
              <li>AI</li>
              <li>JAVA</li>
              <li>JQuery</li>
              {/* <!-- <li>Angular</li> */}
              {/* <li>Vue.js</li> */}
              {/* <li>PHP</li> --> */}
              {/* <!-- Add more skills here --> */}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
// export { About };
