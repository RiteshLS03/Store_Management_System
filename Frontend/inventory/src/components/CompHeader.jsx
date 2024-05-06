import { CiSearch } from "react-icons/ci";
import profile from "../assets/profile.jpg";
import { FaRegUserCircle } from "react-icons/fa";
// import { json } from "react-router-dom";
import { useSelector } from "react-redux";

export const CompHeader = ({ name }) => {
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
        <div>
          <div className="flex justify-center items-center">
            {data[0]?.userInfo?.user?.name?.profile ? (
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
                {data[0]?.userInfo?.user?.name
                  ? data[0]?.userInfo?.user?.name
                  : "John White"}
              </p>
              <p className="font-poppins text-[12px] font-light">
                {data[0]?.userInfo?.user?.email
                  ? data[0]?.userInfo?.user?.email
                  : "Johnwhite@email.com"}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
