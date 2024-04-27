import { Formik } from "formik";

const LoginForm = () => {
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
          />
        </div>
        <div>
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
            type="password"
            id="password"
            name="password"
            placeholder="Enter Password"
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
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
