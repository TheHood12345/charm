import { Link } from "react-router-dom";

export const TradeComponent = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-4 flex flex-col">
        <div className="flex gap-4  items-center">
          <div className="flex flex-col py-2">
            <h1>Spot</h1>
            <div className="h-1 w-10 bg-orange-500"></div>
          </div>
          <h2>Derivatives</h2>
        </div>
        <div>
          <div className="flex justify-between items-center py-4">
            <h1>Trading pairs</h1>
            <div className="flex gap-10">
              <h1>Price</h1>
              <h2>24H Change</h2>
            </div>
          </div>

          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2> 1SOL/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2> XETA/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2> TOMI/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                +184.33%
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2>AGLA/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-red-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2> GNS/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div>
              <h2> 1SOL/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-red-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
          <div className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2> 1SOL/USDT</h2>
              <span>2.14M USDT</span>
            </div>
            <div className="flex gap-4">
              <h2>0.00134</h2>
              <Link to="/orderbook">
                <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
