import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const PtopSell = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleBuyClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false); // Ensure loading state is reset after navigation
      navigate("/selldetail");
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm mt-20 flex flex-col">
        <div className="mt-4 flex items-center justify-between">
          <h1 className="text-2xl py-2 mb-4 font-bold">P2P Trading</h1>
          <Link to="/addvert">
            <h1 className="text-2xl mb-2 text-[#1DD55E]">Create Ad</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link to="/pp">
              <h1 className="text-[#fff] font-bold">Buy</h1>
            </Link>
            <Link to="/ptopsell">
              <h2 className="font-bold text-[#d51d1d]">Sell</h2>
            </Link>
          </div>
          <button className="px-5 rounded-md bg-gray-400">NGN</button>
        </div>

        <div className="flex gap-5 mt-10">
          <h1>USDT</h1>
          <h2>USDC</h2>
          <h1>BTC</h1>
          <h1>ETH</h1>
        </div>

        <div className="flex justify-between mt-10">
          <div className="flex gap-5">
            <h1>Amount</h1>
            <h2>All Payment Methods</h2>
          </div>
          <div>Filter</div>
        </div>

        <div className="min-h-screen">
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="mt-10" key={item}>
              <div className="flex justify-between gap-4">
                <div className="flex gap-1">
                  <p className="h-10 w-10 rounded-full bg-orange-500 text-base flex justify-center items-center">
                    A
                  </p>
                  <div>
                    <h1>A TOWN HALL</h1>
                    <p className="text-sm">53 m ago</p>
                    <div>
                      <p className="text-xl">N 1,5934.3</p>
                      <p className="text-sm">Quantity 46,805.506 USDT</p>
                      <p>Limits 5.00M-23.00m NGN</p>
                      <p className="u underline">Bank Transfer</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h1>637 Orders | 92%</h1>
                  <button
                    onClick={handleBuyClick}
                    className="px-10 bg-[#d51d1d] py-2 rounded-md mt-20"
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-10">
            <div className="flex justify-between gap-4">
              <div className="flex gap-1">
                <p className="h-10 w-10 rounded-full bg-[#1DD55E] text-base flex justify-center items-center">
                  A
                </p>
                <div>
                  <h1>A TOWN HALL</h1>
                  <p className="text-sm">53 m ago</p>
                  <div>
                    <p className="text-xl">N 1,5934.3</p>
                    <p className="text-sm">Quantity 46,805.506 USDT</p>
                    <p>Limits 5.00M-23.00m NGN</p>
                    <p className="u underline">Bank Transfer</p>
                  </div>
                </div>
              </div>
              <div>
                <h1>637 Orders | 92%</h1>
                <button
                  onClick={handleBuyClick}
                  className="px-10 bg-[#d51d1d] py-2 rounded-md mt-20"
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
          {/* Additional items omitted for brevity */}
        </div>

        {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="border-t-transparent border-solid animate-spin border-[#d51d1d] border-4 rounded-full h-12 w-12"></div>
          </div>
        )}
      </div>
    </div>
  );
};
