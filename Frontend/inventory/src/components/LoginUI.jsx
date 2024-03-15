import React, { useState } from "react";
import LoginLeft from "../assets/LoginLeft.svg";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const LoginUI = () => {
  const [loginForm, setLoginForm] = useState(true);
  return (
    <div className="flex ">
      <div className="mr-10 w-1/2">
        <img src={LoginLeft} alt="Login" className="h-lvh rounded-xl" />
      </div>
      <div className="m-8">
        <div className="m-4 ">
          <h1 className="text-8xl text-hello font-istok font-bold">
            Hello, <span className="text-5xl text-guys"> Guysss!</span>
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className=" justify-between gap-4">
            <div className="flex gap-10">
              {" "}
              <button type="button" onClick={() => setLoginForm(true)}>
                Login
              </button>
              <button
                type="button"
                onClick={() => setLoginForm(false)}
                className=""
              >
                SignUp
              </button>
            </div>
            {loginForm ? <LoginForm /> : <SignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUI;
