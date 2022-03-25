//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import Payment from "../Payment/Payment";

import { FaChalkboardTeacher } from "react-icons/fa";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { MdLanguage } from "react-icons/md";
import { BsAlarm } from "react-icons/bs";

//CSS File
import "./Course_Details.css";

const Course_Details = () => {
  //====================================================//useState

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [schedual, setSchedual] = useState("");
  const [author, setAuthor] = useState("");
  const [requirements, setRequirements] = useState("");
  const [start, setStart] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [showroom, setShowroom] = useState([]);

  //====================================================//useContext
  const { login, courseId, setCourseId, setTeacherId } =
    useContext(UserContext);
  //====================================================//useEffect

  useEffect(async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/course/getByid/${localStorage.getItem(
          "courseId"
        )}`
      );

      setTitle(res.data.results[0].Title);
      setDescription(res.data.results[0].Description);
      setPrice(res.data.results[0].Price);
      setLanguage(res.data.results[0].language);
      setSchedual(res.data.results[0].Schedule);
      setStart(res.data.results[0].start);
      setAuthor(res.data.results[0].Author);
      setRequirements(res.data.results[0].Requirements);
      setCategory(res.data.results[0].Category);
      setVideo(res.data.results[0].Video);
      setImage(res.data.results[0].image);
      setTeacherId(res.data.results[0].teacher_Id);
      const res1 = await axios.post(`http://localhost:5000/course/usercourse`, {
        courseId: localStorage.getItem("courseId"),
        userId: login.userId || localStorage.getItem("userId"),
        roleId: login.roleId || localStorage.getItem("roleId"),
      });
      console.log(res1);
      setShowroom(res1.data.result);
    } catch (err) {
      console.log(err.respone);
      throw new Error(err);
    }
  }, []);

  //====================================================//return

  return (
    <div className="course_detail_mainDiv">
      <div className="course_detail_main">
        <div class="row">
          <div class="col-sm-7">
            <div class="card">
              <div class="card-body b-0">
                {/* <h5 class="card-title">Special title treatment</h5> */}
                <div className="topPart">
                  <p class="card-text"> Category  >  {category}</p>

                  <p className="titleCD">{title}</p>
                  <p class="descriptionCD">{description}</p>

                  {/* <a href="#" class="btn btn-primary">
                  Go somewhere
                </a> */}
                </div>
                <div className="courseDetailsImage">
                  <img
                    src="https://www.arcskill.com/v2/static/images/courses/1600347150_-_JavaScript%20poster.jpg"
                    className="imgcourseDetailsImage"
                  />
                </div>
                <div className="bottomPart">
                  <p class="card-text">
                    <MdLanguage size={25} style={{ color: "white" }} /> {" "}
                    {language}                      
                    <BsAlarm size={20} style={{ color: "white" }} />
                       {schedual}                     
                    <FaChalkboardTeacher
                      size={25}
                      style={{ color: "white" }}
                    />{" "}
                      {author}                      
                    <BsFillCalendarEventFill
                      size={25}
                      style={{ color: "white" }}
                    />{" "}
                      
                    {start}
                  </p>
                  <br />
                  <p class="card-text"> Requirements : {requirements}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-5 ">
            <div class="card  ">
              <div class="card-body">
                <div className="CrouseDeatailsVideo">
                  <iframe
                    className="VideoDetails"
                    src={video}
                    title="YouTube video"
                    allowfullscreen
                  ></iframe>
                </div>
                <br />
                <div className="courseDetailsPrice">{price - 0.01}$</div>
                <br />

                <div>
                  <Payment
                    Title={title}
                    description={description}
                    price={price}
                  />
                  <br />
                </div>

                {showroom.length !== 0 && (
                  <a href="#" class="btn btn-primary">
                    <Link to="/ClassRoom"  className="StartClass">
                      Start Class
                    </Link>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="hero-banner bg-light py-5 shadow-sm m-5 bg-body rounded">
        <div class="container">
          <div class="row ">
            <div class="col-lg-5 offset-lg-1 order-lg-1">
              <img src={image} class="img-fluid" alt="Web Development" />
            </div>
            <div class="col-lg-6">
              <h2 class="mt-3">{title}</h2>
              <p class="lead text-secondary my-2">category : {category}</p>
              <p class="lead text-secondary my-2">Created By : {author}</p>
              <p class="lead text-secondary my-2">language : {language}</p>
              <p class="lead text-secondary my-2"> Price : {price}</p>
              <p class="lead text-secondary my-2"> Schedule : {schedual}</p>
              <p class="lead text-secondary my-2"> Start-In : {start}</p>
              <p class="lead text-secondary my-2">
                {" "}
                Prerequisites : {requirements}
              </p>
              <p class="lead text-secondary my-2">
                {" "}
                Description : {description}
              </p>
              <iframe src={video} width="100%" height="120%"></iframe>
              <a href="#" class="btn btn-outline-secondary btn-lg border">
                Order Now
              </a>
            </div>
          </div>
        </div>
      </div>

      {showroom.length !== 0 && <Link to="/ClassRoom">video</Link>} */}
    </div>
  );
};

export default Course_Details;
