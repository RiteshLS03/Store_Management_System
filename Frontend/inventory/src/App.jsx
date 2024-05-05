import React from "react";
import { lazy, Suspense } from "react";
// import { createRoot  } from "react-dom/client";
import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import LoginUI from "./components/LoginUI";
// import ProtectedRoute from "./components/ProtectedRoute";
const Dashboard = lazy(() => import("./components/Dashboard"));
// const DashboardPage = lazy(() => import("./pages/DashboardUI/DashboardPage/DashboardPage"))
// useDispatch
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
          Login
        </Link>
      </h1>
    ),
  },
  {
    path: "/dashboard",
    element: (
      // <ProtectedRoute>
      <Suspense fallback={<div>Loading...</div>}>
        <Dashboard />
      </Suspense>
      // </ProtectedRoute>
    ),
  },
]);

// export default App;
