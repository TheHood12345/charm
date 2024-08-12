import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoMdHeadset } from "react-icons/io";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";

export const Advert = () => {
  const [assetOpen, setAssetOpen] = useState(false);
  const [fiatOpen, setFiatOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(100.0);
  const [conditionMet, setConditionMet] = useState(false); // For condition
  const navigate = useNavigate();

  const handleNextClick = () => {
    setLoading(true);
    // Simulate an API call or any other async operation
    setTimeout(() => {
      setLoading(false);
      if (conditionMet) {
        navigate("/secondaddvert"); // Route to the new page
      }
    }, 2000);
  };

  const handleDecrement = () => {
    setPercentage((prev) => Math.max(prev - 1, 0)); // Prevent going below 0
    setConditionMet((prev) => prev || percentage <= 0); // Update condition based on percentage
  };

  const handleIncrement = () => {
    setPercentage((prev) => Math.min(prev + 1, 100)); // Prevent going above 100
    setConditionMet((prev) => prev || percentage >= 100); // Update condition based on percentage
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <FaArrowLeftLong size={20} />
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <IoMdHeadset size={20} />
        </div>
      </div>
      <div className="flex-1 p-4 pt-20">
        <div className="text-center">
          <h1 className="text-xl font-bold">Post an Advert</h1>
          <p className="text-sm text-gray-400">Set Type and Price (1/3)</p>

          <div className="flex py-3 mt-4 justify-center items-center">
            <div
              className={`h-5 w-5 rounded-full ${
                conditionMet ? "bg-green-700" : "bg-blue-700"
              } text-white flex justify-center items-center transition-all duration-300`}
            >
              1
            </div>
            <div className="h-1 w-[30%] bg-blue-700"></div>
            <div className="h-5 w-5 rounded-full bg-gray-700 text-white flex justify-center items-center">
              2
            </div>
            <div className="h-1 w-[30%] bg-gray-700"></div>
            <div className="h-5 w-5 rounded-full bg-gray-700 text-white flex justify-center items-center">
              3
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-gray-800 text-white rounded-md py-4 px-2 mt-5">
          <div className="bg-blue-700 p-2 flex justify-between items-center rounded-md">
            <button className="bg-white font-bold text-sm px-5 rounded-md">
              BUY
            </button>
            <p className="font-bold text-sm">SELL</p>
          </div>
          <div className="text-slate-500 flex justify-between items-center p-2 mt-2">
            <h1>Asset</h1>
            <h1>Fiat</h1>
          </div>
          <div className="flex justify-between items-center p-2">
            <button
              className="bg-[#535654] flex items-center justify-center gap-2 font-bold text-sm px-4 py-2 rounded-md relative"
              onClick={() => setAssetOpen(!assetOpen)}
            >
              USDT <MdArrowDropDown />
              {assetOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white text-black rounded-md shadow-lg">
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    USDT
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    BTC
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    ETH
                  </button>
                </div>
              )}
            </button>
            <button
              className="bg-[#535654] flex items-center justify-center gap-2 font-bold text-sm px-4 py-2 rounded-md relative"
              onClick={() => setFiatOpen(!fiatOpen)}
            >
              NGN <MdArrowDropDown />
              {fiatOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white text-black rounded-md shadow-lg">
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    NGN
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    USD
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    EUR
                  </button>
                </div>
              )}
            </button>
          </div>
          <hr />
          <div className="mt-8">
            <h1 className="text-lg font-bold">Set Your Trading Price</h1>
            <div className="bg-blue-700 p-2 flex justify-between items-center rounded-md mt-2">
              <button className="bg-white px-10 py-1 rounded-md">
                Floating
              </button>
              <p className="text-white">Fixed</p>
            </div>
            <h1 className="mt-2">Tap to Set Your Trading Price Below</h1>
            <div className="bg-blue-700 p-2 mt-2 w-full max-w-md mx-auto rounded-md flex justify-between items-center text-white">
              <button className="text-2xl px-2 py-1" onClick={handleDecrement}>
                -
              </button>
              <p className="text-xl">{percentage}%</p>
              <button className="text-2xl px-2 py-1" onClick={handleIncrement}>
                +
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-sm">Your Price</h1>
              <h1 className="text-sm">Highest Order price</h1>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-sm">NGNNaN</h1>
              <h1 className="text-sm">NGN0</h1>
            </div>
            <button
              className={`bg-blue-700 w-full mt-4 rounded-md py-2 text-white ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={handleNextClick}
              disabled={loading}
            >
              {loading ? "Loading..." : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
