import React from "react";
// import { createRoot  } from "react-dom/client";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import LoginUI from "./components/LoginUI";
import Dashboard from "./components/Dashboard";

// const App = () => {
//   return <Outlet />;
// };

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginUI />,
    errorElement: (
      <h1>
        Something Went Wrong
        <Link to={"/"} className="text-red-600">
          {" "}
          Login
        </Link>
      </h1>
    ),
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

// export default App;
