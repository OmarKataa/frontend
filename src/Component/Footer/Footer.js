//====================================================//Require
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";

//CSS File
import "./Footer.css";

const Footer = () => {
  const history = useNavigate();
  return (
    <div className="FooterMainDiv">
      <MDBFooter
        className="text-center"
        color="white"
        bgColor="#292726"
        style={({ width: "100%" }, { height: "100%" })}
      >
        <MDBContainer className="p-4">
          <section className="">
            <form
              action="https://formsubmit.co/omar.mahmoud.kataa@gmail.com"
              method="POST"
            >
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Share Your Experience With Us</strong>
                  </p>
                </div>
                <div class="input-group mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Comment..."
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                    name="Comment"
                  />
                  <button
                    class="btn btn-outline-secondary"
                    type="submit"
                    id="button-addon2"
                  >
                    Submit
                  </button>
                </div>
                {/* <MDBCol md="5" start="12">
                  <MDBInput
                    contrast
                    type="text"
                    label="Email address"
                    className="mb-4"
                    name="name"
                  />
                </MDBCol> */}

                <div className="col-auto">
                  {/* <button
                    type="submit"
                    style={{ height: "40px" }}
                    class="btn btn-primary btn-sm"
                  >
                    Submit
                  </button> */}
                  {/* <button
                    class="btn btn-primary"
                    style={{ height: "40px" }}
                    type="submit"
                    // name="name"
                  >
                    {" "}
                  </button> */}
                  {/* <MDBBtn outline color="light" type="submit" className="mb-4">
                    Subscribe
                  </MDBBtn> */}
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
              distinctio earum repellat quaerat voluptatibus placeat nam,
              commodi optio pariatur est quia magnam eum harum corrupti dicta,
              aliquam sequi voluptate quas.
            </p> */}
          </section>

          <section className="">
            {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0">


              


            </MDBCol> */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p style={{ maxWidth: "50%" }}>
                Our vision is to build a world where all young people thrive by
                realizing their full potential. Our mission is to ensure that
                young people have equal opportunities in society by harnessing
                the power of knowledge for employment and personal development.
              </p>
            </div>
            <MDBRow>
              <div className="links" style={{ marginTop: "50px" }}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={(event) => (window.location.href = "/#home")}
                  className="text-white "
                >
                  HOME
                </a>

                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    window.location.href = "/#About";
                  }}
                  className="text-white"
                >
                  ABOUT
                </a>

                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history("/course");
                  }}
                  className="text-white"
                >
                  COURSE
                </a>

                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    history("/login");
                  }}
                  className="text-white "
                >
                  LOGIN
                </a>
              </div>

              <div style={{ marginTop: "50px" }}>
                <img
                  src="https://i.ibb.co/ZhmywL6/logo.png"
                  alt="HEX"
                  style={{ height: "50%", width: "10%" }}
                />
              </div>
              <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                {/* <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0 ">
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history("/");
                      }}
                      className="text-white "
                    >
                      HOME
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        window.location.href = "/#About";
                      }}
                      className="text-white"
                    >
                      ABOUT
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history("/course");
                      }}
                      className="text-white"
                    >
                      Course
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        history("/login");
                      }}
                      className="text-white "
                    >
                      LOGIN
                    </a>
                  </li>
                </ul> */}
                {/* <img src="https://i.ibb.co/ZhmywL6/logo.png" alt="HEX" style={} /> */}
              </MDBCol>

              {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0 text-left">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a
                      href="http://localhost:3000/Register"
                      className="text-white"
                    >
                      REGISTER
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                </ul>
              </MDBCol> */}

              {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Support Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                </ul>
              </MDBCol> */}

              {/* <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                <h5 className="text-uppercase">Links</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Support Forum
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Faq & Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Services & Help
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Register And Account
                    </a>
                  </li>
                </ul>
              </MDBCol> */}
            </MDBRow>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="http://localhost:3000/home/">
            HEX Company
          </a>
        </div>
      </MDBFooter>
    </div>
  );
};

export default Footer;
