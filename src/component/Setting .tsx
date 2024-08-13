import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import pic from "../asset/images.png";
import UserForm from "./UserForm";
import HistoryCard from "./HistoryCard";
import HelpCardPage from "./HelpCardPage";
import { Link } from "react-router-dom";

export const Setting = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-white overflow-hidden ">
      <div className="bg-[#1DD55E] text-white w-full h-auto py-4 p-2">
        <div className="flex justify-between">
          <Link to="/subhead">
            <FaArrowLeftLong className="items-start" />
          </Link>
          <button className="bg-black text-white px-4 border-none rounded-md items-center py-2">
            logout
          </button>
        </div>
        <div className="flex justify-center flex-col items-center">
          <img src={pic} alt="Profile" className="w-20 h-auto rounded-full" />
          <h1 className="text-slate-800">Umoren Victor</h1>
          <p className="text-slate-800 mb-4">umorenism@gmail.com</p>
        </div>
      </div>
      <div className="px-3 mt-4 absolute w-full top-[170px]">
        <div className="bg-white mb-4 text-black flex flex-col rounded-md">
          <div className="flex justify-between items-center py-4 p-2 ">
            <button
              onClick={() => handleDropdownToggle("profile")}
              className=""
            >
              Profile
            </button>
            <button onClick={() => handleDropdownToggle("order")} className="">
              Order History
            </button>
            <button
              onClick={() => handleDropdownToggle("history")}
              className=""
            >
              Help
            </button>
          </div>
        </div>
        <div className="mt-4">
          <div>
            {openDropdown === "profile" && (
              <div className="flex flex-col w-full mt-4">
                <UserForm />
              </div>
            )}
            {openDropdown === "order" && (
              <div className="flex flex-col w-full mt-4">
                <button className="w-full py-4 px-2 text-left hover:bg-gray-100">
                  <HistoryCard
                    amount="$3000"
                    type="Usdt"
                    date="12.88pm"
                    address="12 uyo road"
                  />
                </button>
              </div>
            )}
            {openDropdown === "history" && (
              <div className="flex flex-col w-full bg-white rounded-md shadow-lg mt-4">
                <button className="w-full py-4 px-2 text-left hover:bg-gray-100">
                  <HelpCardPage />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
