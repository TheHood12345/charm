import { Link } from "react-router-dom";

export const Gainorder = () => {
  return (
    <div className="mt-5 w-full bg-gray-950 text-white  py-15 rounded-md slide-in">
      <h1 className="font-bold text-xl px-4">Spot</h1>
      {/* Spot Trading Top */}
      <div>
        <div className="flex justify-between items-center px-4 mt-2">
          <h1>Trading pairs</h1>
          <p>Price</p>
          <h5>24H Change</h5>
        </div>
        <div className="flex justify-around pb-2 items-center w-full">
          <h4 className="flex flex-col mt-5 text-xl">
            <div>BNB/USDT</div>
            <div>volume</div>
          </h4>
          <p className="px-4 text-xl">590</p>
          <Link to="/orderbook">
            <button className="px-8 text-xl bg-red-500 py-2 rounded-lg">
              1.2%
            </button>
          </Link>
        </div>
      </div>
      {/* Spot Trading Down */}
      <div>
        <div className="flex justify-around pb-2 items-center w-full">
          <h4 className="flex flex-col mt-5 text-xl">
            <div>BNB/USDT</div>
            <div>volume</div>
          </h4>
          <p className="px-4 text-xl">590</p>
          <Link to="/orderbook">
            <button className="px-8 text-xl bg-green-500 py-2 rounded-lg">
              1.2%
            </button>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex justify-around pb-2 items-center w-full">
          <h4 className="flex flex-col mt-5 text-xl">
            <div>AVAIL/USDT</div>
            <div>volume</div>
          </h4>
          <p className="px-4 text-xl">590</p>
          <Link to="/orderbook">
            <button className="px-8 text-xl bg-red-500 py-2 rounded-lg">
              1.2%
            </button>
          </Link>
        </div>
        <div className="flex justify-around pb-2 items-center w-full mb-2">
          <h4 className="flex flex-col mt-5 text-xl">
            <div>AVAIL/USDT</div>
            <div>volume</div>
          </h4>
          <p className="px-4 text-xl">590</p>
          <Link to="/orderbook">
            <button className="px-8 text-xl bg-red-500 py-2 rounded-lg">
              1.2%
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
