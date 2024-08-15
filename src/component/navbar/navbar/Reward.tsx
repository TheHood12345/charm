import { IoDiamondOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export const Reward = () => {
  return (
    <div className="bg-gray-950 rounded-md mt-4 py-5 p-2">
      <h1 className="mb-2">My Rewards</h1>
      <div className="flex bg-slate-800 mb-4 rounded-md">
        <div className="w-[40%] bg-gray-700 p-1 text-sm rounded-md">
          <IoDiamondOutline />
          <div className="text-[#1DD55E]">
            <h1>1000 USDT</h1>
            <p>Worth of</p>
            <p className="text-slate-500">Position</p>
          </div>
        </div>
        <div className=" w-full bg-slate-900 rounded-md">
          <h1 className="ml-2 text-sm mt-4 text-white ">
            Claim off $1000 every 30days{" "}
            <span className="text-[#1DD55E]">Chambit WEB</span> Exchange and
            share 70% of it daily transaction fees with active traders
          </h1>
          <Link to="/chembster">
            <button className="border p-2 mt-4 mb-4 rounded-md bg-slate-950 ml-2 text-[#1DD55E]">
              Join Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex bg-slate-800 rounded-md">
        <div className="w-[40%] bg-gray-700 p-1 text-sm rounded-md">
          <IoDiamondOutline />
          <div className="text-[#1DD55E]">
            <h1>1000 USDT</h1>
            <p>Worth of</p>
            <p className="text-slate-500">Position</p>
          </div>
        </div>
        <div className=" w-full bg-slate-900 ">
          <h1 className="ml-2 text-sm mt-4 text-white">
            Refer 10 people to win more
          </h1>
          <Link to="/chembster">
            <button className="border p-2 mt-4 mb-4 rounded-md bg-slate-950 ml-2 text-[#1DD55E]">
              Accept
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
