import { FaCircleUser } from "react-icons/fa6";
import { CiSettings } from "react-icons/ci";
import { IoMdHeadset } from "react-icons/io";

import { useState } from "react";

export const SubNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-gray-950 text-white shadow-lg fixed top-0 z-10 left-0 w-full h-[80px]">
      <div className="flex justify-between items-center mb-4 p-4">
        <div className="relative ">
          <div className="flex justify-center items-center gap-2">
            <FaCircleUser size={30} onClick={toggleDropdown} />
            <div>
              <p className="font-bold">Wisdom</p>
              <p className="text-sm">UID:178234564</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <IoMdHeadset className="text-white" size={25} />
          <CiSettings size={25} />
        </div>
      </div>
    </div>
  );
};
