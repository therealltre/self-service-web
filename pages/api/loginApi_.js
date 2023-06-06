// import { useRouter } from "next/router";
// import LocalStorageService from "../api/token";

// const axios = require("axios");

// const API_URL = "https://apiib.newvifinancial.com"; // Replace with your API URL

// export default async function loginHandler(req, res) {
//   const router = useRouter();

//   if (req.method === "POST") {
//     const { merchant_number, password } = req.body;

//     // Make the API call to verify the login credentials
//     try {
//       const response = await axios.post(
//         `${API_URL}/users/token`,
//         {
//           merchant_number,
//           password
//         },

//         {
//           headers: {
//             Authorization: "Token " + LocalStorageService.getAccessToken(),
//             "content-type": "application/json",
//             Accept: "application/json"
//           }
//         }
//       );

//       // Handle the API response accordingly
//       if (response.data.success) {
//         // Login successful
//         res.status(200).json({ message: "Login successful" });
//         router.push({ pathname: "/loan", query: values });
//       } else {
//         // Login failed
//         res.status(401).json({ message: "Invalid credentials" });
//       }
//     } catch (error) {
//       // Handle API call error
//       res.status(500).json({ message: "Internal server error" });
//     }
//   } else {
//     // Method not allowed
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
