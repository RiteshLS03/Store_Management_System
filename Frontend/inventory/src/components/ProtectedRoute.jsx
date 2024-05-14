// // import { Link, Navigate } from "react-router-dom";

// // // import appUser from "../store/slices/index";
// // import { useSelector } from "react-redux";

// // const ProtectedRoute = () => {
// //   const data = useSelector((state) => {
// //     return state.users;
// //   });

// //   console.log(data);
// //   if (data.message == "Login successful") {
// //     return <Navigate to={"/dashboard"} />;
// //   } else {
// //     return <Navigate to={"/login"} />;
// //   }
// // };
// // export default ProtectedRoute;

// // import React, { useEffect } from "react";
// // import { Navigate } from "react-router-dom"; // Removed Link since it's not being used
// // import { useSelector } from "react-redux";

// // const ProtectedRoute = () => {
// //   const navigate = Navigate();
// //   const data = useSelector((state) => state.users); // Simplified useSelector usage
// //   useEffect(() => {}, [data]);

// //   console.log(data);

// //   // Use === for strict equality comparison
// //   if (data?.length > 0) {
// //     return navigate("/dashboard");
// //   } else {
// //     return navigate("/login");
// //   }
// // };

// // export default ProtectedRoute;

// // import React, { useState } from "react";
// // import { Route } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // // import Dashboard from "./Dashboard";
// // import LoginUI from "./LoginUI";

// // const ProtectedRoute = ({ Dashboard }) => {
// //   // const Dashboard = Dashboard
// //   const data = useSelector((state) => state.users);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// //   //   const isAuthenticated = true; // Add your authentication logic here
// //   if (data.length > 0) {
// //     setIsAuthenticated(true);
// //   }
// //   return isAuthenticated && Dashboard;
// // };

// // export default ProtectedRoute;

// // import React, { useState, useEffect } from "react";
// // import { Route, Routes, useNavigate } from "react-router-dom";
// // import { useSelector } from "react-redux";
// // // import Dashboard from "./Dashboard";
// // import LoginUI from "./LoginUI";

// // const ProtectedRoute = ({ Dashboard, ...rest }) => {
// //   const navigate = useNavigate();
// //   const data = useSelector((state) => state.users);
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     if (data.length > 0) {
// //       setIsAuthenticated(true);
// //     } else {
// //       setIsAuthenticated(false);
// //     }
// //   }, [data]);

// //   return (
// //     <Routes>
// //       <Route
// //         render={() => (isAuthenticated ? Dashboard : navigate("/login"))}
// //       />
// //     </Routes>
// //   );
// // };

// // export default ProtectedRoute;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const ProtectedRoute = ({ Dashboard }) => {
//   // const login = localStorage.getItem("login");
//   // const [login, setLogin] = useState(localStorage.getItem("login") || false);

//   const navigate = useNavigate();
//   // const [login, setLogin] = useState(localStorage.getItem("login"));

//   let login = localStorage.getItem("login");
//   useEffect(() => {
//     localStorage.setItem("login", false);
//     if (login) {
//       navigate("/");
//     } else {
//       navigate("/");
//       navigate("/dashboard");
//     }
//   }, []);
//   // return login ? Dashboard : null;
//   return Dashboard || navigate("/");
//   // return Dashboard;
// };

// export default ProtectedRoute;

// import React, { useEffect } from "react";
// import Dashboard from "./Dashboard";
// import { Navigate, useNavigate } from "react-router-dom";
// import LoginUI from "./LoginUI";
// import Cookies from "js-cookie";

// const ProtectedRoute = ({ Dashboard }) => {
//   const navigate = useNavigate();
//   // if (localStorage.getItem("login") === true) {
//   //   return <Dashboard />;
//   // } else if (localStorage.getItem("login") === false) {
//   //   return navigate("/");
//   // }
//   const token = Cookies.get("token");
//   const login = localStorage.getItem("login");
//   useEffect(() => (login || token ? Dashboard : navigate("/")), []);
//   return login || token ? Dashboard : navigate("/");
// };

// export default ProtectedRoute;

import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = () => {
  // const [token, setToken] = useState(null);
  // setToken(Cookies.get("token"));
  const token = Cookies.get("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    } else if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return token ? <Dashboard /> : null;
  // return <Dashboard />;
};

export default ProtectedRoute;
