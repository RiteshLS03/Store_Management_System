import React from "react";
// import { createRoot  } from "react-dom/client";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import LoginUI from "./components/LoginUI";

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
        <Link to={"/"}> Login</Link>
      </h1>
    ),
  },
]);

// export default App;
