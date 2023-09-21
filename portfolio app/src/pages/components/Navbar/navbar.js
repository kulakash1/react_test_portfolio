import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

// //if Dop Down is used
// import NavDropdown from 'react-bootstrap/NavDropdown';
import "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar1() {
  return (
    <Navbar expand="lg" className="navbar navbar-expand-lg navbar-dark nav-Bg">
        <Container className="navbar navbar-expand-lg navbar-dark nav-Bg">
          <Link className="navbar-brand navBtn" to="/">
            AK
            {/* <!-- <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-logo-img.png" class="navbar-image" alt="" /> --> */}
          </Link>
          {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar-nav ml-auto me-auto">
              <Link className="nav-link active" to="/">HOME</Link>
              <Link className="nav-link active" to="/about">ABOUT</Link>
              <Link className="nav-link active" to="/traveldiary">TRAVEL DIARY</Link>
              <Link className="nav-link active" to="/achievemnts">ACHIEVEMENTS</Link>
              <Link className="nav-link active" to="/projects">PROJECTS</Link>
              <Link className="nav-link active" to="/contactme">CONTACT ME</Link>

              {/* DropDown Menu */}
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}

              {/* DROPDOWN */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Navbar1;
