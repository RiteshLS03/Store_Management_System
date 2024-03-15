import { Formik } from "formik";

const LoginForm = () => {
  return (
    <div className="flex flex-wrap">
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
