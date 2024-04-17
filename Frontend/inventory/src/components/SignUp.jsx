import { Formik } from "formik";
import React, { useState } from "react";

const SignUp = () => {
  const [newUserAdd, setNewUserAdd] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const handleFormChange = (e) => {
  //   setNewUserAdd({ ...previousState, name: e.target.value });
  // };
  const handleSignUpClick = (e) => {
    if (newUserAdd.password === newUserAdd.confirmPassword) {
      alert("OK");
    } else {
      alert("Password is incorrect");
    }
    try {
      fetch({});
    } catch (error) {}
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
              setNewUserAdd({ ...newUserAdd, confirmPassword: e.target.value });
              console.log(newUserAdd);
            }}
          />
        </div>
        <button
          type="button"
          className="p-2 font-istok text-2xl"
          style={{ backgroundColor: "#4B687A", color: "#fff" }}
          onClick={(e) => handleSignUpClick(e)}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
