import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";

//CSS File
import "./Create_Course.css";

const Create_Course = () => {
  const history = useNavigate();
  const { login } = useContext(UserContext);
  //====================================================//useState

  const [title, setTitle] = useState("");
  const [descryption, setDescryption] = useState("");
  const [price, setPrice] = useState("");
  const [language, setLanguage] = useState("");
  const [schedual, setSchedual] = useState("");
  const [author, setAuthor] = useState("");
  const [requirements, setRequirements] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [image, setImage] = useState("");
  const [start, setStart] = useState("");

  //====================================================//function

  const title_handler = (e) => {
    setTitle(e.target.value);
  };
  const descryption_handler = (e) => {
    setDescryption(e.target.value);
  };
  const price_handler = (e) => {
    setPrice(e.target.value);
  };
  const language_handler = (e) => {
    setLanguage(e.target.value);
  };
  const schedual_handler = (e) => {
    setSchedual(e.target.value);
  };
  const author_handler = (e) => {
    setAuthor(e.target.value);
  };
  const requirements_handler = (e) => {
    setRequirements(e.target.value);
  };
  const category_handler = (e) => {
    setCategory(e.target.value);
  };
  const start_handler = (e) => {
    setStart(e.target.value);
  };
  const video_handler = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "project4");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/omarkataa/video/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setVideo(file.secure_url);
    console.log(file.secure_url);
  };

  const image_handler = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "project4");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/omarkataa/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    setImage(file.secure_url);
    console.log(file.secure_url);
  };

  const submit_handler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5000/course/new`, {
        Title: title,
        Description: descryption,
        Price: price,
        Language: language,
        Schedule: schedual,
        Author: author,
        Requirements: requirements,
        Category: category,
        Video: video,
        image,
        teacher_Id: localStorage.getItem("userId"),
        start,
        roleId: 2,
        room_Id: null,
      });

      console.log(res);
      history("/Course");
    } catch (err) {
      throw new Error(err.respone);
    }
  };

  //====================================================//return
  return (
    <div className="createCourse_container">
      <form
        onSubmit={submit_handler}
        className="row p-5  shadow-lg p-3 "
        style={{ width: "70%" }}
      >
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div className="TeacherRegisterForm">
          <label class="form-label" for="form3Example1c">
            Create A Course
          </label>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                value={title}
                onChange={title_handler}
              />
              <label class="form-label" for="form6Example1">
                Title
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example2"
                class="form-control"
                value={descryption}
                onChange={descryption_handler}
              />
              <label class="form-label" for="form6Example2">
                Description
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                value={price}
                onChange={price_handler}
              />
              <label class="form-label" for="form6Example1">
                Price
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example2"
                class="form-control"
                value={language}
                onChange={language_handler}
              />
              <label class="form-label" for="form6Example2">
                Language
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                value={schedual}
                onChange={schedual_handler}
              />
              <label class="form-label" for="form6Example1">
                Schedule
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example2"
                class="form-control"
                value={author}
                onChange={author_handler}
              />
              <label class="form-label" for="form6Example2">
                Author
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                value={requirements}
                onChange={requirements_handler}
              />
              <label class="form-label" for="form6Example1">
                Requirements
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example2"
                class="form-control"
                value={category}
                onChange={category_handler}
              />
              <label class="form-label" for="form6Example2">
                Category
              </label>
            </div>
          </div>
        </div>

        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                type="text"
                id="form6Example1"
                class="form-control"
                value={start}
                onChange={start_handler}
              />
              <label class="form-label" for="form6Example1">
                Start In
              </label>
            </div>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline">
              <input
                style={{ display: "none" }}
                type="file"
                id="form6Example11"
                class="form-control"
                onChange={video_handler}
              />
              <label
                class="form-label"
                for="form6Example11"
                style={{ cursor: "pointer" }}
              >
                Upload video
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-outline">
              <input
                type="file"
                id="form6Example22"
                class="form-control"
                style={{ display: "none" }}
                onChange={image_handler}
              />
              <label
                class="form-label"
                for="form6Example22"
                style={{ cursor: "pointer" }}
              >
                Upload Image
              </label>
            </div>
          </div>
        </div>
        {video && (
          <>
            <div class="row mb-4">
              <div class="col">
                {video && (
                  <div class="form-outline">
                    {console.log("sdsd")}
                    <video width="100%" height="120%" controls>
                      <source src={video} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
              <div class="col">
                {image && (
                  <div class="form-outline">
                    <img
                      src={image}
                      style={{
                        width: "75%",
                        height: "75%",
                        objectFit: "cover",
                      }}
                      alt="..."
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
        <div class="row mb-4">
          <div class="col">
            <div class="form-outline"></div>
          </div>
          <div class="col">
            <div class="form-outline"></div>
          </div>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Create
        </button>
      </form>
    </div>
    // <div className="te p-5" style={{ width: "50%" }}>
    //   <form onSubmit={submit_handler}>
    //     <div class="mb-5 ">
    //       <label for="exampleInputEmail1" class="form-label">
    //         Title
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputEmail1"
    //         aria-describedby="emailHelp"
    //         value={title}
    //         onChange={title_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Description
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={descryption}
    //         onChange={descryption_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Price
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={price}
    //         onChange={price_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Language
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={language}
    //         onChange={language_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Schedule
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={schedual}
    //         onChange={schedual_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Author
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={author}
    //         onChange={author_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Requirements
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={requirements}
    //         onChange={requirements_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Category
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={category}
    //         onChange={category_handler}
    //       />
    //     </div>
    //     <div class="mb-3">
    //       <label for="exampleInputPassword1" class="form-label">
    //         Start In
    //       </label>
    //       <input
    //         type="text"
    //         class="form-control"
    //         id="exampleInputPassword1"
    //         value={start}
    //         onChange={start_handler}
    //       />
    //     </div>

    //     <div class="input-group mb-3">
    //       <label class="input-group-text" for="inputGroupFile01">
    //         Upload video
    //       </label>
    //       <input
    //         type="file"
    //         class="form-control"
    //         id="inputGroupFile01"
    //         style={{ display: "none" }}
    //         onChange={video_handler}
    //       />
    //     </div>
    //     {video && (
    //       <div>
    //         <iframe width="420" height="345" src={video}></iframe>
    //       </div>
    //     )}

    //     <div class="input-group mb-3">
    //       <label class="input-group-text" for="inputGroupFile02">
    //         Upload image
    //       </label>
    //       <input
    //         type="file"
    //         class="form-control"
    //         id="inputGroupFile02"
    //         style={{ display: "none" }}
    //         onChange={image_handler}
    //       />
    //     </div>

    //     {image && (
    //       <div>
    //         <img src={image} class="h-1 img-fluid" alt="..." />
    //       </div>
    //     )}

    //     <button type="submit" class="btn btn-primary">
    //       Submit
    //     </button>
    //   </form>
    // </div>
  );
};

export default Create_Course;
