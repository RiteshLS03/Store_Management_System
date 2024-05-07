import { FastField, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// Import useHistory from react-router-dom
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const MySwal = withReactContent(Swal);

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const navigate = useNavigate();

  // const [login, setLogin] = useState(localStorage.getItem("login"));
  // const login = localStorage.getItem("login");

  useEffect(() => {
    // localStorage.setItem()
    let login = localStorage.getItem("login");
    if (!login) {
      navigate("/");
    } else {
      navigate("/");
      navigate("/dashboard");
    }
  }, []);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const handleLoginClick = async () => {
    console.log(loginForm);
    const response = await fetch("http://localhost:5001/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    });
    const resData = await response.json();
    console.log(resData, "Here is response resData");
    MySwal.fire({
      icon: resData?.error ? "error" : "success",
      // title: "Success!",
      text: resData?.error || resData?.message,
    });
    if (resData.message === "Login successful") {
      dispatch(addUser(resData));
      localStorage.setItem("login", true);
      localStorage.setItem("token", resData?.userInfo?.token);
      console.log(resData.message, resData);
      // history("/dashboard");
      navigate("/dashboard");
      // setLogin(localStorage.setItem("login", true));
    }
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
