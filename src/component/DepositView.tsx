import { useState, useEffect } from "react";
import { GiBattery100 } from "react-icons/gi";
import { FaArrowLeft, FaRegCirclePlay } from "react-icons/fa6";
//import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import CardQRC from "./CardQRC";
import { Link, useLocation } from "react-router-dom";
import { Popupmodel } from "./Popupmodel"; // Import the Popupmodel component

import axios from "axios";

export const DepositView = () => {
  const [isCoinsOpen, setIsCoinsOpen] = useState(false);
  const [isNetworkOpen, setIsNetworkOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const location = useLocation();
  let [address, setAddress] = useState("");

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      axios
        .post(
          "https://chambsexchange.onrender.com/api/trans/receive",
          {
            asset: `${location.state.coin}`,
            blockchain: `${location.state.network}`,
          },
          {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          }
        )
        .then((response) => {
          console.log("Deposit API RESPONSE 12:", response.data);
          setAddress(response.data.Addres);
        })
        .catch((error) => {
          console.error("Error making deposit:", error);
        });
    } else {
      console.warn("No token found");
    }
  }, []);

  return (
    <div className="relative flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <Popupmodel />
        </div>
      )}

      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0 shadow-md">
          <div className="flex items-center justify-between p-2">
            <h1 className="font-bold text-2xl flex items-center gap-1 justify-center">
              <Link to="/asset">
                <FaArrowLeft size={20} className="text-sm" />
              </Link>
              Deposit
            </h1>
            <div className="flex gap-4 text-gray-300">
              <GiBattery100 />
              <FaRegCirclePlay />
            </div>
          </div>
        </div>
        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-14">
          <div className="p-2 mt-6 bg-slate-700 py-5 rounded-md shadow-lg">
            <h1 className="text-xl py-2 font-semibold">Coins</h1>
            <div
              className="bg-slate-900 py-2 rounded-md p-2 mb-3 flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors"
              onClick={() => setIsCoinsOpen(!isCoinsOpen)}
            >
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex justify-center items-center text-center text-sm text-white">
                  T
                </div>
                <p className="text-gray-200">{location.state.coin}</p>
              </div>
              {/* <IoMdArrowDropdown
                className={`transition-transform ${
                  isCoinsOpen ? "rotate-180" : ""
                }`}
              /> */}
            </div>
            {/* {isCoinsOpen && (
              <div className="bg-slate-900 p-2 rounded-md shadow-md mt-2">
                <p className="text-gray-300">Option 1</p>
                <p className="text-gray-300">Option 2</p>
                <p className="text-gray-300">Option 3</p>
              </div>
            )} */}
            <h1 className="text-xl py-2 font-semibold">Network</h1>
            <div
              className="bg-slate-900 py-2 rounded-md p-2 flex justify-between items-center cursor-pointer hover:bg-slate-800 transition-colors"
              onClick={() => setIsNetworkOpen(!isNetworkOpen)}
            >
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-orange-500 flex justify-center items-center text-center text-sm text-white">
                  T
                </div>
                <p className="text-gray-200">{location.state.network}</p>
              </div>
              {/* <IoMdArrowDropdown
                className={`transition-transform ${
                  isNetworkOpen ? "rotate-180" : ""
                }`}
              /> */}
            </div>
            {/* {isNetworkOpen && (
              <div className="bg-slate-900 p-2 rounded-md shadow-md mt-2">
                <p className="text-gray-300">Option 1</p>
                <p className="text-gray-300">Option 2</p>
                <p className="text-gray-300">Option 3</p>
              </div>
            )} */}
          </div>

          <CardQRC address={address} />
          <hr className="border-gray-700" />
          <div className="bg-gray-950 py-4 p-2 rounded-md shadow-lg">
            <div className="flex gap-2">
              <div className="w-1/2 text-slate-300 text-sm">
                <h1 className="font-semibold">Route Deposit To</h1>
                <p>Deposit Approval</p>
                <p>Withdrawal Unlocked</p>
                <p>Contract Address:</p>
              </div>
              <div className="w-1/2 text-sm font-bold">
                <h2 className="flex mr-2 items-center justify-center">
                  Funding Account <IoIosArrowForward />
                </h2>
                <h2 className="mr-2">15 confirmations</h2>
                <h2>15 confirmations</h2>
                <h2 className="flex items-center justify-center">
                  Ending with 31979
                  <IoIosArrowForward />
                </h2>
              </div>
            </div>

            <div className="mt-5 flex gap-2 mb-3">
              <button className="border border-gray-600 w-full rounded-md py-2 font-bold hover:bg-gray-700 transition-colors">
                Save Pic
              </button>
              <button
                className="bg-[#fed503] w-full rounded-md py-2 text-black hover:bg-orange-400 transition-colors"
                onClick={() => {
                  navigator.clipboard.writeText(address);
                  setIsModalOpen(true);
                }} // Open the modal
              >
                Copy Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
