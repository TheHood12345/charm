// import { useState } from "react";
// import { FaArrowLeftLong } from "react-icons/fa6";
// import { Link, useNavigate } from "react-router-dom";
// import logo from "../asset/nlogo.png";
// import { IoMdHeadset } from "react-icons/io";

// export const Kyc = () => {
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (event: React.FormEvent) => {
//     event.preventDefault();
//     setLoading(true);
//     navigate("/kycsnap");
//     setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//   };

//   return (
//     <div className="relative min-h-screen bg-gray-900">
//       {/* Header */}
//       <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center px-4 text-white">
//         <Link to="/subhead">
//           <FaArrowLeftLong size={20} />
//         </Link>
//         <img src={logo} alt="Logo" className="h-10 object-contain" />
//         <IoMdHeadset size={20} />
//       </div>

//       {/* Main Content */}
//       <div className="pt-16 px-4 pb-6">
//         <h1 className="text-2xl font-bold text-white mb-4">
//           KYC Authentication
//         </h1>
//         <form
//           className="bg-gray-800 p-4 rounded-lg shadow-lg"
//           onSubmit={handleSubmit}
//         >
//           <div className="mb-4">
//             <label
//               htmlFor="fullName"
//               className="block text-sm font-medium text-gray-300"
//             >
//               Full Name
//             </label>
//             <input
//               type="text"
//               id="fullName"
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your full name"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="dateOfBirth"
//               className="block text-sm font-medium text-gray-300"
//             >
//               Date of Birth
//             </label>
//             <input
//               type="date"
//               id="dateOfBirth"
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="address"
//               className="block text-sm font-medium text-gray-300"
//             >
//               Address
//             </label>
//             <textarea
//               id="address"
//               rows={3}
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your address"
//               required
//             />
//           </div>

//           <div className="mb-4">
//             <label
//               htmlFor="idNumber"
//               className="block text-sm font-medium text-gray-300"
//             >
//               ID Number
//             </label>
//             <input
//               type="text"
//               id="idNumber"
//               className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//               placeholder="Enter your ID number"
//               required
//             />
//           </div>

//           <div className="mb-6">
//             <label
//               htmlFor="uploadId"
//               className="block text-sm font-medium text-gray-300"
//             >
//               Upload ID
//             </label>
//             <input
//               type="file"
//               id="uploadId"
//               className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border file:border-gray-600 file:bg-gray-700 file:text-white file:cursor-pointer"
//               accept="image/*"
//               required
//             />
//           </div>
//           <p className="text-sm text-white mb-4">
//             Please ensure you upload your valid doc not more than 3mb
//           </p>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             disabled={loading}
//           >
//             {loading ? (
//               <div className="flex items-center justify-center">
//                 <svg
//                   className="animate-spin h-5 w-5 text-white"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle
//                     className="opacity-25"
//                     cx="12"
//                     cy="12"
//                     r="10"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                   ></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0zm2 0a6 6 0 1 0 12 0 6 6 0 0 0-12 0z"
//                   ></path>
//                 </svg>
//                 <span className="ml-2 ">Loading...</span>
//               </div>
//             ) : (
//               "Next"
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };