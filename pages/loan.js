// import axios from "axios";
// import { useState } from "react";
// import { Button } from "@material-tailwind/react";
// import { useRouter } from "next/router";

// export default function YourComponent() {
//   const router = useRouter();
//   const [mobile_no, setMobileNumber] = useState("");
//   const [loanAmount, setLoanAmount] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Set your base URL
//     const baseURL = "https://apiib.newvifinancial.com";

//     const authToken = "/api/token"; // Replace with your authorization token

//     // Set your headers
//     const headers = {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${authToken}`
//       //Authorization: "Bearer YOUR_AUTH_TOKEN"
//     };

//     // Set your request body
//     const data = {
//       mobile_no: mobile_no,
//       loanAmount: loanAmount
//     };

//     try {
//       const response = await axios.post(`${baseURL}/api/loans`, data, {
//         headers: headers
//       });

//       // Handle the response
//       console.log(response.data);

//       // Redirect to another page
//       router.push({ pathname: "/success" });
//     } catch (error) {
//       // Handle the error
//       console.error(error);

//       // Redirect to another page
//       router.push({ pathname: "/failed" });
//     }
//   };

//   return (
//     <div className="flex items-center justify-center sm:w-full">
//       <main className="h-screen flex items-center justify-center w-1/2">
//         <div className="flex flex-1 flex-col justify-center m-40 px-6 py-12 lg:px-8 bg-white border border-gray-400 rounded-md shadow-lg">
//           <div id="loan-amount" className="sm:mx-auto sm:w-full sm:max-w-sm">
//             <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
//               Enter Loan Amount
//             </h2>
//           </div>
//           <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm ">
//             <form
//               onSubmit={handleSubmit}
//               className=" space-y-6"
//               action="#"
//               method="POST"
//             >
//               <div>
//                 <p className="mb-2 font-medium">
//                   Min: GHC 1,000 - Max: GHC 5,000
//                 </p>
//               </div>

//               <div id="mobile_">
//                 <div id="mobile" className="relative mb-2">
//                   <input
//                     type="number"
//                     name="mobile_no"
//                     autoComplete="mobile_no"
//                     id="mobile"
//                     value={mobile_no}
//                     onChange={(e) => setMobileNumber(e.target.value)}
//                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                     required
//                   />
//                   <label
//                     htmlFor="floating_outlined"
//                     className="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                   >
//                     Merchant Number
//                   </label>
//                 </div>
//               </div>

//               <div id="loan_amount">
//                 <div id="loan_amount" className="relative mb-2">
//                   <input
//                     type="number"
//                     name="loanAmount"
//                     autoComplete="loan_amount"
//                     id="loan_amount"
//                     maxLength="5"
//                     value={loanAmount}
//                     onChange={(e) => setLoanAmount(e.target.value)}
//                     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                     placeholder=" "
//                     required
//                   />
//                   <label
//                     htmlFor="floating_outlined"
//                     className="absolute text-sm text-gray-500 dark:text-gray-900 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
//                   >
//                     Loan Amount
//                   </label>
//                 </div>
//               </div>

//               {/* <label>
//                 Mobile Number:
//                 <input
//                   type="number"
//                   name="mobile_no"
//                   autoComplete="mobile_no"
//                   id="mobile"
//                   value={mobile_no}
//                   onChange={(e) => setMobileNumber(e.target.value)}
//                   className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder=" "
//                   required
//                 />
//               </label> */}
//               <br />

//               {/* <label>
//                 Loan Amount (GHS):
//                 <input
//                   type="number"
//                   value={loanAmount}
//                   onChange={(e) => setLoanAmount(e.target.value)}
//                   className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 appearance-none  dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//                   placeholder="Enter loan amount within specified range "
//                   required
//                 />
//               </label> */}

//               <br />
//               <div id="sign_in">
//                 <Button
//                   type="submit"
//                   className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
//                 >
//                   Request Loan
//                 </Button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
