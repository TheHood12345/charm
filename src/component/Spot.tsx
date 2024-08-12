import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Long } from "./Long";
import { FcFinePrint } from "react-icons/fc";
import { TradeComponent } from "./TradeComponent";
import { useState } from "react";

export const Spot = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(4.0255);

  const HandleDerop = () => {
    setDropdown(!dropdown);
  };

  const handleSubmit = () => {
    setOpen(!open);
  };

  const handleSell = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Add your logic here after the loading effect
    }, 2000); // Adjust the timeout duration as needed
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const increasePrice = () => {
    setPrice(price + 0.0001);
  };

  const decreasePrice = () => {
    if (price > 0) {
      setPrice(price - 0.0001);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
        <div className="flex justify-between items-center">
          <button className="bg-gray-500 px-10 py-2 rounded-md">Spot</button>
          <Link to="/pp">
            <button className="bg-gray-500 px-10 py-2 rounded-md">P2P</button>
          </Link>
        </div>

        {/* subheader */}
        <div className="flex justify-between items-center mt-10">
          <h1 className="text-2xl">
            MX/USDT{" "}
            <span className="text-sm bg-green-300 rounded-md">+197.11%</span>
          </h1>
          <p>200x</p>
          <div className="flex gap-2">
            <h1>icon</h1>
            <p>..</p>
          </div>
        </div>
        {/* trade side component */}

        <div className="min-h-[500px] bg-black p-4 rounded-md mt-5 text-black flex justify-between gap-2">
          <div className="w-1/2 bg-black text-white">
            <div>
              <div className="flex justify-between p-2">
                <div>
                  <h1>Price</h1>
                  <p className="text-center">(USDT)</p>
                </div>
                <div>
                  <h1>Amount</h1>
                  <p className="text-center">(MX)</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>
                <div className="flex justify-between ">
                  <h1 className="text-red-500">4.0298</h1>
                  <p>118.15</p>
                </div>

                <div className="mt-4 text-center">
                  <h1 className="text-2xl text-green-500">4.0241</h1>
                  <p>$4.0231</p>
                </div>
              </div>
            </div>

            <div className="bg-black">
              <div className="flex justify-between ">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between ">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between ">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between ">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-green-500">4.0298</h1>
                <p>118.15</p>
              </div>

              <div className="p-2 flex justify-between items-center gap-2">
                <button
                  onClick={decreasePrice}
                  className="bg-gray-600 px-7 p-2 flex mt-2  mr-2 items-center justify-between rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  <p> 0.0001</p>
                  <div>
                    <FaArrowDown />
                  </div>
                </button>
                <div className="h-8 w-10 bg-blue-500 rounded-md mt-2 flex justify-center items-center">
                  <FcFinePrint size={25} className="text-white text-center" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex mt-2">
              <button className="bg-gray-400 w-1/2 py-2 rounded-md">Buy</button>
              <button className="bg-red-500 w-1/2 py-2 rounded-md">Sell</button>
            </div>

            <div className="bg-gray-800 mt-6 py-2 rounded-md">
              <div
                className="flex justify-between items-center px-2 text-white"
                onClick={HandleDerop}
              >
                <p>1</p>
                <h1>Limit</h1>

                {dropdown ? (
                  <FaArrowDown onClick={HandleDerop} />
                ) : (
                  <FaArrowUp onClick={HandleDerop} />
                )}
              </div>
            </div>
            {dropdown && (
              <div className="absolute top-[340px] left-0 right-0 bg-white py-4 p-4 m-4 rounded-lg shadow-lg text-slate-500 z-20 min-h-screen">
                gg
              </div>
            )}
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <button
                  onClick={decreasePrice}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  -
                </button>
                <h1>{price.toFixed(4)}</h1>
                <button
                  onClick={increasePrice}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  +
                </button>
              </div>
            </div>
            <p className="text-white py-2">${price.toFixed(4)}</p>
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <button
                  onClick={decreaseQuantity}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  -
                </button>
                <h1>{quantity}</h1>
                <button
                  onClick={increaseQuantity}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  +
                </button>
              </div>
            </div>
            <div className="py-4">
              <Long />
            </div>
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-center items-center px-2 text-white">
                <h1 className="text-xl">Total(USDT)</h1>
              </div>
            </div>

            <div className="flex text-white gap-2 mt-4">
              <input type="checkbox" />
              <p>
                TP/SL <span></span>
              </p>
            </div>

            <div className="bg-gray-800 mt-2 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>Avail</p>
                <p className="h-3 w-3 rounded-full bg-blue-600 flex justify-center items-center text-sm">
                  +
                </p>
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={handleSell}
                className="bg-red-500 w-full py-2 rounded-md text-white transition duration-200 ease-in-out transform hover:scale-105"
                disabled={loading}
              >
                {loading ? "Selling..." : "Sell MX"}
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-950 mt-4 py-4 justify-between items-center">
          <div className="flex gap-4 items-center justify-between">
            <h1 className="text-xl p-2 ">
              Open Order(0) <span className="ml-4">Post</span>
            </h1>
            <p>icons</p>
          </div>
          <hr />
          <div className="mt-2 p-2 flex gap-2">
            <input type="checkbox" />
            <p>Hide other pairs</p>
          </div>
          <hr />
          <div className="min-h-screen">
            <div className="mt-4 flex justify-between items-center p-2">
              <h1>
                MX/USDT <span className="mb-2">pairs</span>
              </h1>
              <div className="flex justify-center items-center gap-1">
                <h1>show</h1>
                {open ? (
                  <FaArrowUp onClick={handleSubmit} />
                ) : (
                  <FaArrowDown onClick={handleSubmit} />
                )}
              </div>
            </div>
            {open && <TradeComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};
