import React from "react";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../images/small-picture/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-clr">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand to="/">
            <img width={'56px'} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <Link to="/blog">Blog</Link>
              <Link to="/about">About</Link>
              <Link to="/login">Login</Link>
              <div className='signup-btn'>
                <Link to="/signup">Signup</Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
