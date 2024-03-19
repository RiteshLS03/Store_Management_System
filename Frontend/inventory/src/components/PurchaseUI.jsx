import React from "react";
import { CompHeader } from "./CompHeader";
import InputTable from "./InputTable";

const PurchaseUI = () => {
  return (
    <div className="px-6 py-4 h-screen">
      <CompHeader name={"Purchase"} />
      <InputTable />
    </div>
  );
};

export default PurchaseUI;
