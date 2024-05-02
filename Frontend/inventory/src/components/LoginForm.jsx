import { Formik } from "formik";
import { useState } from "react";

const LoginForm = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleLoginClick = () => {
    console.log(loginForm);
    const response = fetch("");
  };
  return (
    <div className="flex">
      <form className="grid gap-8">
        <div className="grid my-4">
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="text"
            id="username"
            name="username"
            placeholder="Enter your Email"
            onChange={(e) => {
              setLoginForm({ ...loginForm, email: e.target.value });
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
            onChange={(e) => {
              setLoginForm({ ...loginForm, password: e.target.value });
            }}
          />
        </div>
        <div className="">
          <button
            type="button"
            className="px-2 font-istok text-xl rounded-lg"
            style={{ backgroundColor: "#4B687A", color: "#fff" }}
          >
            Forgot Password
          </button>
        </div>
        <button
          type="button"
          className="p-2 font-istok text-2xl"
          style={{ backgroundColor: "#4B687A", color: "#fff" }}
          onClick={handleLoginClick}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
