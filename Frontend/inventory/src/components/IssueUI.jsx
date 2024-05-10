import React from "react";
import { CompHeader } from "./CompHeader";
import InputTable from "./InputTable";

const IssueUI = ({ button }) => {
  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Issue"} />
      {/* <InputTable button={<button>Issue Material</button>} /> */}
      <InputTable
        // handleSubmit={handleAddPurchase}
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
              <th className="border-2 p-4 text-normal">Issue Unit</th>
              <th className="border-2 p-4 text-normal">Quantity to Issue</th>
              <th className="border-2 p-4 text-normal">Price of Unit</th>
              <th className="border-2 p-4 text-normal">Total Price</th>
              <th className="border-2 p-4 text-normal">Issue Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">30</td>
              <td className="border-2 p-4 text-center">300</td>
              <td className="border-2 p-4 text-center">90000</td>
              <td className="border-2 p-4 text-center">15/02/2024</td>
            </tr>{" "}
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">30</td>
              <td className="border-2 p-4 text-center">300</td>
              <td className="border-2 p-4 text-center">90000</td>
              <td className="border-2 p-4 text-center">15/02/2024</td>
            </tr>{" "}
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">30</td>
              <td className="border-2 p-4 text-center">300</td>
              <td className="border-2 p-4 text-center">90000</td>
              <td className="border-2 p-4 text-center">15/02/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IssueUI;
