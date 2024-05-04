import { CiSearch } from "react-icons/ci";
import profile from "../assets/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";
import { json } from "react-router-dom";

export const CompHeader = ({ name }) => {
  const getUserinfo = async () => {
    const response = await fetch("http://localhost:5001/api/users/getuser", {
      method: "GET",
      headers: {},
      body: JSON.stringify(),
    });
  };
  // const profile = null;
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <p className="font-bold font-poppins">{name}</p>
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
          <div className="flex justify-center items-center">
            {profile ? (
              <img
                src={profile}
                className="w-[50px] rounded-xl mx-2"
                alt="profile"
              />
            ) : (
              <span className=" rounded-xl mx-2" alt="profile">
                <FaRegUserCircle />
              </span>
            )}
            <button>
              <p className="font-poppins text-[16px] font-bold">John White</p>
              <p className="font-poppins text-[12px] font-light">Super Admin</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
