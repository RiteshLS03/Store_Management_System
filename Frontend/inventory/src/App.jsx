import React from "react";
import { lazy, Suspense } from "react";
// import { createRoot  } from "react-dom/client";
import {
  Route,
  Routes,
  Router,
  Link,
  createBrowserRouter,
} from "react-router-dom";
import LoginUI from "./components/LoginUI";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
const Dashboard = lazy(() => import("./components/Dashboard"));
// const DashboardPage = lazy(() => import("./pages/DashboardUI/DashboardPage/DashboardPage"))
// useDispatch

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={<LoginUI />}
//           errorElement={
//             <h1>
//               Something Went Wrong{" "}
//               <Link to={"/"} className="text-red-600">
//                 Login
//               </Link>
//             </h1>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={<ProtectedRoute Dashboard={<Dashboard />} />}
//         />
//       </Routes>
//     </Router>
//   );
// };
// export default App;

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginUI />,
    errorElement: (
      <h1>
        Something Went Wrong
        <Link to={"/"} className="text-red-600">
          Login
        </Link>
      </h1>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute Dashboard={<Dashboard />}>
        <Suspense fallback={<div>Loading...</div>}>
          {/* <Dashboard /> */}
        </Suspense>
      </ProtectedRoute>
    ),
  },
]);
