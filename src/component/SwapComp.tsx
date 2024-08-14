import { FaWallet } from "react-icons/fa6";
import TypingEffect from "react-typing-effect";

import { RiLoader4Fill, RiEqualFill } from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { CgSwap } from "react-icons/cg";
import { useState } from "react";

export const SwapComp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleContinue = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading for 2 seconds
  };

  return (
    <div className="min-h-screen bg-slate-950 py-16 text-white relative">
      <div className="text-center py-2">
        <h1 className="text-md mt-4 text-[#1DD55E]">
          <TypingEffect
            text={["SWAP your coin"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
          />
        </h1>
      </div>
      <hr className="border-gray-600" />
      <div className="mt-10 px-4">
        <div className="bg-gray-700 px-2 py-4 text-white rounded-lg relative ">
          <div className="flex justify-between items-center gap-2 mb-4">
            <select
              name=""
              id=""
              className="py-2"
              style={{
                backgroundColor: "transparent",
                fontSize: 15,
                width: "80%",
                border: "none",
                color: "",
              }}
            >
              <option selected disabled>
                From BNB Smart Chain
              </option>
              <option value="Bnb">From BNB Smart Chain</option>
              <option selected disabled>
                From BNB Smart Chain
              </option>
            </select>
            <div className="flex items-center gap-1">
              <FaWallet size={14} className="cursor-pointer" />
              <span className="text-[#1DD55E]">0</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <p className="text-center rounded-full h-8 w-8 bg-[#1DD55E] flex items-center justify-center">
            <LuArrowDownUp size={16} className="text-white" />
          </p>
        </div>
        <div className="bg-gray-700 px-2 py-4 text-white rounded-lg relative mb-4">
          <div className="flex justify-between  gap-2 mb-4">
            <select
              name=""
              id=""
              className="py-2"
              style={{
                backgroundColor: "transparent",
                fontSize: 15,
                width: "70%",
                border: "1px",
                color: "",
              }}
            >
              <option selected disabled>
                To BNB Smart Chain
              </option>
              <option value="Bnb">To BNB Smart Chain</option>
              <option selected disabled>
                From BNB Smart Chain
              </option>
            </select>
            <div className="flex items-center gap-1">
              <FaWallet size={14} className="cursor-pointer" />
              <span className="text-[#1DD55E]">0</span>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-700 text-white rounded-lg mb-4">
          <div className="flex justify-between items-center text-sm">
            <RiLoader4Fill className="mr-2" />
            1BNB <RiEqualFill className="mx-4" />
            7.227.055.535427 DONS
            <CgSwap size={25} className="ml-4" />
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-2 rounded-xl text-white bg-[#1DD55E] text-xl transition-transform transform hover:scale-105"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="animate-spin mr-2">
                <RiLoader4Fill />
              </span>
              Loading...
            </div>
          ) : (
            "Continue"
          )}
        </button>

        <div className="text-white mt-6 px-4">
          <div className="flex justify-between">
            <div className="w-1/2 py-6 p-2">
              <ul>
                <li>Provider</li>
                <li>Provider fee</li>
                <li>Slippage tolerance</li>
              </ul>
            </div>
            <div className="w-1/2 py-6 p-2 text-right">
              <ul>
                <li>0x</li>
                <li>47356 DONS (=$3.59)</li>
                <li>7.0%</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
