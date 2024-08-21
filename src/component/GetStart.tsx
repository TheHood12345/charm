// Skip to content
// Navigation Menu
// Umorenism
// /
// chambitExchange

// Type / to search
// Code
// Issues
// Pull requests
// Actions
// Projects
// Security
// Insights
// Commit
// kyc getstared image added
//  main
// @Umorenism
// Umorenism committed 4 minutes ago 
// 1 parent 5b3e2a1
// commit 7c4606e
 
// Showing 32 changed files with 126 additions and 707 deletions.
// Filter changed files
//  17 changes: 10 additions & 7 deletions17  
// package-lock.json
// Some generated files are not rendered by default. Learn more about how customized files appear on GitHub.

//   5 changes: 1 addition & 4 deletions5  
// package.json
// Original file line number	Diff line number	Diff line change
// @@ -12,6 +12,7 @@
//   "dependencies": {
//     "@formkit/auto-animate": "^0.8.1",
//     "@types/react-slick": "^0.23.13",
//     "@types/react-webcam": "^3.0.0",
//     "@types/redux": "^3.6.0",
//     "axios": "^1.6.2",
//     "dotenv": "^16.4.5",
// @@ -25,10 +26,6 @@
//     "react-slick": "^0.30.2",
//     "react-spinners": "^0.14.1",
//     "react-typing-effect": "^2.0.5",
// <<<<<<< HEAD
//     "react-webcam": "^7.2.0",
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//     "redux": "^5.0.1",
//     "slick-carousel": "^1.8.1",
//     "typewriter-effect": "^2.21.0"
//  2 changes: 1 addition & 1 deletion2  
// src/Login/Login.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,7 @@
// import { useState } from "react";
// import { FaEyeSlash, FaEye } from "react-icons/fa6";
// import axios from "axios";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { useNavigate } from "react-router-dom";

// export const Login = () => {
//   181 changes: 1 addition & 180 deletions181  
// src/Signup/Signup.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,8 +1,7 @@
// import { useState } from "react";
// import axios from "axios";
// <<<<<<< HEAD
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { FaGoogle } from "react-icons/fa";

// export const Signup = () => {
// @@ -13,43 +12,12 @@ export const Signup = () => {

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
// =======
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import { useNavigate } from "react-router-dom";

// export const Signup = () => {
//   let navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     userName: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     agreedToTerms: true,
//     country: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await axios.post(
//         "https://backend.chambit.exchange/api/auth/signup",
// <<<<<<< HEAD
//         { email }
//       );

// @@ -62,24 +30,11 @@ export const Signup = () => {
//       }
//     } catch (error) {
//       setError("An error occurred. Please try again.");
// =======
//         formData
//       );
//       console.log("Signup successful:", response.data.data.userId);
//       localStorage.removeItem("userId");
//       localStorage.setItem("userId", response.data.data.userId);
//       await navigate("/otp", { state: { formData } });
//       // Handle successful signup (e.g., redirect to login page)
//     } catch (err) {
//       console.error("Signup failed:", err);
//       setError("Signup failed. Please check your details and try again.");
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//     } finally {
//       setLoading(false);
//     }
//   };

// <<<<<<< HEAD
//   return (
//     <div
//       className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
// @@ -150,140 +105,6 @@ export const Signup = () => {
//         >
//           <FaGoogle className="text-red-700" /> Sign up with Google
//         </button>
// =======
//   let [country, setCountry] = useState([]);

//   const fetchCountries = async () => {
//     let res = await axios.get(
//       "https://backend.chambit.exchange/api/auth/country-list"
//     );
//     setCountry(Object.values(res.data));
//   };

//   return (
//     <div
//       style={{ height: "100%" }}
//       className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
//     >
//       <div className="w-full max-w-sm">
//         <div className="flex justify-center mb-6">
//           <img src={logo} alt="Logo" className="h-[50px]" />
//         </div>
//         <h1 className="text-2xl mt-3 font-bold text-center">
//           Create your Account
//         </h1>
//         <p className="py-2 text-sm text-center">
//           Login to your account by entering your email and password
//         </p>
//         <form className="mt-10" onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="firstName"
//               placeholder="First Name"
//               value={formData.firstName}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="lastName"
//               placeholder="Last Name"
//               value={formData.lastName}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="text"
//               name="userName"
//               placeholder="Username"
//               value={formData.userName}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <input
//               type="tel"
//               name="phoneNumber"
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border p-2 bg-transparent outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="mb-4">
//             <select
//               name="country"
//               onFocus={fetchCountries}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
//             >
//               <option disabled selected>
//                 Country
//               </option>
//               {country.map((coun, index) => (
//                 <option
//                   key={index}
//                   value={coun}
//                   style={{ color: "white", backgroundColor: "rgb(6, 10, 23)" }}
//                 >
//                   {coun}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="mb-4">
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
//             />
//           </div>
//           <div className="flex justify-center items-center gap-4 px-2 mb-2">
//             <input type="checkbox" className="h-5 w-5" />
//             <span className="text-sm">
//               By registering you agree to our Terms and privacy policy.{" "}
//               <a href="/privacy-policy" className="text-blue-500 underline">
//                 See privacy policy
//               </a>
//             </span>
//           </div>
//           {error && (
//             <p className="text-red-500 text-sm text-center mb-4">{error}</p>
//           )}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-[#1DD55E] rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
//           >
//             {loading ? "Submitting details..." : "Submit"}
//           </button>

//           <p className="py-2 text-center">
//             Already have an account?{" "}
//             <a href="/login" className="text-orange-500">
//               Login here
//             </a>
//           </p>
//         </form>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//       </div>
//     </div>
//   );
//  Binary file addedBIN +696 KB 
// src/asset/TONCOIN 01.jpg
// Unable to render rich display

//  Binary file addedBIN +684 KB 
// src/asset/TONCOIN 011.jpg
// Unable to render rich display

//  Binary file addedBIN +693 KB 
// src/asset/TONCOIN PLAY GAMES.jpg
// Unable to render rich display

//  0  
// src/asset/NEWLOGO-removebg-preview (1).png → src/asset/nlogo.png
// File renamed without changes
//  Binary file addedBIN +648 KB 
// src/asset/tradin (1).jpg
// Unable to render rich display

//  2 changes: 1 addition & 1 deletion2  
// src/component/Advert.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,7 @@
// import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import { IoMdHeadset } from "react-icons/io";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { MdArrowDropDown } from "react-icons/md";
// import { Link } from "react-router-dom";
//   13 changes: 0 additions & 13 deletions13  
// src/component/BuyDetails.tsx
// Original file line number	Diff line number	Diff line change
// @@ -5,23 +5,10 @@ import { IoMdHeadset } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { BsStars } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa6";
// <<<<<<< HEAD

// const BuyDetails = () => {
//   const [loading, setLoading] = useState(false);

// =======
// // import logo from "../asset/NEWLOGO-removebg-preview (1).png";

// const BuyDetails = () => {
//   // const [open, setOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // const handleClick = () => {
//   //   setOpen(!open);
//   // };

// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//   const handleSellClick = () => {
//     setLoading(true);
//     setTimeout(() => {
//   128 changes: 1 addition & 127 deletions128  
// src/component/ChambSters.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,14 +1,7 @@
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { IoMdHeadset } from "react-icons/io";
// <<<<<<< HEAD
// import { TfiGift } from "react-icons/tfi";

// export const ChambSters = () => {
//   return (
//     <div className="relative min-h-screen">
// =======
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import pic from "../asset/CHAMBIT 9.jpg";
// @@ -29,7 +22,6 @@ const sliderSettings = {
// export const ChambSters = () => {
//   return (
//     <div className="relative">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//       {/* Header */}
//       <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center p-2 text-white">
//         <Link to="/subhead">
// @@ -39,123 +31,6 @@ export const ChambSters = () => {
//         <IoMdHeadset size={20} />
//       </div>

// <<<<<<< HEAD
//       <div className="text-white bg-slate-950  mt-20 min-h-screen lg:hidden">
//         <div className=" px-4 p-2">
//           <div className="flex justify-between items-center ">
//             <h1>level</h1>
//             <h1>Price Pool</h1>
//             <h1>C-Vip</h1>
//           </div>
//         </div>
//         <div className=" px-4 p-2">
//           <div className="flex justify-between items-center ">
//             <h1>Cycle 4</h1>
//             <h1>Cycle 3</h1>
//             <select
//               name=""
//               id=""
//               style={{ backgroundColor: "transparent", color: "white" }}
//             >
//               <option value="Menu" disabled>
//                 Menu
//               </option>
//             </select>
//           </div>
//         </div>

//         <div className=" px-4 p-2">
//           <div className="flex  items-center bg-gradient-to-r from-sky-500 via-purple-900 to-pink-500 p-2 gap-5 rounded-xl ">
//             <h1>Countdowns</h1>
//             <div className="flex gap-2">
//               <button
//                 type="button"
//                 className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
//               >
//                 80 days
//               </button>
//               :
//               <button
//                 type="button"
//                 className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
//               >
//                 11
//               </button>
//               :
//               <button
//                 type="button"
//                 className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
//               >
//                 04
//               </button>
//               :
//               <button
//                 type="button"
//                 className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
//               >
//                 50
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="px-2 bg-slate-950 mt-4 min-h-[400px]">
//           <div className="flex hover:bg-blue-400 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-900 rounded-md py-4 mb-2">
//             <div className="flex flex-col   justify-center w-full items-center">
//               <h1 className="py-2 text-xl text-black font-bold">
//                 Overall Prize Pool
//               </h1>
//               <p className="text-white">
//                 6,752.29 <span>USDT</span>
//               </p>
//             </div>
//           </div>

//           <div className="flex hover:bg-blue-400 cursor-pointer bg-slate-800 rounded-md py-4 px-4">
//             <div className="items-center gap-2 p-1 flex w-full ">
//               <div className="w-1/2 py-2 bg-slate-950 text-center rounded-md ">
//                 <h1 className="py-2">c-vip Prize pool</h1>
//                 <p className="text-slate-400">4,933.72 USDT</p>
//               </div>
//               <div className="w-1/2 py-2 bg-slate-950 text-center rounded-md ">
//                 <h1 className="py-2">C points prize</h1>
//                 <p className="text-slate-400">4,653.72 USDT</p>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col cursor-pointer bg-slate-800 rounded-md py-2 mt-1">
//             <h1 className="text-center text-xl mb-1">
//               Price Pool Distributtion
//             </h1>
//             <div className="items-center gap-2 p-2 flex w-full ">
//               <div className="w-full py-2 text-center rounded-md flex justify-between items-center ">
//                 <div>
//                   <h1 className="py-2 text-xl">C-vip</h1>
//                   <p className="text-slate-400 mb-2">4,653.72 USDT</p>
//                 </div>
//                 <div>
//                   <h1 className="py-2 text-xl">C-Points</h1>
//                   <p className="text-slate-400">4,653.72 USDT</p>
//                 </div>
//               </div>
//             </div>
//             <p className="p-2 font-bold">
//               The Overall prize pool will be divided:75% for C-VIP prize
//               pool,and 25% for c points prize pool.
//             </p>
//           </div>

//           <div className="flex hover:bg-blue-400 cursor-pointer bg-slate-800 rounded-md py-2 mt-2 p-2">
//             <div className="flex items-center justify-between  p-1 flex-col">
//               <h1 className="flex items-center text-xl font-bold gap-2">
//                 <TfiGift size={20} />
//                 <span>Activity Description</span>
//               </h1>
//               <p>
//                 10% of the USDT is deducted for each sale of uGas or C-VIP
//                 package,and 25% for C points prize pool.
//               </p>
// =======
//       {/* Slider */}
//       <div className="text-white bg-slate-950  mt-20 min-h-screen lg:hidden">
//         {" "}
// @@ -206,7 +81,6 @@ export const ChambSters = () => {
//               <div className="items-end text-end">
//                 <FaArrowAltCircleRight />
//               </div>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             </div>
//           </div>
//         </div>
//   39 changes: 11 additions & 28 deletions39  
// src/component/GetStarted.tsx
// Original file line number	Diff line number	Diff line change
// @@ -2,9 +2,10 @@ import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { Link } from "react-router-dom";
// import Slider from "react-slick";
// import pic from "../asset/CHAMBIT 9.jpg";
// import pic1 from "../asset/LOGO.png";
// import pic2 from "../asset/CHAMBIT 9.jpg";
// import pic from "../asset/TONCOIN 01.jpg";
// import pic1 from "../asset/TONCOIN 011.jpg";
// import pic2 from "../asset/TONCOIN PLAY GAMES.jpg";
// import pic3 from "../asset/tradin (1).jpg";
// import { MySlider } from "./MySlider";
// import { GainItem } from "./GainItem";
// import { useState } from "react";
// @@ -40,32 +41,7 @@ export const GetStarted = () => {

//   return (
//     <div className="bg-gray-950 flex flex-col min-h-screen text-white overflow-hidden">
// <<<<<<< HEAD
//       <div className="mt-2 px-2 justify-between w-full text-black py-4 flex items-center"></div>
// =======
//       <div className="mt-2 px-2 justify-between w-full text-black py-4 flex items-center">
//         {/* <div className="flex gap-2 justify-center w-full">
//           <Link to="/login" onClick={() => handleLoading("login")}>
//             <button className="px-4 bg-gray-200 text-black py-2 rounded-md">
//               {loading.login ? (
//                 <span className="loader">loading</span>
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </Link>
//           <Link to="/signup" onClick={() => handleLoading("signup")}>
//             <button className="px-4 bg-gray-200 text-black py-2 rounded-md">
//               {loading.signup ? (
//                 <span className="loader">Loadding</span>
//               ) : (
//                 "Signup"
//               )}
//             </button>
//           </Link>
//         </div> */}
//       </div>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//       <div className="mt-10 px-4 w-full">
//         <div className="">
//           {/* Slider for mobile screens */}
// @@ -92,6 +68,13 @@ export const GetStarted = () => {
//                   className="w-full h-auto max-w-xs object-cover"
//                 />
//               </div>
//               <div className="flex justify-center">
//                 <img
//                   src={pic3}
//                   alt="Slide 3"
//                   className="w-full h-auto max-w-xs object-cover"
//                 />
//               </div>
//               {/* Add more slides if needed */}
//             </Slider>
//           </div>
//  2 changes: 1 addition & 1 deletion2  
// src/component/GetStartedHeader.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,6 +1,6 @@
// import { FaCircleUser } from "react-icons/fa6";
// import { IoMdHeadset } from "react-icons/io";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

//   28 changes: 0 additions & 28 deletions28  
// src/component/GreenBtn.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,4 +1,3 @@
// <<<<<<< HEAD
// // import React, { ReactNode } from "react";

// // interface GlobalButtonProps {
// @@ -54,29 +53,6 @@
// import GlobalButton from "./GlobalButton";

// export const GreenBtn = ({ onClick }: { onClick?: () => void }) => {
// =======
// import React, { ReactNode } from "react";

// interface GlobalButtonProps {
//   children: ReactNode;
//   bgColor: string;
//   title: string;
// }

// const GlobalButton: React.FC<GlobalButtonProps> = ({
//   children,
//   bgColor,
//   title,
// }) => {
//   return (
//     <button className={`px-4 py-2 rounded-md ${bgColor}`} title={title}>
//       {children}
//     </button>
//   );
// };

// export const GreenBtn = () => {
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//   return (
//     <div className="flex justify-between items-center mt-4">
//       <div>
// @@ -88,15 +64,11 @@ export const GreenBtn = () => {
//         <p>0.18USD</p>
//       </div>
//       <div>
// <<<<<<< HEAD
//         <GlobalButton
//           bgColor="bg-green-500"
//           title="Increase Value"
//           onClick={onClick} // Pass onClick prop
//         >
// =======
//         <GlobalButton bgColor="bg-green-500" title="Increase Value">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//           +4.945
//         </GlobalButton>
//       </div>
//   32 changes: 0 additions & 32 deletions32  
// src/component/Market.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,4 +1,3 @@
// <<<<<<< HEAD
// // Market.tsx
// import { useState } from "react";
// import { FaSpeakerDeck } from "react-icons/fa6";
// @@ -21,16 +20,6 @@ export const Market = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto relative">
//       <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
// =======
// import { FaSpeakerDeck } from "react-icons/fa6";
// import { Button } from "./Button";
// import { GreenBtn } from "./GreenBtn";

// export const Market = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto relative">
//       <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col  ">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//         <div className="flex justify-between items-center">
//           <h1>Favorites</h1>
//           <h1>Spot</h1>
// @@ -49,10 +38,6 @@ export const Market = () => {
//           <h1>BTC</h1>
//         </div>
//         <hr className="mt-2" />
// <<<<<<< HEAD
// =======

// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//         <div className="flex justify-between items-center mt-6 ">
//           <button className="bg-gray-400 px-2  text-white text-sm gap-2">
//             All
// @@ -68,7 +53,6 @@ export const Market = () => {
//           <h1>24H Change</h1>
//         </div>
//         <div className="min-h-screen mt-4">
// <<<<<<< HEAD
//           {[1, 2, 3].map((item) => (
//             <div key={item}>
//               <div>
// @@ -86,22 +70,6 @@ export const Market = () => {
//           <div className="border-t-transparent border-solid animate-spin border-[#1DD55E] border-4 rounded-full h-12 w-12"></div>
//         </div>
//       )}
// =======
//           <Button />
//           <Button />
//           <GreenBtn />
//           <GreenBtn />
//           <Button />
//           <GreenBtn />
//           <GreenBtn />
//           <GreenBtn />
//           <Button />
//           <Button />
//           <GreenBtn />
//           <GreenBtn />
//         </div>
//       </div>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//     </div>
//   );
// };
//   7 changes: 0 additions & 7 deletions7  
// src/component/PayDetails.tsx
// Original file line number	Diff line number	Diff line change
// @@ -41,17 +41,10 @@ const PayDetails = () => {
//           </div>
//           <div className="flex gap-2">
//             <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
// <<<<<<< HEAD
//               16
//             </div>
//             <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
//               59
// =======
//               14
//             </div>
//             <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
//               53
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             </div>
//           </div>
//         </motion.div>
//   4 changes: 0 additions & 4 deletions4  
// src/component/PaymentCompleted.tsx
// Original file line number	Diff line number	Diff line change
// @@ -97,11 +97,7 @@ const PaymentCompleted = () => {
//               </div>
//             </div>
//           </div>
// <<<<<<< HEAD
//           <Link to="/awaitingbuyresponse" className="">
// =======
//           <Link to="/sucessful" className="">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             <button className="bg-[#1DD55E] w-full py-2 rounded-md mt-4">
//               Payment Completed
//             </button>
//   86 changes: 43 additions & 43 deletions86  
// src/component/PostAdd.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,4 +1,4 @@
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";

// import { useState } from "react";

// @@ -109,48 +109,48 @@ export const PostAdd = () => {
//           </div>
//           <hr />
//           <div>
//            <Link to="/sucessful">
//            <button
//               onClick={handlePostAd}
//               className={`bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center ${
//                 loading ? "opacity-50 cursor-not-allowed" : ""
//               }`}
//               disabled={loading}
//             >
//               {loading ? (
//                 <>
//                   <span>Loading...</span>
//                   <svg
//                     className="w-5 h-5 ml-2 animate-spin"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     ></circle>
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8v8l5-5-5-5v8a8 8 0 01-8 8z"
//                     ></path>
//                   </svg>
//                 </>
//               ) : (
//                 "Post Ad"
//               )}
//             </button>
//            </Link>
//            <Link to="/secondaddvert">
//            <button className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center">
//               Previous
//             </button>
//            </Link>
//             <Link to="/sucessful">
//               <button
//                 onClick={handlePostAd}
//                 className={`bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center ${
//                   loading ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <span>Loading...</span>
//                     <svg
//                       className="w-5 h-5 ml-2 animate-spin"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8v8l5-5-5-5v8a8 8 0 01-8 8z"
//                       ></path>
//                     </svg>
//                   </>
//                 ) : (
//                   "Post Ad"
//                 )}
//               </button>
//             </Link>
//             <Link to="/secondaddvert">
//               <button className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center">
//                 Previous
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//   38 changes: 21 additions & 17 deletions38  
// src/component/SeconAdd.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,6 +1,6 @@
// import { useState } from "react";
// import { IoMdHeadset } from "react-icons/io";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// // import { BeatLoader } from "react-spinners"; // Ensure this package is installed
// @@ -176,23 +176,27 @@ export const SecondAdd = () => {
//           {/* Buttons with Loading Effect */}
//           <div>
//             <Link to="/postadd">
//             <button
//               onClick={handleNextClick}
//               className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center"
//               disabled={isLoadingNext}
//             >
//               {isLoadingNext ? <div className="spinner"></div> : "Next"}
//             </button>
//               <button
//                 onClick={handleNextClick}
//                 className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center"
//                 disabled={isLoadingNext}
//               >
//                 {isLoadingNext ? <div className="spinner"></div> : "Next"}
//               </button>
//             </Link>
//             <Link to="/addvert">
//               <button
//                 onClick={handlePreviousClick}
//                 className="bg-[#1DD55E] w-full rounded-md py-2 text-white flex items-center justify-center"
//                 disabled={isLoadingPrevious}
//               >
//                 {isLoadingPrevious ? (
//                   <div className="spinner"></div>
//                 ) : (
//                   "Previous"
//                 )}
//               </button>
//             </Link>
//            <Link to="/addvert">
//            <button
//               onClick={handlePreviousClick}
//               className="bg-[#1DD55E] w-full rounded-md py-2 text-white flex items-center justify-center"
//               disabled={isLoadingPrevious}
//             >
//               {isLoadingPrevious ? <div className="spinner"></div> : "Previous"}
//             </button>
//            </Link>
//           </div>
//         </div>
//       </div>
//   12 changes: 0 additions & 12 deletions12  
// src/component/SellDetail.tsx
// Original file line number	Diff line number	Diff line change
// @@ -122,7 +122,6 @@ const SellDetail = () => {
//                 </div>
//                 {/* button */}
//                 <div className="mt-4">
// <<<<<<< HEAD
//                   <Link to="/sellinfo">
//                     <button
//                       className={`w-full py-4 rounded-md ${
// @@ -134,17 +133,6 @@ const SellDetail = () => {
//                       {loading ? "Processing..." : "Sell"}
//                     </button>
//                   </Link>
// =======
//                   <button
//                     className={`w-full py-4 rounded-md ${
//                       loading ? "bg-gray-500" : "bg-orange-600"
//                     } text-white`}
//                     onClick={handleSellClick}
//                     disabled={loading}
//                   >
//                     {loading ? "Processing..." : "Sell"}
//                   </button>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//                 </div>
//                 <div className="mt-4">
//                   <p className="text-slate-300">
//   36 changes: 0 additions & 36 deletions36  
// src/component/SellInfo.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,4 +1,3 @@
// <<<<<<< HEAD
// import { useState } from "react";
// import { FaArrowLeft, FaArrowRight, FaCopy, FaMessage } from "react-icons/fa6";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// @@ -17,14 +16,6 @@ const Sellinfo = () => {
//     }, 2000);
//   };

// =======
// import { FaArrowLeft, FaArrowRight, FaCopy, FaMessage } from "react-icons/fa6";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const Sellinfo = () => {
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//   return (
//     <motion.div
//       className="flex flex-col min-h-screen bg-gray-950 text-white"
// @@ -40,11 +31,7 @@ const Sellinfo = () => {
//         transition={{ duration: 0.5 }}
//       >
//         <div className="flex justify-between items-center p-2">
// <<<<<<< HEAD
//           <Link to="/selldetail">
// =======
//           <Link to="/buydetails">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             <FaArrowLeft size={20} />
//           </Link>
//         </div>
// @@ -61,13 +48,8 @@ const Sellinfo = () => {
//           transition={{ duration: 0.3 }}
//         >
//           <div className="text-xl">
// <<<<<<< HEAD
//             <h1>Pending Seller Order</h1>
//             {/* <p>Within:</p> */}
// =======
//             <h1>Complete Your Payment</h1>
//             <p>Within:</p>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//           </div>
//           <div className="flex gap-2">
//             <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
// @@ -109,11 +91,7 @@ const Sellinfo = () => {
//           <div className="flex justify-between">
//             <div className="ml-2">Seller USDT</div>
//             <div className="border py-2 px-2 rounded-s-full border-orange-600 flex items-center justify-center gap-2 text-xl">
// <<<<<<< HEAD
//               <FaMessage size={20} /> Contact
// =======
//               <FaMessage size={20} /> Contact Seller
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             </div>
//           </div>
//           <div className="mt-4 p-2">
// @@ -190,7 +168,6 @@ const Sellinfo = () => {

//         {/* Buttons */}
//         <div className="gap-2 flex py-5 mb-16 justify-center items-center">
// <<<<<<< HEAD
//           <div className="w-full">
//             <Link to="/otpseller">
//               <button
// @@ -213,19 +190,6 @@ const Sellinfo = () => {
//                 ) : (
//                   "Release Now"
//                 )}
// =======
//           <div className=" w-1/2">
//             <Link to="/cancelorder">
//               <button className="w-full bg-black px-13 border py-3 rounded-md">
//                 Cancel Order
//               </button>
//             </Link>
//           </div>
//           <div className=" w-1/2">
//             <Link to="/paycompleted">
//               <button className="w-full bg-[#1DD55E] px-12 py-3 rounded-md">
//                 Pay Now
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//               </button>
//             </Link>
//           </div>
//   10 changes: 1 addition & 9 deletions10  
// src/component/Swap.tsx
// Original file line number	Diff line number	Diff line change
// @@ -5,7 +5,7 @@ import { TbWorldWww } from "react-icons/tb";
// import { GiWantedReward } from "react-icons/gi";

// import { useState } from "react";
// import pic from "../asset/LOGO.png";
// import pic from "../asset/TONCOIN 011.jpg";
// import { CgMoreO } from "react-icons/cg";

// type LoadingState = {
// @@ -70,11 +70,7 @@ const carditem = [
//         className="border border-white rounded-full text-[#1DD55E]"
//       />
//     ),
// <<<<<<< HEAD
//     title: "Instant Loan",
// =======
//     title: "More",
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//     path: "",
//     loadingKey: "more",
//   },
// @@ -160,15 +156,11 @@ export const Swap = () => {
//             ) : (
//               <>
//                 {index == 4 ? (
// <<<<<<< HEAD
//                   <a
//                     href="https://lemonfi.app/"
//                     // target="_blank"
//                     className="text-sm"
//                   >
// =======
//                   <a href="https://.w3.com" target="_blank" className="text-sm">
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//                     {item.icon}
//                   </a>
//                 ) : (
//   16 changes: 2 additions & 14 deletions16  
// src/component/footer/Footer.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,6 @@
// import { SiCoinmarketcap } from "react-icons/si";
// import { FaWallet } from "react-icons/fa";
// import { PiTrademarkFill } from "react-icons/pi";

// import { Link } from "react-router-dom";
// import { FaHome } from "react-icons/fa";

// @@ -16,7 +15,6 @@ const footerItmems = [
//     icons: <SiCoinmarketcap />,
//     path: "/market",
//   },

//   {
//     title: "Trade",
//     icons: <PiTrademarkFill />,
// @@ -36,23 +34,13 @@ export const Footer = () => {
//         {footerItmems.map((item, index) => (
//           <div
//             key={index}
// <<<<<<< HEAD
//             className="text-white hover:text-orange-600 gap-2 flex items-center justify-center "
//             className="text-white hover:text-orange-600 gap-2 flex items-center justify-center"
//           >
//             <Link to={item.path}>
//               <div className="ml-3 hover:text-orange-600 text-[#1DD55E] ">
//                 {item.icons}
//               </div>
//               <div className="ml-3 text-[#1DD55E]">{item.icons}</div>
//               <p className="text-[#1DD55E] hover:text-orange-600">
//                 {item.title}
//               </p>
// =======
//             className="text-white hover:text-orange-500 gap-2 flex items-center justify-center"
//           >
//             <Link to={item.path}>
//               <div className="ml-3 text-[#1DD55E]">{item.icons}</div>
//               <p className="text-[#1DD55E]">{item.title}</p>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//             </Link>
//           </div>
//         ))}
//  2 changes: 1 addition & 1 deletion2  
// src/component/navbar/navbar/Navbar.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,7 @@
// import { FaBell, FaCircleUser } from "react-icons/fa6";
// import { IoMdHeadset } from "react-icons/io";

// import logo from "../../../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../../../asset/nlogo.png";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

//   17 changes: 0 additions & 17 deletions17  
// src/component/navbar/navbar/SubHeaderComp.tsx
// Original file line number	Diff line number	Diff line change
// @@ -4,18 +4,14 @@ import { RowCard } from "./RowCard";
// import { Reward } from "./Reward";
// import { Latcard } from "./Latcard";
// import { SubNav } from "./SubNav";
// <<<<<<< HEAD
// import { Link } from "react-router-dom";
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6

// export const SubHeaderComp = () => {
//   return (
//     <>
//       <SubNav />
//       <div className="flex justify-center items-center bg-black text-white p-4 overflow-y-auto">
//         <div className="w-full max-w-sm min-h-screen h-auto mt-20">
// <<<<<<< HEAD
//           <div className=" w-full py-2 flex justify-around items-center p-2">
//             {/* <button className="bg-slate-600 px-4 text-[#1DD55E] rounded-md text-sm p-2">
//               Non-vip
// @@ -29,19 +25,6 @@ export const SubHeaderComp = () => {
//                 Verified ID
//               </button>
//             </Link>
// =======
//           <div className=" py-2 flex justify-around items-center p-2">
//             <button className="bg-slate-600 px-4 text-[#1DD55E] rounded-md text-sm p-2">
//               Non-vip
//             </button>
//             <button className="bg-slate-600 px-2 rounded-md text-sm p-2 text-[#1DD55E]">
//               Main Account
//             </button>
//             <button className="bg-slate-600 px-4 rounded-md  flex justify-center items-center p-2 text-[#1DD55E] gap-1 text-sm">
//               <RiVerifiedBadgeFill />
//               Verified ID
//             </button>
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//           </div>
//           <SubCard />
//           <RowCard />
//   22 changes: 0 additions & 22 deletions22  
// src/component/navbar/navbar/subCard.tsx
// Original file line number	Diff line number	Diff line change
// @@ -2,32 +2,10 @@

// export const SubCard = () => {
//   return (
// <<<<<<< HEAD
//     <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  py-4 rounded-md p-2 mt-2">
//       <div className="text-center">
//         <h1 className="text-xl">Bonus Balance:</h1>
//         <p className="text-[#1DD55E]">0.0000000</p>
// =======
//     <div className="bg-gray-800 py-4 rounded-md p-2 mt-2">
//       <div className="text-center">
//         <h1 className="text-xl">Bonus Balance:</h1>
//         <p className="text-[#1DD55E]">0.0000000</p>
//         {/* <h1 className="text-sm">Deposite 49,999 USDT to unlock a VIP 1</h1>
//         <div className="flex gap-4 items-center justify-center">
//           <h4>trial and enjoy exclusive perks</h4>
//           <div className="h-10 mt-2 w-10 rounded-full bg-slate-500 flex items-center justify-center text-[#1DD55E] text-sm">
//             0%
//           </div>
//         </div>
//         <div className="flex gap-2">
//           <button className="bg-[#1DD55E] p-2 rounded-md text-black text-sm font-bold ">
//             Deposit Now
//           </button>
//           <p className="flex justify-center items-center gap-2">
//             VIP Benefit <FaArrowRight />
//           </p>
//         </div> */}
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//       </div>
//     </div>
//   );
//   3 changes: 0 additions & 3 deletions3  
// src/index.css
// Original file line number	Diff line number	Diff line change
// @@ -78,13 +78,10 @@ body {
// @keyframes spin {
//   0% { transform: rotate(0deg); }
//   100% { transform: rotate(360deg); }
// <<<<<<< HEAD
// }
// .bg-img{
//   background: url("../src/asset/exc2.jpg");
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
// }
//  2 changes: 1 addition & 1 deletion2  
// src/kyc/Kyc.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,7 +1,7 @@
// import { useState } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { IoMdHeadset } from "react-icons/io";

// export const Kyc = () => {
//  4 changes: 2 additions & 2 deletions4  
// src/kyc/KycSuccessful.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,8 +1,8 @@
// import { FaArrowLeftLong } from "react-icons/fa6";
// import logo from "../../asset/NEWLOGO-removebg-preview (1).png";
// import logo from "../asset/nlogo.png";
// import { IoMdHeadset } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaArrowLeftLong } from "react-icons/fa6";

// export const KycSuccessful = () => {
//   return (
//   9 changes: 5 additions & 4 deletions9  
// src/kyc/Kycsnap.tsx
// Original file line number	Diff line number	Diff line change
// @@ -1,10 +1,11 @@
// import React, { useRef, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import logo from "../../asset/NEWLOGO-removebg-preview (1).png";
// import { IoMdHeadset } from "react-icons/io";
// import log from "../asset/nlogo.png";

// import Webcam from "react-webcam";
// import pic from "../../asset/kyc photo.png";
// import pic from "../asset/kyc photo.png";
// import { IoMdHeadset } from "react-icons/io";

// export const KycSnap = () => {
//   const [cameraOn, setCameraOn] = useState(true);
// @@ -24,7 +25,7 @@ export const KycSnap = () => {
//         <Link to="/kyc">
//           <FaArrowLeft size={20} />
//         </Link>
//         <img src={logo} alt="Logo" className="h-10 object-contain" />
//         <img src={log} alt="Logo" className="h-10 object-contain" />
//         <IoMdHeadset size={20} />
//       </div>

//   116 changes: 23 additions & 93 deletions116  
// src/main.tsx
// Original file line number	Diff line number	Diff line change
// @@ -3,6 +3,9 @@ import ReactDOM from "react-dom/client";
// import { App } from "./App.tsx";
// import "./index.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext.tsx";

// // Pages
// import { Home } from "./page/Home.tsx";
// import { Login } from "./Login/Login.tsx";
// import { Signup } from "./Signup/Signup.tsx";
// @@ -14,16 +17,11 @@ import { OrderBook } from "./component/OrderBook.tsx";
// import { Chart } from "./component/Chart.tsx";
// import { Spot } from "./component/Spot.tsx";
// import { GetStarted } from "./component/GetStarted.tsx";
// import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
// import { Footer } from "./component/footer/Footer.tsx";
// import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
// import { AuthProvider } from "./context/AuthContext.tsx";
// import { DepositeCrypto } from "./component/DepositeCrypto.tsx";
// import { DepositDetailPage } from "./component/DepositDetailPage.tsx";
// import { DepositView } from "./component/DepositView.tsx";
// import { Withdrawal } from "./component/Withdrawal.tsx";
// import { Finalwithdrawal } from "./component/Finalwithdrawal.tsx";

// import { Otp } from "./Signup/otp.tsx";
// import { ForgotPassword } from "./Login/forgot_password_1.tsx";
// import { ForgotPasswordSuccess } from "./Login/forgot_password_2.tsx";
// @@ -33,7 +31,6 @@ import { SecondAdd } from "./component/SeconAdd.tsx";
// import { PostAdd } from "./component/PostAdd.tsx";
// import { Setting } from "./component/Setting .tsx";
// import Successful from "./component/Successful.tsx";
// import { GetStartedHeader } from "./component/GetStartedHeader.tsx";
// import { AssetBal } from "./component/AssetBal.tsx";
// import { ChambSters } from "./component/ChambSters.tsx";
// import { PtopSell } from "./component/PtopSell.tsx";
// @@ -42,16 +39,19 @@ import BuyDetails from "./component/BuyDetails.tsx";
// import PayDetails from "./component/PayDetails.tsx";
// import PaymentCompleted from "./component/PaymentCompleted.tsx";
// import CancelOrder from "./component/CancelOrder.tsx";
// <<<<<<< HEAD
// import Sellinfo from "./component/SellInfo.tsx";
// import SellResponse from "./component/SellResponse.tsx";
// import OtpSell from "./component/OTpSel.tsx";
// import AwaitinBuyResponse from "./component/AwaitinBuyResponse.tsx";
// import { Kyc } from "./kyc/Kyc.tsx";
// import { KycSnap } from "./kyc/Kycsnap.tsx";
// import { KycSuccessful } from "./kyc/KycSuccessful.tsx";
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6

// // Components
// import { Navbar } from "./component/navbar/navbar/Navbar.tsx";
// import { Footer } from "./component/footer/Footer.tsx";
// import { SubHeaderComp } from "./component/navbar/navbar/SubHeaderComp.tsx";
// import { GetStartedHeader } from "./component/GetStartedHeader.tsx";

// const userToken = localStorage.getItem("userToken");

// @@ -77,33 +77,17 @@ const router = createBrowserRouter([
//         ),
//       },
//       { path: "/login", element: <Login /> },
//       {
//         path: "/otp",
//         element: <Otp />,
//       },
//       {
//         path: "/forgot-password",
//         element: <ForgotPassword />,
//       },
//       {
//         path: "/forgot-password-success",
//         element: <ForgotPasswordSuccess />,
//       },
//       {
//         path: "/new-password",
//         element: <NewPassword />,
//       },
//       { path: "/otp", element: <Otp /> },
//       { path: "/forgot-password", element: <ForgotPassword /> },
//       { path: "/forgot-password-success", element: <ForgotPasswordSuccess /> },
//       { path: "/new-password", element: <NewPassword /> },
//       { path: "/subHead", element: <SubHeaderComp /> },
//       {
//         path: "/signup",
//         element: (
//           <>
//             <Signup />
// <<<<<<< HEAD
//             {/* <Footer /> */}
// =======
//             <Footer />
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//           </>
//         ),
//       },
// @@ -171,30 +155,24 @@ const router = createBrowserRouter([
//         path: "/selldetail",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <SellDetail />
//             <Footer />
//           </>
//         ),
//       },
//       {
// <<<<<<< HEAD
//         path: "/awaitresponse",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <SellResponse />
//             <Footer />
//           </>
//         ),
//       },
//       {
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//         path: "/buydetails",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <BuyDetails />
//             <Footer />
//           </>
// @@ -204,80 +182,44 @@ const router = createBrowserRouter([
//         path: "/payment",
//         element: (
//           <>
//             {/* <Navbar /> */}
//             <PayDetails />
//             <Footer />
//           </>
//         ),
//       },
//       {
//         path: "/paycompleted",
//         element: (
//           <>
//             <PaymentCompleted />
//           </>
//         ),
//         element: <PaymentCompleted />,
//       },
//       {
//         path: "/cancelorder",
//         element: (
//           <>
//             <CancelOrder />
//           </>
//         ),
//         element: <CancelOrder />,
//       },
//       {
// <<<<<<< HEAD
//         path: "/sellinfo",
//         element: (
//           <>
//             <Sellinfo />
//           </>
//         ),
//         element: <Sellinfo />,
//       },
//       {
//         path: "/otpseller",
//         element: (
//           <>
//             <OtpSell />
//           </>
//         ),
//         element: <OtpSell />,
//       },
//       {
//         path: "/kyc",
//         element: (
//           <>
//             <Kyc />
//           </>
//         ),
//         element: <Kyc />,
//       },
//       {
//         path: "/kycsnap",
//         element: (
//           <>
//             <KycSnap />
//           </>
//         ),
//         element: <KycSnap />,
//       },
//       {
//         path: "/kycsucces",
//         element: (
//           <>
//             <KycSuccessful />
//           </>
//         ),
//         element: <KycSuccessful />,
//       },
//       {
//         path: "/awaitingbuyresponse",
//         element: (
//           <>
//             <AwaitinBuyResponse />
//           </>
//         ),
//         element: <AwaitinBuyResponse />,
//       },
//       {
// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//         path: "/spot",
//         element: (
//           <>
// @@ -381,16 +323,8 @@ const router = createBrowserRouter([
//       },
//       {
//         path: "/sucessful",
//         element: (
//           <>
//             <Successful />
//           </>
//         ),
//         element: <Successful />,
//       },
// <<<<<<< HEAD

// =======
// >>>>>>> 108695aaf5e9fc1a7d0541b441845919c9f99db6
//       {
//         path: "/assetbal",
//         element: (
// @@ -402,11 +336,7 @@ const router = createBrowserRouter([
//       },
//       {
//         path: "/setting",
//         element: (
//           <>
//             <Setting />
//           </>
//         ),
//         element: <Setting />,
//       },
//       {
//         path: "/chart",
// 0 comments on commit 7c4606e
// @TheHood12345
// Comment
 
// Leave a comment
 
// Loading
// Footer
// © 2024 GitHub, Inc.
// Footer navigation
// Terms
// Privacy
// Security
// Status
// Docs
// Contact
// Manage cookies
// Do not share my personal information
// kyc getstared image added · Umorenism/chambitExchange@7c4606e 