import React, { useState } from "react";
import LoginLeft from "../assets/LoginLeft.svg";
import LoginForm from "./LoginForm";
import SignUp from "./SignUp";

const LoginUI = () => {
  const [loginForm, setLoginForm] = useState(true);
  return (
    <div className="flex bg-[#f9f9f9]">
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
            <div className="flex gap-10 font-istok">
              <button
                className="text-3xl font-istok font-extrabold"
                type="button"
                onClick={() => setLoginForm(true)}
                // style={{ color: ["#5F7C8D"] }}
                style={
                  loginForm
                    ? {
                        color: ["#5F7C8D"],
                        borderBottom: "#5F7C8D 5px solid",
                      }
                    : { color: "#5F7C8D", opacity: "75%" }
                }
              >
                Login
              </button>
              <button
                className="text-3xl  font-istok font-extrabold"
                type="button"
                onClick={() => setLoginForm(false)}
                style={
                  loginForm
                    ? {
                        color: "#5F7C8D",
                        opacity: "75%",
                      }
                    : { color: ["#5F7C8D"], borderBottom: "#5F7C8D 5px solid" }
                }
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
