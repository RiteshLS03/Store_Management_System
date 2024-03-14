import React from "react";
import LoginLeft from "../assets/LoginLeft.svg";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center ">
        <h1 className="font-thin">HI</h1>
        <img src={LoginLeft} alt="Login" className="w-1/2" />
      </div>
    </div>
  );
};

export default Login;
