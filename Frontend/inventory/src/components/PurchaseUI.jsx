// import React, { useEffect, useState } from "react";
// import { CompHeader } from "./CompHeader";
// import InputTable from "./InputTable";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import { useNavigate } from "react-router-dom";
// // const navigate = useNavigate();

// const PurchaseUI = () => {
//   const [purchaseData, setPurchaseData] = useState([]);
//   // useEffect(() => fetchPurchasedMaterial(), []);
//   const notify = () =>
//     toast("Purchase Successful!", {
//       position: "bottom-right",
//     });
//   const notifyError = () =>
//     toast.error("Problem while adding purchase", {
//       position: "bottom-right",
//     });
//   const fetchPurchasedMaterial = async () => {
//     try {
//       const res = await fetch("http://localhost:5001/api/users/purchases", {
//         method: "GET",
//         // body: JSON.stringify(localStorage.getItem("token")),
//       });
//       const data = await res.json();
//       console.log(data);
//       setPurchaseData(data);
//     } catch (error) {
//       console.log(error);
//       // navigate("/");
//     }
//   };
//   useEffect(() => {
//     fetchPurchasedMaterial();
//   }, []);

//   const handleAddPurchase = async (values) => {
//     try {
//       console.log(values);
//       const res = await fetch("http://localhost:5001/api/users/addproduct", {
//         method: "POST",
//         // body: JSON.stringify(values),
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(values),
//       });
//       const data = await res.json();
//       console.log(data.message);
//       // const data = await res.json();
//       if (data?.message) {
//         notify();
//       } else {
//         notifyError();
//       }
//     } catch (error) {
//       notifyError();
//     }
//   };
//   return (
//     <div className="px-6 py-4 h-screen">
//       <CompHeader name={"Purchase"} />
//       <InputTable
//         handleSubmit={handleAddPurchase}
//         button={
//           <button
//             type="submit"
//             className="flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4"
//           >
//             Add Purchase
//           </button>
//         }
//       />
//       <div className="flex justify-center items-center">
//         <ToastContainer />
//         <table className="table-auto">
//           <thead className="">
//             <tr>
//               <th className="border-2 p-4 text-normal">Product Name </th>
//               <th className="border-2 p-4 text-normal">Quantity</th>
//               <th className="border-2 p-4 text-normal">Unit </th>
//               <th className="border-2 p-4 text-normal">Price of Unit</th>
//               <th className="border-2 p-4 text-normal">Total Price</th>
//               <th className="border-2 p-4 text-normal">Purchase Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* <tr className="">
//               <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
//               <td className="border-2 p-4 text-center">Piece</td>
//               <td className="border-2 p-4 text-center">60</td>
//               <td className="border-2 p-4 text-center">6000</td>
//               <td className="border-2 p-4 text-center">360000</td>
//               <td className="border-2 p-4 text-center">12/02/2024</td>
//             </tr>{" "}
//             <tr className="">
//               <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
//               <td className="border-2 p-4 text-center">Piece</td>
//               <td className="border-2 p-4 text-center">60</td>
//               <td className="border-2 p-4 text-center">6000</td>
//               <td className="border-2 p-4 text-center">360000</td>
//               <td className="border-2 p-4 text-center">12/02/2024</td>
//             </tr>{" "}
//             <tr className="">
//               <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
//               <td className="border-2 p-4 text-center">Piece</td>
//               <td className="border-2 p-4 text-center">60</td>
//               <td className="border-2 p-4 text-center">6000</td>
//               <td className="border-2 p-4 text-center">360000</td>
//               <td className="border-2 p-4 text-center">12/02/2024</td>
//             </tr> */}
//             {purchaseData.map((data) => {
//               return (
//                 <tr className="" key={data.id}>
//                   <td className="border-2 p-4 text-center">{data.name}</td>
//                   <td className="border-2 p-4 text-center">{data.quantity}</td>
//                   <td className="border-2 p-4 text-center">{data.price}</td>
//                   <td className="border-2 p-4 text-center">{data.price}</td>
//                   <td className="border-2 p-4 text-center">
//                     {data.price * data.quantity}
//                   </td>
//                   <td className="border-2 p-4 text-center">
//                     {data.purchase_date.slice(0, 10)}
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PurchaseUI;

import React, { useEffect, useState } from "react";
import { CompHeader } from "./CompHeader";
import InputTable from "./InputTable";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetchPurchasedMaterial = async (setPurchaseData) => {
  try {
    const res = await fetch("http://localhost:5001/api/users/purchases", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    setPurchaseData(data);
  } catch (error) {
    console.log(error);
  }
};

const PurchaseUI = () => {
  const [purchaseData, setPurchaseData] = useState([]);

  useEffect(() => {
    fetchPurchasedMaterial(setPurchaseData);
  }, []);

  const notify = () =>
    toast("Purchase Successful!", {
      position: "bottom-right",
    });

  const notifyError = () =>
    toast.error("Problem while adding purchase", {
      position: "bottom-right",
    });

  const handleAddPurchase = async (values) => {
    try {
      console.log(values);
      const res = await fetch("http://localhost:5001/api/users/addproduct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      console.log(data.message);
      if (data?.message) {
        notify();
      } else {
        notifyError();
      }
      // Refresh the purchased material after adding
      fetchPurchasedMaterial(setPurchaseData);
    } catch (error) {
      notifyError();
    }
  };

  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Purchase"} />
      <InputTable
        handleSubmit={handleAddPurchase}
        purchaseData={purchaseData}
        button={
          <button
            type="submit"
            className="flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4"
          >
            Add Purchase
          </button>
        }
      />
      <div className="flex justify-center items-center">
        <ToastContainer />
        <table className="table-auto mb-12">
          <thead className="">
            <tr>
              <th className="border-2 p-4 text-normal">Product Name</th>
              <th className="border-2 p-4 text-normal">Quantity</th>
              <th className="border-2 p-4 text-normal">Price of Unit</th>
              <th className="border-2 p-4 text-normal">Unit</th>
              <th className="border-2 p-4 text-normal">Total Price</th>
              <th className="border-2 p-4 text-normal">Purchase Date</th>
              {/* <th className="border-2 p-4 text-normal">Time</th> */}
            </tr>
          </thead>
          <tbody>
            {purchaseData.reverse().map((data) => (
              <tr className="" key={data.id}>
                <td className="border-2 p-4 text-center">{data.name}</td>
                <td className="border-2 p-4 text-center">{data.quantity}</td>
                <td className="border-2 p-4 text-center">{data.unit_type}</td>
                <td className="border-2 p-4 text-center">{data.price}</td>
                <td className="border-2 p-4 text-center">
                  {data.price * data.quantity}
                </td>
                <td className="border-2 p-4 text-center">
                  {data.purchase_date.slice(0, 10)}
                </td>
                {/* <td className="border-2 p-4 text-center">
                  {data.purchase_date.slice(11, 19)}
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseUI;
