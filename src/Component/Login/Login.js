//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../App";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";

//CSS File
import "./Login.css";

const Login = () => {
  //====================================================//useState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //====================================================//useContext
  const { login, setLogin } = useContext(UserContext);
  const history = useNavigate();
  //====================================================//useEffect
  const ChangeDir = () => {
    history("/Course");
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passowrdHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/login/", {
        email,
        password,
      });

      if (res.data.success) {
        setEmail("");
        setPassword("");
        const result = {
          token: res.data.token,
          isLoggedIn: true,
          userId: res.data.userId[0].id,
          firstName: res.data.userId[0].firstName,
          lastName: res.data.userId[0].lastName,
          roleId: res.data.role,
          profileImage: res.data.userId[0].profileImage,
        };
        setLogin(result);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Login successfully",
        });
        const myTimeout = setTimeout(ChangeDir, 500);

        localStorage.setItem("token", result.token);
        localStorage.setItem("isLoggedIn", result.isLoggedIn);
        localStorage.setItem("userId", result.userId);
        localStorage.setItem("roleId", result.roleId);
        localStorage.setItem("firstName", result.firstName);
        localStorage.setItem("lastName", result.lastName);
        localStorage.setItem("profileImage", result.profileImage);
      } else throw Error;
    } catch (error) {
      if (!error.response.data.success) {
        return console.log(error);
      }
    }
  };
  //====================================================//Return
  return (
    <div className="loginMainDiv">
      <div className="formLoginDiv">
        <section class=" border-0">
          <div class="container h-100 border-0 shadow-lg p-0 mb-5 bg-white rounded  ">
            <div class="row d-flex justify-content-center align-items-center h-100 border-0">
              <div class="col-lg-12 col-xl-11 border-0">
                <div class="card text-black border-0">
                  <div class="card-body p-md-0 border-0">
                    <div class="row justify-content-center border-0">
                      <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 d-flex justify-content-center align-items-center border-0">
                        <form class="mx-1 mx-md-4 " onSubmit={submitHandler}>
                          <div class="d-flex flex-row align-items-center mb-4">
                            <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div class="form-outline flex-fill mb-0">
                              <input
                                type="email"
                                id="form3Example3c"
                                class="form-control"
                                required
                                value={email}
                                onChange={emailHandler}
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
                                value={password}
                                onChange={passowrdHandler}
                              />
                              <label class="form-label" for="form3Example4c">
                                Password
                              </label>
                            </div>
                          </div>

                          <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button
                              type="submit"
                              class="btn btn-primary btn-lg"
                            >
                              Login
                            </button>
                          </div>
                          <label class="form-label" for="form3Example1c">
                            Not Register Yet ?
                            <a href="/TRegister"> Click Here</a>
                          </label>
                        </form>
                      </div>
                      <div class="col-md-10 col-lg-6 col-xl-7 d-flex flex-column   justify-content-center align-items-center order-1 order-lg-2">
                        <img
                          src="https://i.ibb.co/FxgTn0P/Secure-login.gif"
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
        {/* <Form onSubmit={submitHandler} className="d-grid gap-2">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label class="text-start">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={emailHandler}
            />
            <Form.Text class="text-start">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={passowrdHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="outline-primary" type="submit" size="lg">
            Login
          </Button>
        </Form> */}
      </div>
    </div>
  );
};

export default Login;
