import React, { useState, useEffect } from "react";
import { CompHeader } from "./CompHeader";
import InputTable from "./InputTable";
import { ToastContainer, toast } from "react-toastify";

const notify = () =>
  toast("Material Issued Successful!", {
    position: "bottom-right",
  });

const notifyError = (error) =>
  toast.error(error, {
    position: "bottom-right",
  });

const fetchPurchasedMaterial = async (setPurchaseData) => {
  try {
    const res = await fetch("http://localhost:5001/api/users/purchases", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    setPurchaseData(data);
  } catch (error) {
    // console.log(error);
    notifyError(data.error);
  }
};
const fetchIssuedMaterial = async (setIssueData) => {
  try {
    const res = await fetch("http://localhost:5001/api/users/getIssuedData", {
      method: "GET",
    });
    const data = await res.json();
    console.log(data);
    setIssueData(data);
  } catch (error) {
    notifyError(error);
    // console.log(error);
  }
};

const IssueUI = ({ button }) => {
  const [purchaseData, setPurchaseData] = useState([]);
  const [issueData, setIssueData] = useState([]);

  useEffect(() => {
    fetchPurchasedMaterial(setPurchaseData);
    fetchIssuedMaterial(setIssueData);
  }, []);
  // fetchPurchasedMaterial(setPurchaseData);

  const handleIssueUI = async (data) => {
    try {
      console.log(data);
      const res = await fetch("http://localhost:5001/api/users/issueProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      notify();
      const data2 = res.json();
      console.log(data2);
      // Refresh the purchased material after adding
      fetchIssuedMaterial(setIssueData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Issue"} />
      {/* <InputTable button={<button>Issue Material</button>} /> */}
      <InputTable
        handleSubmit={handleIssueUI}
        purchaseData={purchaseData}
        IssueUI={true}
        button={
          <button
            type="submit"
            className="flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4"
          >
            Issue Material
          </button>
        }
      />
      <div className="flex justify-center items-center">
        <table className="table-auto">
          <thead className="">
            <tr>
              <th className="border-2 p-4 text-normal">Product Name</th>
              <th className="border-2 p-4 text-normal">Quantity to Issue</th>
              <th className="border-2 p-4 text-normal">Issue Unit</th>
              <th className="border-2 p-4 text-normal">Price of Unit</th>
              <th className="border-2 p-4 text-normal">Total Price</th>
              <th className="border-2 p-4 text-normal">Issue Date</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">30</td>
              <td className="border-2 p-4 text-center">300</td>
              <td className="border-2 p-4 text-center">90000</td>
              <td className="border-2 p-4 text-center">15/02/2024</td>
            </tr> */}

            {issueData.reverse().map((issuedProduct) => {
              return (
                <tr className="" key={issuedProduct.id}>
                  <td className="border-2 p-4 text-center">
                    {issuedProduct.name}
                  </td>
                  <td className="border-2 p-4 text-center">
                    {issuedProduct.issue_quantity}
                  </td>
                  <td className="border-2 p-4 text-center">
                    {issuedProduct.unit_type}
                  </td>
                  <td className="border-2 p-4 text-center">
                    {issuedProduct.issue_price}
                  </td>
                  <td className="border-2 p-4 text-center">
                    {/* {issuedProduct.issue_price * issuedProduct.quantity} */}
                    {issuedProduct.issue_price * issuedProduct.issue_quantity}
                  </td>
                  <td className="border-2 p-4 text-center">
                    {issuedProduct.issue_date.slice(0, 10)}
                  </td>
                  {/* <td className="border-2 p-4 text-center">
                  {issuedProduct.name}
                </td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
};

export default IssueUI;
