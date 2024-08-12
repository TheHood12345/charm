import { useState } from "react";
import { IoMdHeadset } from "react-icons/io";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { FaArrowLeftLong } from "react-icons/fa6";
// import { BeatLoader } from "react-spinners"; // Ensure this package is installed

export const SecondAdd = () => {
  // State for number inputs
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [paymentTime, setPaymentTime] = useState(15);

  // State for loading
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(false);

  // Handlers for incrementing/decrementing
  const incrementMinValue = () => setMinValue(minValue + 1);
  const decrementMinValue = () => setMinValue(minValue - 1);
  const incrementMaxValue = () => setMaxValue(maxValue + 1);
  const decrementMaxValue = () => setMaxValue(maxValue - 1);
  const incrementPaymentTime = () => setPaymentTime(paymentTime + 1);
  const decrementPaymentTime = () => setPaymentTime(paymentTime - 1);

  // Simulate a loading action
  const handleNextClick = async () => {
    setIsLoadingNext(true);
    // Simulate an async action (e.g., API request)
    setTimeout(() => {
      setIsLoadingNext(false);
      // Handle action completion
    }, 2000); // 2 seconds delay
  };

  const handlePreviousClick = async () => {
    setIsLoadingPrevious(true);
    // Simulate an async action (e.g., API request)
    setTimeout(() => {
      setIsLoadingPrevious(false);
      // Handle action completion
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <FaArrowLeftLong size={20} />
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <IoMdHeadset size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pt-20">
        <div className="text-center">
          <h1 className="text-xl font-bold">Post an Advert</h1>
          <p className="text-sm text-gray-400">Set Type and Price (2/3)</p>

          {/* Progress Indicator */}
          <div className="flex py-3 mt-4 justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center"></div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center">
              2
            </div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center"></div>
          </div>
        </div>
        <hr />

        {/* Form Section */}
        <div className="bg-white text-black rounded-md py-4 mt-5 p-2 min-h-[500px]">
          {/* Amount to Trade */}
          <div className="flex border rounded-md border-[#1DD55E] w-full py-1 p-1 gap-2">
            <input
              type="text"
              placeholder="Input Amount to Trade"
              className="flex-1 outline-none text-sm border-none placeholder:p-1"
            />
            <h1>NGN</h1>
          </div>

          {/* Price Information */}
          <div className="flex justify-between">
            <h1></h1>
            <h1 className="text-sm">NAN USD</h1>
          </div>

          {/* Order Limit */}
          <h1 className="text-sm">Order Limit</h1>
          <div className="flex justify-between items-center mt-2">
            <h1>Min</h1>
            <h1>Max</h1>
          </div>

          {/* Min and Max Inputs with Increment/Decrement Buttons */}
          <div className="flex gap-4">
            <div className="w-1/2 flex border border-blue-700 rounded-md p-1 items-center">
              <button
                onClick={decrementMinValue}
                className="bg-gray-300 px-2 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                value={minValue}
                className="w-full ml-2 outline-none"
                readOnly
              />
              <button
                onClick={incrementMinValue}
                className="bg-gray-300 px-2 py-1 rounded-r-md"
              >
                +
              </button>
              <span>NGN</span>
            </div>
            <div className="w-1/2 flex border border-blue-700 rounded-md p-1 items-center">
              <button
                onClick={decrementMaxValue}
                className="bg-gray-300 px-2 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                value={maxValue}
                className="w-full ml-2 outline-none"
                readOnly
              />
              <button
                onClick={incrementMaxValue}
                className="bg-gray-300 px-2 py-1 rounded-r-md"
              >
                +
              </button>
              <span>NGN</span>
            </div>
          </div>

          {/* Additional Information */}
          <div className="flex justify-between items-center">
            <h1 className="text-sm">NAN USDT</h1>
            <h1 className="text-sm">NAN USDT</h1>
          </div>

          {/* Payment Time Limit */}
          <h1 className="mt-2">Payment Time Limit</h1>
          <div className="w-full h-full p-1 mt-4 py-1 rounded-md border border-blue-700 flex items-center">
            <button
              onClick={decrementPaymentTime}
              className="bg-gray-300 px-2 py-1 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              value={paymentTime}
              placeholder="15 minutes"
              className="w-full outline-none border-none"
              readOnly
            />
            <button
              onClick={incrementPaymentTime}
              className="bg-gray-300 px-2 py-1 rounded-r-md"
            >
              +
            </button>
          </div>

          {/* Buttons with Loading Effect */}
          <div>
            <button
              onClick={handleNextClick}
              className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center"
              disabled={isLoadingNext}
            >
              {isLoadingNext ? <div className="spinner"></div> : "Next"}
            </button>
            <button
              onClick={handlePreviousClick}
              className="bg-[#1DD55E] w-full rounded-md py-2 text-white flex items-center justify-center"
              disabled={isLoadingPrevious}
            >
              {isLoadingPrevious ? <div className="spinner"></div> : "Previous"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
