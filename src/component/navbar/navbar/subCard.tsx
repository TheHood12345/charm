import { FaArrowRight } from "react-icons/fa6";

export const SubCard = () => {
  return (
    <div className="bg-gray-800 py-4 rounded-md p-2 mt-2">
      <div>
        <h1 className="text-sm">Deposite 49,999 USDT to unlock a VIP 1</h1>
        <div className="flex gap-4 items-center justify-center">
          <h4>trial and enjoy exclusive perks</h4>
          <div className="h-10 mt-2 w-10 rounded-full bg-slate-500 flex items-center justify-center text-orange-400 text-sm">
            0%
          </div>
        </div>
        <div className="flex gap-2">
          <button className="bg-orange-500 p-2 rounded-md text-black text-sm font-bold ">
            Deposit Now
          </button>
          <p className="flex justify-center items-center gap-2">
            VIP Benefit <FaArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};
