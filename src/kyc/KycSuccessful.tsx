// import logo from "../asset/nlogo.png";
// import { IoMdHeadset } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { FaArrowLeftLong } from "react-icons/fa6";

// export const KycSuccessful = () => {
//   return (
//     <div className="relative min-h-screen bg-gray-900">
//       {/* Header */}
//       <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center px-4 text-white">
//         <Link to="/home">
//           <FaArrowLeftLong size={20} />
//         </Link>
//         <img src={logo} alt="Logo" className="h-10 object-contain" />
//         <IoMdHeadset size={20} />
//       </div>

//       {/* Main Content */}
//       <div className="pt-36 px-4 pb-6 flex items-center justify-center h-full">
//         <motion.div
//           className="bg-green-500 p-6 rounded-lg shadow-lg text-center w-full max-w-sm"
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-2xl font-bold text-white mb-4">
//             KYC Successful!
//           </h1>
//           <p className="text-white mb-4">
//             Your KYC authentication was completed successfully. You can now
//             access all features of the app.
//           </p>
//           <Link to="/home">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
//               Go to Home
//             </button>
//           </Link>
//         </motion.div>
//       </div>
//     </div>
//   );
// };