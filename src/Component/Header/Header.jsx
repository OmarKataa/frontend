//====================================================//Require
import { Button } from "bootstrap";
import React, { useState, useContext } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

//CSS File
import "./Header.css";

const Header = () => {
  const history = useNavigate();
  const { login, setLogin } = useContext(UserContext);
  return (
    <div className="HeaderMainDiv">
      <>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="white"
          variant="light"
          style={{ width: "100%" }}
        >
          <Container>
            <Navbar.Brand href="home">
              <img
                src="https://i.ibb.co/ZhmywL6/logo.png"
                height="70"
                alt=""
                loading="lazy"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav bgColor='dark'">
              <Nav className="ms-auto gap-5 navbar navbar-light bg-lignt ">
                <Link to="/home" alt="home">
                  Home
                </Link>
                <Link
                  to="#about"
                  alt="About"
                  onClick={(event) => (window.location.href = "/#About")}
                >
                  {" "}
                  About
                </Link>
                <Link to="/Course" alt="Course">
                  Courses
                </Link>
                {!localStorage.getItem("userId") && (
                  <Link to="/login" alt="login">
                    Login
                  </Link>
                )}
                {!localStorage.getItem("userId") && (
                  <Link to="/SRegister" alt="Register">
                    Register
                  </Link>
                )}
                {localStorage.getItem("roleId") == 2 && (
                  <Link to="/createcourse" alt="createcourse">
                    Create Course
                  </Link>
                )}
                {localStorage.getItem("roleId") == 2 && (
                  <Link to="/Teacher_Page" alt="Teacher_Page">
                    Lectures
                  </Link>
                )}
                {localStorage.getItem("roleId") == 3 && (
                  <Link to="/Student_Page" alt="Student_Page">
                    Lectures
                  </Link>
                )}
                {localStorage.getItem("userId") && (
                  <Link
                    to="/"
                    alt="Home"
                    onClick={(event) => {
                      localStorage.clear();
                      setLogin({});
                      history("/");
                    }}
                  >
                    {" "}
                    Logout
                  </Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
