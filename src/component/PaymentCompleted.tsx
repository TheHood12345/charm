import { FaArrowLeft, FaCopy, FaMessage } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PaymentCompleted = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/payment ">
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
        <p className="mt-3 text-sm text-slate-500">
          Please complete your payment within 15:00. Otherwise,the order will be
          automatically canceled.
        </p>
        <div className="mt-4">
          <div className="bg-slate-900 rounded-md p-2  py-2">
            <li> Please use UMOREN VICTOR EMMANUEL when making payment</li>
            <li>
              Make sure not to remark sensitive words such as "BTC/USDT
              purchase" when transferring fiat,otherwise the transfer may fail
            </li>
          </div>
        </div>
        <div className="mt-4">
          <div className="border-green-700 border rounded-md  to-orange-700 py-2">
            <div className="mt-2 border-green-700 rounded-md py-4 ">
              <div className="flex justify-between">
                <div className="ml-2">Buy USDT</div>
                <div className="border py-2 px-2 rounded-s-full border-green-700 flex items-center text-green-700 justify-center gap-2 text-xl">
                  <FaMessage size={20} />
                </div>
              </div>
              <div className="p-2">
                <li>1.Log in to your account:Bank Transfer</li>
                <li className="py-2">2. Transfer to the seller </li>
                <h1 className="flex items-center gap-1">
                  20,000 NGN <FaCopy />
                </h1>
              </div>
              <div className="mt-4 p-2  px-2">
                <div className="bg-slate-800 p-1 rounded-md">
                  <div className="flex justify-between mt-2">
                    <h1>NAME</h1>
                    <p className="text-white flex items-center gap-1">
                      UMOREN VICTOR EMMANUEL <FaCopy />
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Bank Account Number</h1>
                    <p className="text-white flex items-center gap-1">
                      7081514233 <FaCopy />
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Bank Branch</h1>
                    <p className="text-white flex items-center gap-1">
                      Uyo <FaCopy />
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1>Bank Name</h1>
                    <p className="text-white flex items-center gap-1">
                      OPAY <FaCopy />
                    </p>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h1>Order No.</h1>
                    <p className="text-white flex gap-2 justify-center items-center">
                      01253482234413121925
                      <FaCopy />
                    </p>
                  </div>
                </div>
                <p className="mt-4">
                  <li>3.click on the "Payment Completed" button</li>
                </p>
              </div>
            </div>
          </div>
          <Link to="/sucessful" className="">
            <button className="bg-[#1DD55E] w-full py-2 rounded-md mt-4">
              Payment Completed
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentCompleted;
