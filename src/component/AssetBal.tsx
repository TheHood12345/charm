import { FaEquals } from "react-icons/fa6";

export const AssetBal = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="bg-white py-2 fixed w-full top-0 left-0 right-0 z-10 text-black">
        <div className="flex flex-col items-center justify-center">
          <h1>Asset Balance</h1>
          <div className="text-center">
            <h1 className="text-xl">Wallet Balance</h1>
            <p>0.0000</p>
            <span className="flex items-center gap-2 ml-3">
              <FaEquals /> 0.00 USDT
            </span>
          </div>
        </div>
      </div>
      <div className="mt-32 text-white py-8  px-4">
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
