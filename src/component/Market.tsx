import { FaSpeakerDeck } from "react-icons/fa6";
import { Button } from "./Button";
import { GreenBtn } from "./GreenBtn";

export const Market = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto relative">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col  ">
        <div className="flex justify-between items-center">
          <h1>Favorites</h1>
          <h1>Spot</h1>
          <h1>Data</h1>
        </div>
        <div className="bg-gray-800 flex items-center p-2 gap-2 mt-2 py-2 rounded-md">
          <FaSpeakerDeck className="text-orange-400" />
          <p>Chambit Dual Asset:Avail Now Supported!</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <h1>USDT</h1>
          <h1>USDC</h1>
          <h1>USDE</h1>
          <h1>EUR</h1>
          <h1>BRL</h1>
          <h1>BTC</h1>
        </div>
        <hr className="mt-2" />

        <div className="flex justify-between items-center mt-6 ">
          <button className="bg-gray-400 px-2  text-white text-sm gap-2">
            All
          </button>
          <button className="text-sm">New</button>
          <button className="text-sm">Trending</button>
          <button className="text-sm">0 Fees</button>
          <button className="text-sm">Adventure Zone</button>
        </div>
        <div className="flex justify-between items-center mt-4">
          <h1>Trading Pairs/Vol</h1>
          <h1>Price</h1>
          <h1>24H Change</h1>
        </div>
        <div className="min-h-screen mt-4">
          <Button />
          <Button />
          <GreenBtn />
          <GreenBtn />
          <Button />
          <GreenBtn />
          <GreenBtn />
          <GreenBtn />
          <Button />
          <Button />
          <GreenBtn />
          <GreenBtn />
        </div>
      </div>
    </div>
  );
};
