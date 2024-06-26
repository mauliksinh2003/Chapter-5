import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Framermotion from "./Framermotion.js";


import './Task1.css';


function Home() {
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
                <NavLink className="navlink" to="/search">Search</NavLink>
              </div>

            </Nav>
          </Container>
        </Navbar>

        <h2 className="text">This is Home page</h2>

      </div>
      <h2>Task - 2</h2>
      <button>
        <NavLink to="/profile">Profile</NavLink>
      </button>
      </Framermotion>
    </div>
  )
}

export default Home;
