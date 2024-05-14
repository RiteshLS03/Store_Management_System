import { CiSearch } from "react-icons/ci";
import profile from "../assets/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";
// import { json } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Cookies } from "react-cookie";
// import Cookies from "js-cookie";
import Cookies from "js-cookie";

export const CompHeader = ({ name }) => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const data = useSelector((state) => {
    return state.users;
  });
  const getUserinfo = async () => {
    const response = await fetch("http://localhost:5001/api/users/getuser", {
      method: "GET",
      headers: {},
      body: JSON.stringify(),
    });
  };
  // const profile = null;
  const handleUserLog = () => {
    // dropDown ? setDropDown(false) : setDropDown(true);
    setDropDown(!dropDown);
  };
  const handleLogout = async () => {
    console.log(Cookies.get());
    console.log(Cookies.get());
    Cookies.remove("token");
    navigate("/");
    // Cookies.remove("token");

    // localStorage.removeItem("token");
    // localStorage.removeItem("login");
    // localStorage.clear();
    // const res = await fetch("http://localhost:5001/api/users/logout", {
    //   method: "GET",
    // });
    // const data = JSON.stringify(res);

    // console.log(data);
  };
  return (
    <div className="">
      <div
        className="flex justify-between items-center"
        // onClick={() => console.log(data)}
      >
        <p className="font-bold font-poppins">{name}</p>
        <div className="flex justify-start items-center">
          <button
            type="button"
            className="justify-start border-2 py-3 px-4 bg-white rounded-l-lg"
          >
            <CiSearch />
          </button>
          <input
            type="search"
            placeholder="Search here"
            className=" py-2 px-4 bg-white rounded-md  justify-center items-center"
          />
        </div>
        <div onClick={() => handleUserLog()}>
          <div className="flex justify-center items-center">
            {data[data.length - 1]?.userInfo?.user?.name?.profile ? (
              <img
                src={profile}
                className="w-[50px] rounded-xl mx-2"
                alt="profile"
              />
            ) : (
              <span className=" rounded-xl mx-2" alt="profile">
                <FaRegUserCircle size={40} />
              </span>
            )}
            <button>
              <p className="font-poppins text-[16px] font-bold">
                {data[data.length - 1]?.userInfo?.user?.name
                  ? data[data.length - 1]?.userInfo?.user?.name
                  : "John White"}
              </p>
              <p className="font-poppins text-[12px] font-light">
                {data[data.length - 1]?.userInfo?.user?.email
                  ? data[data.length - 1]?.userInfo?.user?.email
                  : "Johnwhite@email.com"}
              </p>
            </button>
            {dropDown && (
              <div className="absolute top-16  bg-white border border-gray-200 shadow-md rounded-md">
                <ul className="py-1">
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 font-poppins"
                    onClick={() => handleLogout()}
                  >
                    Logout
                  </li>
                  <li className="cursor-pointer px-4 py-2 hover:bg-gray-100 font-poppins">
                    Change Password
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
