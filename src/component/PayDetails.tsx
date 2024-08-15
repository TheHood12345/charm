import { FaArrowLeft, FaArrowRight, FaCopy, FaMessage } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { Link } from "react-router-dom";

const PayDetails = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/buydetails ">
            <FaArrowLeft size={20} />
          </Link>
        </div>
        <hr className="mb-4" />
      </div>
      <div className="flex-1 p-4 pt-20">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <h1>Complete Your Payment</h1>
            <p>Within:</p>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
              14
            </div>
            <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
              53
            </div>
          </div>
        </div>
        <div className="mt-4">
          <ul>
            <li className="text-sm">
              Please completed payment within the allowed timeframe.
            </li>
            <li className="text-sm mt-2">
              Please completed payment within the allowed timeframe.
            </li>
            <li className="text-sm mt-2">
              Please completed payment within the allowed timeframe.
            </li>
          </ul>
        </div>
        <div className="mt-5 bg-slate-800 rounded-md py-4 ">
          <div className="flex justify-between">
            <div className="ml-2">Buy USDT</div>
            <div className="border py-2 px-2 rounded-s-full border-orange-600 flex items-center justify-center gap-2 text-xl">
              <FaMessage size={20} /> Contact Seller
            </div>
          </div>
          <div className="mt-4 p-2">
            <div className="flex justify-between">
              <h1>Amount</h1>
              <p className="text-green-800">20,0000 NGN</p>
            </div>
            <div className="flex justify-between">
              <h1>Price</h1>
              <p className="text-white">21,585.6 NGN</p>
            </div>
            <div className="flex justify-between">
              <h1>Total Quantity</h1>
              <p className="text-white">212.616 USDT</p>
            </div>
            <div className="flex justify-between">
              <h1>Transaction Fees</h1>
              <p className="text-white">20 USDT</p>
            </div>
            <div className="flex justify-between">
              <h1>Order No.</h1>
              <p className="text-white flex gap-2 justify-center items-center">
                01253482234413121925
                <FaCopy />
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-slate-800 rounded-md py-4 p-2">
          <div>
            <h1>Transaction</h1>
            <div className="flex justify-between items-center mt-4">
              <h2>Seller Nickname</h2>
              <p className="flex items-center gap-1">
                Umorenism <FaArrowRight />
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h2>Verified</h2>
              <p className="flex items-center gap-1">Umoren Victor Emmanuel</p>
            </div>
          </div>
        </div>
        <div className="bg-green-800 mt-4 rounded-md p-2">
          <div className="flex">
            <IoIosCheckmarkCircle size={25} className="text-green-500" />
            <p>
              The assets of the seller have been locked.you can make the
              transfer with confidence.
            </p>
          </div>
        </div>
        <div className="gap-4 mt-4 flex justify-center items-center">
          <Link to="/cancelorder">
            <button className="w-full bg-black px-12 py-3 rounded-md">
              Cancel Order
            </button>
          </Link>
          <Link to="/paycompleted">
            <button className="w-full bg-[#1DD55E] px-14 py-3 rounded-md">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PayDetails;
