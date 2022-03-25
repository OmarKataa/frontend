//====================================================//Require
import React, { useState, useEffect, useContext } from "react";
import StripeCheckOut from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
//CSS File
import "./Payment.css";
import { UserContext } from "../../App";

const Payment = ({ Title, description, price }) => {
  const { teacherId, courseId, login } = useContext(UserContext);
  //product object
  toast.configure();
  const product = {
    name: Title,
    price: price,
    description: description,
  };
  console.log("Title", product);

  const handleToken = async (token, addresses) => {
    try {
      const response = await axios.post("http://localhost:5000/payment", {
        token,
        product,
      });

      console.log(response.status);
      if (response.status === 200) {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Payment successfully, Check Your Email",
        });

        const response = await axios.post(
          "http://localhost:5000/payment/usercourse",
          {
            studentId: login.userId || localStorage.getItem("userId"),
            teacher_Id: teacherId,
            courseId: courseId || localStorage.getItem("courseId"),
          }
        );

        console.log(response);
      } else {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 2500,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Failure payment is not completed",
        });
      }
    } catch (err) {
      throw new Error(err.response.data);
    }
  };
  return (
    <div className="paymentMainDiv">
      <StripeCheckOut
        name={product.name}
        panelLabel="Pay"
        stripeKey="pk_test_51KcwscCdUO4dNrLKishlMt5e5GiErs6CmcjIKyhKK3Q6Szgmnpc5vFLuVCLfWAZWN1KYL28OgkI4L9GfplH7OsJR00SXbp7yfA"
        token={handleToken}
        amount={product.price * 100}
        billingAddress
        shippingAddress
      />
    </div>
  );
};

export default Payment;
