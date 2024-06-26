import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';



import './Task1.css';
import Framermotion from "./Framermotion";



function About() {
  return (
    <div>
      <Framermotion>
      <div>
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <NavLink className="navlink" to="/home">Home</NavLink>
              <NavLink className="navlink" to="/about">About</NavLink>
              <NavLink className="navlink" to="/contact">contact</NavLink>

              <div className="Protected">
              <NavLink className="navlink" to="/dashboard">Dashboard</NavLink>
              <NavLink className="navlink" to="/login">Login</NavLink>
              </div>
            </Nav>
          </Container>
        </Navbar>

        <h2 className="text">This is About page</h2>
      </div>
</Framermotion>
    </div>
  )
}

export default About;
