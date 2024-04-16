import React from "react";

const InputTable = () => {
  return (
    <div className="flex justify-center">
      <form className="gap-8">
        <div className="flex justify-center items-center p-4 gap-4">
          <input
            className="p-4 border-2 rounded-xl"
            type="text"
            placeholder=" Product Name"
          />
          <input
            className="py-4 px-2 border-2 rounded-xl w-1/6"
            type="text"
            placeholder="Quantity"
          />{" "}
          <input
            className="p-4 border-2 rounded-xl w-1/12"
            type="text"
            placeholder="Unit"
          />
          <input
            className="p-4 border-2 rounded-xl w-1/5"
            type="number"
            // oninput={() => (this.value = this.value.slice(0, 2))} // maxLength={"3"}
            maxLength="2"
            placeholder="Price of Purchase"
          />
          <input
            className="p-4 border-2 rounded-xl"
            type="date"
            maxLength={10}
            max={10}
            pattern="\d{2}/\d{2}/\d{4}"
            placeholder="dd-mm/yyyy"
            // pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}"
          />
          <button className=" flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4">
            Add Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default InputTable;
