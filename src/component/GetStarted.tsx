// // import { Link } from "react-router-dom";
// // import pic from "../asset/crypp.jpeg";
// // export const GetStarted = () => {
// //   return (
// //     <div className="bg-gray-950 flex flex-col min-h-screen  text-white overflow-hidden">
// //       <div className="mt-24 px-2 justify-between w-full bg-[#1DD55E] text-black py-4">
// //         <div className="flex justify-between">
// //           <Link to="/login">
// //             <button className="px-4 bg-black text-white py-2 rounded-md">
// //               Login
// //             </button>
// //           </Link>
// //           <Link to="/signup">
// //             <button className="px-4 bg-black text-white py-2 rounded-md">
// //               Signup
// //             </button>
// //           </Link>
// //         </div>
// //       </div>
// //       <div className="mt-24 px-4 w-full">
// //         <div className="py-4 bg-slate-400">
// //           <img src={pic} alt="" />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import { Link } from "react-router-dom";
// // import Slider from "react-slick";
// import pic from "../asset/crypp.jpeg";
// import pic1 from "../asset/crypp.jpeg";
// import pic2 from "../asset/crypp.jpeg";
// import { MySlider } from "./MySlider";
// import { GainItem } from "./GainItem";

// // Settings for the slider
// // const sliderSettings = {
// //   dots: true,
// //   infinite: true,
// //   speed: 500,
// //   slidesToShow: 1,
// //   slidesToScroll: 1,
// // };

// export const GetStarted = () => {
//   return (
//     <div className="bg-gray-950 flex flex-col min-h-screen text-white overflow-hidden">
//       <div className="mt-24 px-2 justify-between w-full  text-black py-4 flex items-center ">
//         <div className="flex gap-2 justify-center w-full">
//           <Link to="/login">
//             <button className="px-4 bg-gray-200 text-black py-2 rounded-md ">
//               Login
//             </button>
//           </Link>
//           <Link to="/signup">
//             <button className="px-4 bg-gray-200 text-black py-2 rounded-md">
//               Signup
//             </button>
//           </Link>
//         </div>
//       </div>
//       <div className="mt-24 px-4 w-full">
//         <div className="py-4 bg-slate-200">
//           {/* Slider for mobile screens */}
//           <div className="flex gap-2 p-2 md:hidden">
//             {/* <Slider {...sliderSettings}> */}
//             <div className="flex justify-center">
//               <img
//                 src={pic}
//                 alt="Slide 1"
//                 className="w-full h-auto max-w-xs object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={pic1}
//                 alt="Slide 1"
//                 className="w-full h-auto max-w-sm object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <img
//                 src={pic2}
//                 alt="Slide 1"
//                 className="w-full h-auto max-w-xs object-cover"
//               />
//             </div>
//             {/* Add more slides if needed */}
//             {/* </Slider> */}
//           </div>
//         </div>
//         <div className="mt-10 text-center">
//           {/* <h1 className="text-2xl">Annocement</h1> */}
//           <MySlider />
//         </div>
//         <hr />
//         <div className="mt-4">
//           <GainItem />
//         </div>
//       </div>
//     </div>
//   );
// };

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import pic from "../asset/crypp.jpeg";
import pic1 from "../asset/crypp.jpeg";
import pic2 from "../asset/crypp.jpeg";
import { MySlider } from "./MySlider";
import { GainItem } from "./GainItem";

// Settings for the slider
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust the speed as needed
};

export const GetStarted = () => {
  return (
    <div className="bg-gray-950 flex flex-col min-h-screen text-white overflow-hidden">
      <div className="mt-24 px-2 justify-between w-full text-black py-4 flex items-center">
        <div className="flex gap-2 justify-center w-full">
          <Link to="/login">
            <button className="px-4 bg-gray-200 text-black py-2 rounded-md">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 bg-gray-200 text-black py-2 rounded-md">
              Signup
            </button>
          </Link>
        </div>
      </div>
      <div className="mt-24 px-4 w-full">
        <div className="">
          {/* Slider for mobile screens */}
          <div className="md:hidden p-4">
            <Slider {...sliderSettings}>
              <div className="flex justify-center ">
                <img
                  src={pic}
                  alt="Slide 1"
                  className="w-full h-auto max-w-xs object-cover"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={pic1}
                  alt="Slide 2"
                  className="w-full h-auto max-w-sm object-cover"
                />
              </div>
              <div className="flex justify-center">
                <img
                  src={pic2}
                  alt="Slide 3"
                  className="w-full h-auto max-w-xs object-cover"
                />
              </div>
              {/* Add more slides if needed */}
            </Slider>
          </div>
        </div>
        <div className="mt-10 text-center">
          <MySlider />
        </div>
        <hr />
        <div className="mt-4">
          <GainItem />
        </div>
      </div>
    </div>
  );
};
