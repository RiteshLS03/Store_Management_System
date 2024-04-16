import React from "react";
import { CompHeader } from "./CompHeader";
<<<<<<< HEAD
import InputTable from "./InputTable";
=======
>>>>>>> 33960bff50a0ca6255c044faaf39be382bd1c202

const IssueUI = () => {
  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Issue"} />
<<<<<<< HEAD
      <InputTable />
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
=======
>>>>>>> 33960bff50a0ca6255c044faaf39be382bd1c202
    </div>
  );
};

export default IssueUI;
