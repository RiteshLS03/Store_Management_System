// import { CiSearch } from "react-icons/ci";
// import profile from "../assets/profile.jpg";
import { CompHeader } from "./CompHeader";

const DashboardUI = () => {
  return (
    <div className="px-6 py-4 h-screen">
      {/* <div className="flex justify-between items-center">
        <p className="font-bold font-poppins">My Dashboard</p>
        <div className="flex justify-start items-center">
          <button
            type="button"
            className=" justify-start border-2 py-3 px-4 bg-white rounded-l-lg"
          >
            <CiSearch />
          </button>
          <input
            type="search"
            placeholder="Search here"
            className=" py-2 px-4 bg-white rounded-md  justify-center items-center"
          />
        </div>
        <div>
          <div className="flex justify-center">
            <img
              src={profile}
              className="w-[50px] rounded-xl mx-2"
              alt="profile"
            />
            <button>
              <p className="font-poppins text-[16px] font-bold">John White</p>
              <p className="font-poppins text-[12px] font-light">Super Admin</p>
            </button>
          </div>
        </div>
      </div> */}
      <CompHeader name={"My Dashboard"} />
      <div className="flex justify-center items-center py-12">
        <h1 className="font-bold text-4xl">Welcome to Dashboard!</h1>
      </div>
<<<<<<< HEAD
      <div className="flex justify-center items-center"></div>
=======
      {/* <div className="flex justify-center items-center py-12">
        <h1 className="font-light text-4xl">Welcome to Dashboard!</h1>
      </div> */}
>>>>>>> 33960bff50a0ca6255c044faaf39be382bd1c202
    </div>
  );
};

export default DashboardUI;
