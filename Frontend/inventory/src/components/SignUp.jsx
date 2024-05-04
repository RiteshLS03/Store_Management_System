// import { Formik } from "formik";
import React, { useEffect, useState } from "react";
// Alert importing
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const SignUp = ({ setLoginForm }) => {
  // useEffect(() => {}, [setLoginForm]);
  const [newUserAdd, setNewUserAdd] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  // useEffect(() => handleSignUpClick(), []);

  // const handleSignUpClick = async () => {
  //   const response = await fetch("http://localhost:5001/api/users/register", {
  //     method: "POST",
  //     body: JSON.stringify(newUserAdd),
  //   });
  //   const data = response.json();
  //   console.log(data);
  // };

  const handleSignUpClick = async () => {
    if (confirmPassword == newUserAdd.password) {
      try {
        const response = await fetch(
          "http://localhost:5001/api/users/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserAdd),
          }
        );

        const data = await response.json();
        console.log(data);
        MySwal.fire({
          icon: data.error ? "error" : "success",
          // title: "Success!",
          text: data?.error || data?.message,
        });
        if (!data.error) {
          setLoginForm(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      MySwal.fire({
        icon: "warning",
        // title: "Success!",
        text: "Please confirm password",
      });
    }
  };

  return (
    <div className="flex">
      <form className="grid gap-8">
        <div className="grid my-4">
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            onChange={(e) => {
              setNewUserAdd({ ...newUserAdd, name: e.target.value });
              console.log(newUserAdd);
            }}
          />
        </div>
        <div className="grid my-4">
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required="true"
            onChange={(e) => {
              setNewUserAdd({ ...newUserAdd, email: e.target.value });
            }}
          />
        </div>
        <div>
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
            required="true"
            onChange={(e) => {
              setNewUserAdd({ ...newUserAdd, password: e.target.value });
              console.log(newUserAdd);
            }}
          />
        </div>
        <div>
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="confirmpassword"
            id="confirmpassword"
            name="confirmpassword"
            placeholder="Confirm Password"
            required="true"
            onChange={(e) => {
              // setNewUserAdd({ ...newUserAdd, confirmPassword: e.target.value });
              // console.log(newUserAdd);
              setConfirmPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="button"
          className="p-2 font-istok text-2xl"
          style={{ backgroundColor: "#4B687A", color: "#fff" }}
          onClick={() => handleSignUpClick()}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
