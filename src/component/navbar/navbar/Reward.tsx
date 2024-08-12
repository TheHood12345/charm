import { IoDiamondOutline } from "react-icons/io5";

export const Reward = () => {
  return (
    <div className="bg-gray-950 rounded-md mt-4 py-5 p-2">
      <h1 className="mb-2">My Rewards</h1>
      <div className="flex bg-slate-800 mb-4 rounded-md">
        <div className="w-[40%] bg-gray-700 p-1 text-sm rounded-md">
          <IoDiamondOutline />
          <div className="text-orange-500">
            <h1>1000 USDT</h1>
            <p>Worth of</p>
            <p className="text-slate-500">Position</p>
          </div>
        </div>
        <div className=" w-full bg-slate-900 ">
          <h1 className="ml-2 text-sm mt-4 ">Invite 2 Qualified Referee</h1>
          <button className="border p-1 mt-4 mb-4 rounded-md bg-slate-950 ml-2">
            Accept
          </button>
        </div>
      </div>
      <div className="flex bg-slate-800 ">
        <div className="w-[40%] bg-gray-700 p-1 text-sm rounded-md">
          <IoDiamondOutline />
          <div className="text-orange-500">
            <h1>1000 USDT</h1>
            <p>Worth of</p>
            <p className="text-slate-500">Position</p>
          </div>
        </div>
        <div className=" w-full bg-slate-900 ">
          <h1 className="ml-2 text-sm mt-4 ">Invite 10 Qualified Referee</h1>
          <button className="border p-1 mt-4 mb-4 rounded-md bg-slate-950 ml-2">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};
