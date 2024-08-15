import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaEquals } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const AssetBal = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="bg-black text-white py-2 fixed w-full top-0 left-0 right-0 z-10 ">
        <div className="p-2">
          <Link to="/asset">
            <FaArrowAltCircleLeft size={25} />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl mb-2">Asset Balance</h1>
          <div className="text-center mb-2">
            <h1 className="text-xl">Wallet Balance</h1>
            <p className="text-green-900">0.0000</p>
            <span className="flex items-center gap-2 ml-3">
              <FaEquals /> 0.00 USDT
            </span>
          </div>
        </div>
      </div>
      <div className="mt-40 text-white py-8  px-4">
        <div className="bg-gray-700 py-6 p-4 rounded-md flex">
          <div className="w-1/2">Avaliable Bal:</div>
          <div className="w-1/2">Avaliable Bal:</div>
        </div>
      </div>
      <div className="mt-4 text-white grid grid-cols-3  py-8 bg-gray-500  gap-2 px-4 ">
        <div className="bg-gray-950 text-white py-4 px-2 text-center rounded-md">
          <button>Deposit</button>
        </div>
        <div className="bg-gray-950 text-white py-4 px-2 text-center rounded-md">
          <button>Withdrawal</button>
        </div>
        <div className="bg-gray-950 text-white py-4 px-2 text-center rounded-md">
          <button>Trade</button>
        </div>
      </div>
    </div>
  );
};
