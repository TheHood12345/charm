// import React, { useRef, useState } from "react";
// import { FaArrowLeft } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import log from "../asset/nlogo.png";

// import Webcam from "react-webcam";
// import pic from "../asset/kyc photo.png";
// import { IoMdHeadset } from "react-icons/io";

// export const KycSnap = () => {
//   const [cameraOn, setCameraOn] = useState(true);
//   const [photo, setPhoto] = useState<string | null>(null);
//   const webcamRef = useRef<Webcam>(null);

//   const capture = React.useCallback(() => {
//     const imageSrc = webcamRef.current?.getScreenshot();
//     setPhoto(imageSrc || null);
//     setCameraOn(false);
//   }, [webcamRef]);

//   return (
//     <div className="relative min-h-screen bg-gray-900">
//       {/* Header */}
//       <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center px-4 text-white">
//         <Link to="/kyc">
//           <FaArrowLeft size={20} />
//         </Link>
//         <img src={log} alt="Logo" className="h-10 object-contain" />
//         <IoMdHeadset size={20} />
//       </div>

//       {/* Main Content */}
//       <div className="pt-20 px-4 pb-6">
//         <div className="mb-4">
//           <img
//             src={pic}
//             alt="KYC Illustration"
//             className="w-full object-contain"
//           />
//         </div>

//         {cameraOn ? (
//           <div className="mb-4">
//             <Webcam
//               audio={false}
//               ref={webcamRef}
//               screenshotFormat="image/jpeg"
//               className="w-full object-contain rounded-lg border border-gray-600"
//             />
//             <button
//               onClick={capture}
//               className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Capture Photo
//             </button>
//           </div>
//         ) : (
//           <div className="mb-4">
//             {photo && (
//               <img
//                 src={photo}
//                 alt="Captured"
//                 className="w-full object-contain rounded-lg border border-gray-600"
//               />
//             )}
//             <button
//               onClick={() => setCameraOn(true)}
//               className="mt-4 w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             >
//               Retake Photo
//             </button>
//           </div>
//         )}

//         <Link to="/kycsnap">
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Next
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };