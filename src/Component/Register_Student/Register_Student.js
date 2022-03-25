//====================================================//Require

import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Swal from "sweetalert2";

//CSS File
import "./Register_Student.css";

const Register_Student = () => {
  const history = useNavigate();
  //====================================================//useState

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImage, setProfileImage] = useState(
    "https://media.istockphoto.com/vectors/avatar-person-user-icon-blue-version-vector-id1216255414?k=20&m=1216255414&s=170667a&w=0&h=I2yRx9b3GZl57PqZb0OumlZOVqMbyRNxmPEZ0NwxksM="
  );

  //====================================================//Functions

  const firstName_handler = (e) => {
    setFirstName(e.target.value);
  };
  const lastName_handler = (e) => {
    setLastName(e.target.value);
  };
  const phone_handler = (e) => {
    setPhone(e.target.value);
  };
  const email_handler = (e) => {
    setEmail(e.target.value);
  };
  const password_handler = (e) => {
    setPassword(e.target.value);
  };

  //====================================================//Loading Function

  const loading = async (e) => {
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
    setProfileImage(file.secure_url);
    console.log(file.secure_url, profileImage);
  };

  //====================================================//ChangeDir Function
  const ChangeDir = () => {
    let timerInterval;
    Swal.fire({
      title: "Auto close alert!",
      html: "We Will Move To Your Page in  <b></b> milliseconds.",
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        history("/Course");
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  //====================================================//Submit Function

  const submit_Handler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/student/new", {
        firstName,
        lastName,
        phone,
        email,
        password,
        profileImage,
        roleId: 3,
      });
      if (res.data.success) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Registration successfully",
        });

        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setProfileImage("");

        const myTimeout = setTimeout(ChangeDir, 2000);
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        return console.log(error);
      }
    }
  };

  return (
    <div className="register_student-pageDiv">
      <div className="register_student-mainDiv">
        <section class="border-0">
          <div class="container h-100 border-0 shadow-lg p-3 mb-5 bg-white rounded">
            <div class="row d-flex justify-content-center align-items-center h-100 border-0">
              <div class="col-lg-12 col-xl-11 border-0">
                <div class="card text-black border-0">
                  <div class="card-body p-md-5 border-0">
                    <div class="row justify-content-center border-0">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 border-0">
                        <form class="mx-1 mx-md-4" onSubmit={submit_Handler}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={firstName_handler}
                                value={firstName}
                              />
                              <label class="form-label" for="form3Example1c">
                                First Name{" "}
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={lastName_handler}
                                value={lastName}
                              />
                              <label class="form-label" for="form3Example1c">
                                Last Name
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="text"
                                id="form3Example1c"
                                class="form-control"
                                required
                                onChange={phone_handler}
                                value={phone}
                              />
                              <label class="form-label" for="form3Example1c">
                                Phone
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                required
                                onChange={email_handler}
                                value={email}
                              />
                              <label class="form-label" for="form3Example3c">
                                Email
                              </label>
                            </div>
                          </div>

                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="password"
                                id="form3Example4c"
                                class="form-control"
                                required
                                onChange={password_handler}
                                value={password}
                                minLength="6"
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="file"
                                class="form-control"
                                id="customFile"
                                onChange={loading}
                              />

                              <label class="form-label" for="form3Example4c">
                                Upload Profile Image
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                            >
                              Register
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex flex-column gap-0  align-items-center order-1 order-lg-2">
                        <div className="TeacherRegisterForm">
                          Student Registration Form
                        </div>
                        <label class="form-label" for="form3Example1c">
                          Want To be A Teacher ?{" "}
                          <a
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              history("/TRegister");
                            }}
                          >
                            Click Here
                          </a>
                        </label>
                        <img
                          src="https://i.ibb.co/WDkyQqt/Students.gif"
                          class="img-fluid"
                          alt="Sample image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register_Student;
