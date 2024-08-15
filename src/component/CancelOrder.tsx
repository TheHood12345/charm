import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CancelOrder = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex gap-20 items-center p-2">
          <Link to="/payment">
            <FaArrowLeft size={20} />
          </Link>
          <h1 className="text-center">Cancel Order</h1>
        </div>
        <div className="px-2 py-2">
          <h1>Please select a reason for cancellation</h1>
          <p className="text-sm text-orange-600">Tips for order cancellation</p>
        </div>
        <hr className="mb-4" />
        <div className="flex-1 p-4 pt-4">
          <div className="bg-slate-900 p-2 rounded-md">
            <h1>Buy Issue</h1>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason1" name="cancellationReason" />
              <label htmlFor="reason1">
                I no longer wish to proceed with this order.
              </label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason2" name="cancellationReason" />
              <label htmlFor="reason2">
                I didn't meet the counterparty's requirement
              </label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason3" name="cancellationReason" />
              <label htmlFor="reason3">
                I didn't know how to make the payment.
              </label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason4" name="cancellationReason" />
              <label htmlFor="reason4">Others</label>
            </div>
          </div>
          <div className="bg-slate-900 p-2 rounded-md mt-4">
            <h1>Seller Issue</h1>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason1" name="cancellationReason" />
              <label htmlFor="reason1">
                The payment failed as the payment method provided was invalid
              </label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason2" name="cancellationReason" />
              <label htmlFor="reason2">
                The counterparty tended to charge me extra fees
              </label>
            </div>
            <div className="flex items-center gap-2 mt-4">
              <input type="radio" id="reason3" name="cancellationReason" />
              <label htmlFor="reason3">
                The seller requested payment to an account that did not match
                his/her legal name.
              </label>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center gap-1 mb-3">
              <input type="checkbox" />
              <p className="text-sm">
                i have not paid the seller/have recieved seller's refund
              </p>
            </div>
            <Link to="/pp">
              <button className="bg-[hsl(141,76%,47%)] w-full py-2 rounded-md">
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
