//====================================================//Require
import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

//CSS File
import "./Home.css";

const Introduction = () => {
  const history = useNavigate();
  return (
    <div className="introMainDiv">
      <div className="Part1" id="home">
        <div className="part1Div">
          <div className="Message1">
            <div>
              <div className="hex">HEX</div>
              <div className="Training">Training Organization</div>
            </div>
            <div className="Message2">
              Start learning from the world’s best institutions
            </div>
            <div className="part1Buttons">
              <button
                type="button"
                class="btn btn-primary"
                onClick={() => {
                  history("/login");
                }}
              >
                LOGIN
              </button>
              {/* <MDBBtn class="btn-primary" href="/login">
                LOGIN
              </MDBBtn> */}
              <button
                type="button"
                class="btn btn-secondary"
                onClick={() => {
                  history("/SRegister");
                }}
              >
                TRY HEX
              </button>
              {/* <MDBBtn class="btn-secondary " href="/SRegister">
                TRY HEX
              </MDBBtn> */}
            </div>
          </div>
        </div>
      </div>
      <div className="Part2">
        <div className="page2Details">
          <div className="popular">Our Popular Courses</div>
          <div className="details">
            All courses you need to start from zero to build your full stack wep
            application
          </div>
        </div>
        <div className="Popular_card">
          <CardGroup>
            <Card className="shadow p-3 mb-5 bg-body rounded">
              <Card.Img
                variant="top"
                src="https://prod-discovery.edx-cdn.org/media/course/image/c50943b5-3375-4d50-9f91-911930551603-5703bb2a02c8.small.png"
              />
              <Card.Body>
                <Card.Title>
                  JavaScript - The Complete Guide 2022 (Beginner + Advanced)
                </Card.Title>
                <Card.Text>
                  JavaScript lets you add interactive features to your Web
                  sites, including dynamically updated content, controlled
                  multimedia, animated images, and much more.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 mins ago</small>
              </Card.Footer>
            </Card>
            <Card className="shadow p-3 mb-5 bg-body rounded">
              <Card.Img
                variant="top"
                src="https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"
              />
              <Card.Body>
                <Card.Title>
                  React - The Complete Guide (incl Hooks, React Router, Redux)
                </Card.Title>
                <Card.Text>
                  This course is the most up-to-date, comprehensive and
                  bestselling React course on HEX! It was completely updated and
                  re-recorded from the ground up!
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 hours ago</small>
              </Card.Footer>
            </Card>
            <Card className="shadow p-3 mb-5 bg-body rounded">
              <Card.Img
                variant="top"
                src="https://img-c.udemycdn.com/course/240x135/922484_52a1_8.jpg"
              />
              <Card.Body>
                <Card.Title>
                  The Complete Node.js Developer Course (3rd Edition)
                </Card.Title>
                <Card.Text>
                  The Complete Node.js Developer Course covers the fundamentals
                  of Node before diving deep into great tools like Express,
                  Mongoose, and MongoDB.
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Last updated 3 days ago</small>
              </Card.Footer>
            </Card>
          </CardGroup>
        </div>
      </div>
      <div className="Part3">
        <div className="part3Div">
          <MDBCard
            style={({ width: "80%" }, { height: "100%" })}
            className="border-0 p-100"
          >
            <MDBRow>
              <MDBCol md="6">
                <MDBCardBody>
                  <MDBCardTitle className="TitlePart3">
                    Why Choose Us
                  </MDBCardTitle>
                  <MDBCardText>
                    Your HEX learning experience is grounded in cutting-edge
                    cognitive science. With more than two dozen distinct
                    learning features to help you achieve your goals.
                  </MDBCardText>
                  <MDBListGroupItem
                    className="border-0 g-10"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/fQ134DJ/video-logo3.png"
                      className="img-thumbnail border-0 "
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      {" "}
                      Online Certification
                    </div>
                    {/* <div className="text-muted ">
                      Performance Based Certificate
                    </div> */}
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="border-0 gap-10 g-20"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/375sGXY/video-logo.png"
                      className="img-thumbnail border-0"
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      Best Education System
                    </div>
                    {/* <div className="text-muted">
                      Advance Education Management
                    </div> */}
                  </MDBListGroupItem>
                  <MDBListGroupItem
                    className="border-0"
                    style={{ height: "21vh" }}
                  >
                    <img
                      src="https://i.ibb.co/6XD428m/video-logo2.png"
                      className="img-thumbnail border-0"
                      alt="..."
                      style={{ maxWidth: "5rem" }}
                    />
                    <div className="font-weight-bold fs-4">
                      Learning Management
                    </div>
                    {/* <div className="text-muted">LMS Integration </div> */}
                  </MDBListGroupItem>
                </MDBCardBody>
              </MDBCol>
              <MDBCol md="6">
                {/* <iframe width="853" height="480" src="https://www.youtube.com/embed/vlDzYIIOYmM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                <div className="ratio ratio-1x1">
                  <iframe
                    src="https://www.youtube.com/embed/4I1kGIC41lg"
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </div>
      </div>
      <div className="Part4">
        <div className="page4Details">
          <div className="popular">Our Instructor</div>
          <div className="details">
            Motivation, Analytical teacher who you want to select
          </div>
          <div className="Popular_card">
            <CardGroup className="CardGroupPage4">
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/tD6L5zL/testimonial-author5.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    Jaxon Tucker <br />
                    Instructor
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  style={({ width: "100%" }, { height: "150%" })}
                  variant="top"
                  src="https://i.ibb.co/VHPmSTR/testimonial-author.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    L. Bohan <br />
                    Teacher
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/8N3svBH/testimonial-author2.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    J. Renz
                    <br />
                    Teacher
                  </Card.Title>
                </Card.Body>
              </Card>
              <Card className="shadow p-3 mb-5 bg-body rounded">
                <Card.Img
                  variant="top"
                  src="https://i.ibb.co/hcGvZ2S/testimonial-author3.jpg"
                />
                <Card.Body>
                  <Card.Title class="text-center">
                    Alannah Varley <br /> Instructor
                  </Card.Title>
                </Card.Body>
              </Card>
            </CardGroup>
          </div>
        </div>
      </div>
      <div className="Part5">
        <div className="Part5MainDiv" id="About">
          <div className="page4Details">
            <div className="popular">About Us</div>
            {/* <div className="details">
              Enim semper, gravida interdum nullam, pellentesque adipiscing
              scelerisque vitae dui, magnis platea. Ac sagittis ridiculus Est ac
              sollicitudin varius integer laoreet morbi porta
            </div> */}
            <div className="Popular_card">
              <CardGroup className="CardGroupPage4">
                <Card className="shadow p-3 mb-5 bg-body rounded">
                  <Card.Body>
                    <Card.Title>
                      <span>Omar Kata'a</span>
                      <br />
                      <span className="aboutGitLinkMainDiv">
                        Full-Stack Web Developer
                        <div className="aboutGitLink">
                          <a
                            href="https://www.linkedin.com/in/omar-kataa/"
                            target="_blank"
                          >
                            <BsLinkedin
                              size={40}
                              style={{ fill: "darkblue" }}
                            />
                          </a>
                          <a
                            href="https://github.com/OmarKataa"
                            target="_blank"
                          >
                            <BsGithub size={40} style={{ fill: "black" }} />
                          </a>
                        </div>
                      </span>
                    </Card.Title>
                  </Card.Body>
                  <Card.Img
                    variant="top"
                    src="https://i.ibb.co/cYLDLfd/123.jpg"
                  />
                </Card>
                <Card className="shadow p-3 mb-5 bg-body rounded">
                  <Card.Body>
                    <Card.Title>
                      <span>Haitham Alulaimi</span>
                      <br />
                      <span className="aboutGitLinkMainDiv">
                        Full-Stack Web Developer
                        <div className="aboutGitLink">
                          <a
                            href="https://www.linkedin.com/in/haitham-alulaimi/"
                            target="_blank"
                          >
                            <BsLinkedin
                              size={40}
                              style={{ fill: "darkblue" }}
                            />
                          </a>
                          <a
                            href="https://github.com/haithamnawwaf"
                            target="_blank"
                          >
                            <BsGithub size={40} style={{ fill: "black" }} />
                          </a>
                        </div>
                      </span>
                    </Card.Title>
                  </Card.Body>
                  <Card.Img
                    style={({ width: "100%" }, { height: "150%" })}
                    variant="top"
                    src="https://i.ibb.co/SVT6Lz5/456.jpg"
                  />
                </Card>
              </CardGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
