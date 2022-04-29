import React from "react";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../images/small-picture/logo.png";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const logout = () => {
    signOut(auth);
  };
  console.log(user)
  return (
    <div className="bg-white bg-shadow sticky-top">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto nav-links">
              <CustomLink to="/blog">Blog</CustomLink>
              <CustomLink to="/about">About</CustomLink>
              <CustomLink to="/login">Login</CustomLink>
              <div className="signup-btn">
              {user? <CustomLink to="/signup">Logout</CustomLink>:<CustomLink to="/signup">Signup</CustomLink>}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
