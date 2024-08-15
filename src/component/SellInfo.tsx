import { FaArrowLeft, FaArrowRight, FaCopy, FaMessage } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sellinfo = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen bg-gray-950 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <motion.div
        className="py-3 fixed top-0 w-full bg-gray-950 z-10"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-between items-center p-2">
          <Link to="/buydetails">
            <FaArrowLeft size={20} />
          </Link>
        </div>
        <hr className="mb-4" />
      </motion.div>

      {/* Content */}
      <div className="flex-1 p-4 pt-20">
        {/* Payment Information */}
        <motion.div
          className="flex justify-between items-center"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
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
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="mt-4">
            <li className="text-sm">
              Please complete payment within the allowed timeframe.
            </li>
            <li className="text-sm mt-2">
              Please complete payment within the allowed timeframe.
            </li>
            <li className="text-sm mt-2">
              Please complete payment within the allowed timeframe.
            </li>
          </ul>
        </motion.div>

        {/* Payment Details */}
        <motion.div
          className="mt-5 bg-slate-800 rounded-md py-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between">
            <div className="ml-2">Seller USDT</div>
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
        </motion.div>

        {/* Transaction Details */}
        <motion.div
          className="mt-5 bg-slate-800 rounded-md py-4 p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>

        {/* Verification Information */}
        <motion.div
          className="bg-green-800 mt-5 rounded-md p-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <IoIosCheckmarkCircle size={25} className="text-green-500" />
            <p>
              The assets of the seller have been locked. You can make the
              transfer with confidence.
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <IoIosCheckmarkCircle size={20} className="text-green-500" />
            <p>
              The seller has passed the identity, email, and mobile number
              verification.
            </p>
          </div>
        </motion.div>

        {/* Buttons */}
        <div className="gap-2 flex py-5 mb-16 justify-center items-center">
          <div className=" w-1/2">
            <Link to="/cancelorder">
              <button className="w-full bg-black px-13 border py-3 rounded-md">
                Cancel Order
              </button>
            </Link>
          </div>
          <div className=" w-1/2">
            <Link to="/paycompleted">
              <button className="w-full bg-[#1DD55E] px-12 py-3 rounded-md">
                Pay Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Sellinfo;
