// import React from "react";

// const InputTable = () => {
//   return (
//     <div className="flex justify-center">
//       <form className="gap-8">
//         <div className="flex justify-center items-center p-4 gap-4">
//           <input
//             className="p-4 border-2 rounded-xl"
//             type="text"
//             placeholder=" Product Name"
//           />
//           <input
//             className="py-4 px-2 border-2 rounded-xl w-1/6"
//             type="text"
//             placeholder="Quantity"
//           />{" "}
//           <input
//             className="p-4 border-2 rounded-xl w-1/12"
//             type="text"
//             placeholder="Unit"
//           />
//           <input
//             className="p-4 border-2 rounded-xl w-1/5"
//             type="number"
//             // oninput={() => (this.value = this.value.slice(0, 2))} // maxLength={"3"}
//             maxLength="2"
//             placeholder="Price of Purchase"
//           />
//           <input
//             className="p-4 border-2 rounded-xl"
//             type="date"
//             maxLength={10}
//             max={10}
//             pattern="\d{2}/\d{2}/\d{4}"
//             placeholder="dd-mm/yyyy"
//             // pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}"
//           />
//           <button className=" flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4">
//             Add Purchase
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default InputTable;

// import React from "react";
// import { Formik, Form, Field } from "formik";

// const InputTable = () => {
//   const validateField = (value) => {
//     let error;
//     if (!value) {
//       error = "Required";
//     }
//     return error;
//   };

//   return (
//     <div className="flex justify-center">
//       <Formik
//         initialValues={{
//           productName: "",
//           quantity: "",
//           unit: "",
//           price: "",
//           date: "",
//         }}
//         onSubmit={(values) => {
//           console.log(values); // You can replace this with your form submission logic
//         }}
//       >
//         {({ values, validateField }) => (
//           <Form className="gap-8">
//             <div className="flex justify-center items-center p-4 gap-4">
//               <Field
//                 name="productName"
//                 className="p-4 border-2 rounded-xl"
//                 type="text"
//                 placeholder="Product Name"
//                 validate={validateField}
//               />
//               <Field
//                 name="quantity"
//                 className="py-4 px-2 border-2 rounded-xl w-1/6"
//                 type="number"
//                 placeholder="Quantity"
//                 validate={validateField}
//               />
//               <Field
//                 name="unit"
//                 className="p-4 border-2 rounded-xl w-1/12"
//                 type="text"
//                 placeholder="Unit"
//                 validate={validateField}
//               />
//               <Field
//                 name="price"
//                 className="p-4 border-2 rounded-xl w-1/5"
//                 type="number"
//                 placeholder="Price of Purchase"
//                 validate={validateField}
//               />
//               <Field
//                 name="date"
//                 className="p-4 border-2 rounded-xl"
//                 type="date"
//                 placeholder="dd-mm/yyyy"
//                 validate={validateField}

//                 // pattern="(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/\d{4}"
//               />
//               <button
//                 type="submit"
//                 className="flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4"
//               >
//                 Add Purchase
//               </button>
//             </div>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default InputTable;

import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import IssueUI from "./IssueUI";

// const fetchPurchasedMaterial = async (setPurchaseData2) => {
//   try {
//     const res = await fetch("http://localhost:5001/api/users/purchases", {
//       method: "GET",
//     });
//     const data = await res.json();
//     console.log(data);
//     setPurchaseData2(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

const InputTable = ({ button, handleSubmit, purchaseData, IssueUI }) => {
  // const [purchaseData2, setPurchaseData2] = useState(purchaseData);
  // useEffect(() => {
  //   fetchPurchasedMaterial(setPurchaseData2);
  // }, []);
  // fetchPurchasedMaterial(setPurchaseData2);
  const validateField = (value) => {
    let error;
    if (!value) {
      error = "Required";
    }
    return error;
  };

  return (
    <div className="flex justify-center ">
      <Formik
        initialValues={{
          productName: "",
          quantity: "",
          unit: "",
          price: "00.00",
          // date: Date.now(),
        }}
        onSubmit={(values) => {
          // console.log(values); // You can replace this with your form submission logic
          // // console.log();
          // onSubmit(values);
          handleSubmit(values);
          console.log(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form className="gap-8">
            <div className="flex justify-center items-center p-8 gap-2">
              <div className="text-center ">
                <div>
                  {/* <Field
                    name="productName"
                    className="p-4 border-2 rounded-xl"
                    type="text"
                    placeholder="Product Name"
                    validate={validateField}
                  />
                  <select name="" id="">
                    <option></option>
                  </select> */}
                  {/* <Field
                    type="text"
                    name="ProductName"
                    className="px-4 py-4 border-2 rounded-xl"
                    placeholder="New product name"
                    validate={validateField}
                  /> */}
                  {IssueUI ? (
                    <Field
                      type="text"
                      as="select"
                      name="productName"
                      className="p-4 border-2 rounded-xl"
                      placeholder="Product Name"
                      validate={validateField}
                      // onClick={() => {}}
                    >
                      {/* <Field type="text"></Field> */}
                      <option value="">Product Name</option>
                      {purchaseData.map((product) => {
                        return (
                          <option key={product?.id} value={product?.name}>
                            {product.name}
                          </option>
                        );
                      })}
                      {/* <option>
                      <input type="text"></input>
                    </option> */}
                      {/* <option value="other">Other</option>{" "} */}
                      {/* Add this option for custom input */}
                    </Field>
                  ) : (
                    <Field
                      type="text"
                      name="productName"
                      className="px-4 py-4 border-2 rounded-xl"
                      placeholder="New product name"
                      validate={validateField}
                    />
                  )}
                  {/* Render the input field conditionally based on the selected value */}

                  {errors?.productName && touched?.productName && (
                    <div>{errors?.productName}</div>
                  )}
                </div>
              </div>
              <div className="text-center py-8">
                <Field
                  name="quantity"
                  className="py-4 px-2 border-2 rounded-xl w-40"
                  type="text"
                  placeholder="Quantity"
                  validate={validateField}
                />
                {errors.quantity && touched.quantity && (
                  <div>{errors.quantity}</div>
                )}
              </div>
              <div className="text-center ">
                <Field
                  as="select"
                  name="unit"
                  className="p-4 border-2 rounded-xl"
                  type="text"
                  placeholder="Unit"
                  validate={validateField}
                >
                  <option value="">Select</option>
                  <option value="kg">Kg</option>
                  <option value="ltr">Ltr</option>
                  <option value="units">Units</option>
                  <option value="Box">Box</option>
                  {/* <option></option> */}
                </Field>
                {errors.unit && touched.unit && <div>{errors.unit}</div>}
              </div>
              <div className="text-center ">
                <Field
                  name="price"
                  className="p-4 border-2 rounded-xl"
                  placeholder="Price of Purchase"
                  validate={validateField}
                  type="number"
                  step="0.01"
                  // value="00.00"
                >
                  {/* <option>1</option> */}
                </Field>
                {errors.price && touched.price && <div>{errors.price}</div>}
              </div>
              {/* <div className="text-center ">
                <Field
                  name="date"
                  className="p-4 border-2 rounded-xl"
                  type="date"
                  placeholder="dd-mm-yyyy"
                  validate={validateField}
                />
                {errors.date && touched.date && <div>{errors.date}</div>}
              </div> */}

              {/* <button
                type="submit"
                className="flex mx-auto border-2 rounded-lg p-4 text-white bg-[#363062] my-4"
              >
                {button}
              </button> */}
              {button}
            </div>
          </Form>
        )}
      </Formik>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default InputTable;
