import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { IoMdHeadset } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import pic from "../asset/CHAMBIT 9.jpg";
import Slider from "react-slick";
import { FaArrowAltCircleRight } from "react-icons/fa";

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000, // Adjust the speed as needed
};

export const ChambSters = () => {
  return (
    <div className="relative">
      {/* Header */}
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center p-2 text-white">
        <Link to="/subhead">
          <FaArrowLeftLong size={20} />
        </Link>
        <img src={logo} alt="Logo" className="h-10 object-contain" />
        <IoMdHeadset size={20} />
      </div>

      {/* Slider */}
      <div className="text-white bg-slate-950  mt-20 min-h-screen lg:hidden">
        {" "}
        {/* Show slider only on mobile screens */}
        <Slider {...sliderSettings}>
          <div className="flex justify-center">
            <img
              src={pic}
              alt="Slide 1"
              className="w-full h-auto max-w-xl object-cover"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={pic}
              alt="Slide 2"
              className="w-full h-auto max-w-xl object-cover"
            />
          </div>
          <div className="flex justify-center">
            <img
              src={pic}
              alt="Slide 3"
              className="w-full h-auto max-w-xl object-cover"
            />
          </div>
        </Slider>
        <div className="px-2 bg-slate-950 mt-4 min-h-[400px]">
          <div className="flex hover:bg-blue-400 cursor-pointer bg-slate-800 rounded-md py-4 mb-2">
            <div className="flex items-center gap-2 p-1">
              <h1 className="">
                Complete a minimum of 10 transaction on chambit
              </h1>
              <FaArrowAltCircleRight />
            </div>
          </div>
          <div className="flex hover:bg-blue-400 cursor-pointer bg-slate-800 rounded-md py-4">
            <div className="flex items-center gap-2 p-1">
              <h1 className="">
                Invite a minimum of 3 friend and family to join chambit within
              </h1>
              <FaArrowAltCircleRight />
            </div>
          </div>
          <div className="flex hover:bg-blue-400 cursor-pointer bg-slate-800 rounded-md py-4 mt-2">
            <div className="flex items-center justify-between gap-[183px] p-1">
              <h1 className="">Get created every 30days</h1>
              <div className="items-end text-end">
                <FaArrowAltCircleRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
