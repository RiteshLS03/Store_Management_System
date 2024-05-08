import React from "react";
import { CompHeader } from "./CompHeader";
import InputTable from "./InputTable";

const PurchaseUI = () => {
  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Purchase"} />
      <InputTable button={<button>Add Purchase</button>} />
      <div className="flex justify-center items-center">
        <table className="table-auto">
          <thead className="">
            <tr>
              <th className="border-2 p-4 text-normal">Product Name </th>
              <th className="border-2 p-4 text-normal">Quantity</th>
              <th className="border-2 p-4 text-normal">Unit </th>
              <th className="border-2 p-4 text-normal">Price of Unit</th>
              <th className="border-2 p-4 text-normal">Total Price</th>
              <th className="border-2 p-4 text-normal">Purchase Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">60</td>
              <td className="border-2 p-4 text-center">6000</td>
              <td className="border-2 p-4 text-center">360000</td>
              <td className="border-2 p-4 text-center">12/02/2024</td>
            </tr>{" "}
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">60</td>
              <td className="border-2 p-4 text-center">6000</td>
              <td className="border-2 p-4 text-center">360000</td>
              <td className="border-2 p-4 text-center">12/02/2024</td>
            </tr>{" "}
            <tr className="">
              <td className="border-2 p-4 text-center">Bearing Steel 300MM</td>
              <td className="border-2 p-4 text-center">Piece</td>
              <td className="border-2 p-4 text-center">60</td>
              <td className="border-2 p-4 text-center">6000</td>
              <td className="border-2 p-4 text-center">360000</td>
              <td className="border-2 p-4 text-center">12/02/2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PurchaseUI;
