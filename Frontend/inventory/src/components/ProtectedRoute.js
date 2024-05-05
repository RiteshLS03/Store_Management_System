// import { Link, Navigate } from "react-router-dom";

// // import appUser from "../store/slices/index";
// import { useSelector } from "react-redux";

// const ProtectedRoute = () => {
//   const data = useSelector((state) => {
//     return state.users;
//   });

//   console.log(data);
//   if (data.message == "Login successful") {
//     return <Navigate to={"/dashboard"} />;
//   } else {
//     return <Navigate to={"/login"} />;
//   }
// };
// export default ProtectedRoute;

// import React from "react";
// import { Navigate } from "react-router-dom"; // Removed Link since it's not being used
// import { useSelector } from "react-redux";

// const ProtectedRoute = () => {
//   const data = useSelector((state) => state.users); // Simplified useSelector usage

//   console.log(data);

// Use === for strict equality comparison
//   if (data[0].message === "Login successful") {
//     return <Navigate to={"/dashboard"} />;
//   } else {
//     return <Navigate to={"/login"} />;
//   }
// };

// export default ProtectedRoute;
