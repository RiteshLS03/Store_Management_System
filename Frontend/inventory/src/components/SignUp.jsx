import { Formik } from "formik";

const SignUp = () => {
  return (
    <div className="flex">
      <form className="grid gap-8">
        <div className="grid my-4">
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
<<<<<<< HEAD
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            required="true"
          />
        </div>
        <div className="grid my-4">
          <input
            className="border-b-2 w-[500px] p-2 border-[#5F7C8D] font-istok text-xl"
=======
>>>>>>> 33960bff50a0ca6255c044faaf39be382bd1c202
            type="email"
            id="email"
            name="email"
            placeholder="Enter your Email"
            required="true"
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
          />
        </div>
        <button
          type="button"
          className="p-2 font-istok text-2xl"
          style={{ backgroundColor: "#4B687A", color: "#fff" }}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
