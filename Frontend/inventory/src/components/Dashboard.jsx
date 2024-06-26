import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { GoIssueClosed } from "react-icons/go";
import PurchaseUI from "./PurchaseUI";
import IssueUI from "./IssueUI";
// import DashboardUI from "./DashboardUI.1";
import DashboardUI from "./DashboardUI";
import Cookies from "js-cookie";

// const verifyToken = () => {
//   const token = Cookies.get("token");
//   console.log(token);
// };

const Dashboard = () => {
  // useEffect(() => {}, []);
  // console.log(user);

  // useEffect(() => {
  //   verifyToken();
  // }, []);

  const [dashboard, setDashboard] = useState({
    dashboard: true,
    purchase: false,
    issue: false,
  });
  return (
    <div className="bg-[#f9f9f9] flex font-poppins h-screen">
      <div className="w-1/4 p-12 bg my-4 bg-white rounded-3xl">
        <div className="grid gap-10 ">
          <button
            className="flex justify-center items-center gap-4"
            onClick={() =>
              setDashboard({ dashboard: true, purchase: false, issue: false })
            }
          >
            <MdDashboard /> Dashboard
          </button>
          <button
            className="flex justify-center items-center gap-4"
            onClick={() =>
              setDashboard({ dashboard: false, purchase: true, issue: false })
            }
          >
            <BiSolidPurchaseTagAlt /> Purchase Material
          </button>{" "}
          <button
            className="flex justify-center items-center gap-4"
            onClick={() =>
              setDashboard({ dashboard: false, purchase: false, issue: true })
            }
          >
            <GoIssueClosed />
            Issue Material
          </button>{" "}
        </div>
      </div>

      <div className="w-3/4 overflow-auto">
        {dashboard.dashboard ? (
          <DashboardUI />
        ) : dashboard.purchase ? (
          <PurchaseUI />
        ) : (
          <IssueUI />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
