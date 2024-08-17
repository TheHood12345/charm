import { ChangeEvent,useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import {  IoMdHeadset } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BsStars } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa6";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import axios from "axios";


const SellDetail = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const location = useLocation();
  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();
  const [amount, setAmount] = useState<number | string>("");

  const handleSellClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };


  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setAmount(event.target.value);
  }



  const sellTrade = async()=>{
    setLoading(true);
    await axios.post("https://chambsexchange.onrender.com/api/trade/buy",{
      "adId": location.state.id1,
      "amountToTrade": amount
    },{
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      setLoading(false);
      console.log("Buy Trade successful",response.data);
      if(response.data.message == "Trade successfully created"){
        navigate("/paycompleted", {state:{accountName:response.data.transaction.accountName,accountNumber:response.data.transaction.accountNumber,bankName:response.data.transaction.bankName,orderNumber:response.data.transaction.orderNumber,_id:response.data.transaction._id}});
        console.log(response.data);
      }else{
        console.log("expired");
      }
    }).catch((err)=>{
      setLoading(false);
      console.log("id1: ",location.state.id1);
      console.log("amount: ",amount);
      console.log("adStatus",location.state.adStatus);
    });
  }







  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/ptopsell">
            <FaArrowLeft size={20} />
          </Link>
          <h1>Sell USDT</h1>
          <IoMdHeadset size={20} />
        </div>
        <hr className="mb-4" />
      </div>
      {/* Main Content */}
      <div className="flex-1 p-4 pt-20">
        <div className="text-sm text-slate-300">
          <h1>{location.state.userName}</h1>
          <h2>{location.state.min1} - {location.state.max1}</h2>
          <h2>Quantity {location.state.am} {location.state.asset.toUpperCase()}</h2>
          <p>
            Payment Method <span className="text-orange-600">|</span> Bank
            Transfer
          </p>
          <h2>Payment Duration 15Min(s)</h2>
        </div>
        <div className="mt-4 min-h-screen">
          <div className="bg-slate-700 rounded-md p-2">
            {/* <div className="flex gap-2">
              <div>
                <h1>With Crypto</h1>
                <p className="w-24 bg-orange-600 h-1"></p>
              </div>
              <p>With Fiat</p>
            </div> */}
            <div className="mt-4">
              <div className="bg-slate-900 py-4 rounded-md flex gap-4 p-2 items-center">
                <input
                  type="text"
                  className="w-full h-full outline-none bg-transparent"
                  placeholder="Enter amount"
                  value={amount} onChange={handleChange}
                />
                <h1 className="flex items-center justify-center gap-2">
                {location.state.asset.toUpperCase()}
                  <p className="text-orange-700 mb-1">|</p>
                  All
                </h1>
              </div>
              <div className="mt-4">
                {/* <div className="flex justify-between items-center">
                  <div>
                    <h1>I will receive</h1>
                    <p>Available</p>
                  </div>
                  <div>
                    <h1>--NGN</h1>
                    <p>0 USDT</p>
                  </div>
                </div> */}

                <div className="mt-4">
                  {/* <h1 className="text-xl">Payment Method</h1>
                  <div className="bg-slate-900 py-4 mt-2 p-2 rounded-md flex items-center justify-between">
                    <h1 className="text-xl">Bank Transfer</h1>
                    <IoMdArrowDropdown size={25} onClick={handleClick} />
                  </div> */}
                  {/* {open && ( */}
                    {/* <div className="mt-2 bg-slate-800 rounded-md p-2"> */}
                      {/* <div className="py-1">
                        <label className="block text-sm text-slate-300">
                          Account Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border border-gray-600 rounded-md p-2"
                          placeholder="Enter account name"
                        />
                      </div> */}
                      {/* <div className="py-1">
                        <label className="block text-sm text-slate-300">
                          Bank Name
                        </label>
                        <input
                          type="text"
                          className="w-full bg-transparent border border-gray-600 rounded-md p-2"
                          placeholder="Enter bank name"
                        />
                      </div> */}
                      {/* <div className="py-1">
                        <label className="block text-sm text-slate-300">
                          Account Number
                        </label>
                        <input
                          type="number"
                          className="w-full bg-transparent border border-gray-600 rounded-md p-2"
                          placeholder="Enter your account number"
                        />
                      </div> */}
                    {/* </div>
                  )} */}
                </div>
                {/* button */}
                <div className="mt-4">
                  <button
                    className={`w-full py-4 rounded-md ${
                      loading ? "bg-gray-500" : "bg-orange-600"
                    } text-white`}
                    onClick={
                      sellTrade
                    }
                    disabled={loading}
                  >
                    {loading ? "Processing..." : "Sell"}
                  </button>
                </div>
                {/* <div className="mt-4">
                  <p className="text-slate-300">
                    Please wait for the ccounterparty to make payment.The tokens
                    ffor this sale will be transferred oout of your funding
                    Account.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
          {/* <div className="mt-4 bg-slate-700 rounded-md min-h-[500px] p-2"> */}
            {/* <div>
              <h1>Remarks</h1>
              <p className="mb-4">DON'T PAY KOBO</p>
              <p className="mb-4">NO THIRD PARTY</p>
            </div> */}
            <hr />
            {/* <h1 className="mt-4 text-xl">Transaction Info</h1>
            <div className="flex justify-between mt-2">
              <h5 className="text-xl">Seller Nickname</h5> */}
              {/* <div>
                <h2 className="flex items-center gap-1 text-xl">
                  HOTB
                  <BsStars className="text-orange-600" />
                  <FaArrowRight />
                </h2>
                <p>Online</p>
              </div>
            </div> */}
            {/* <div className="bg-gray-950 mt-4 rounded-md py-4">
              <div className="flex justify-between p-2 items-center">
                <h1>Good Rating %</h1>
                <p>100%</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>Completed Order(s) in 30 Days</h1>
                <p>180 Order(s)</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>30-Days Order Completed Rate(%)</h1>
                <p>100%</p>
              </div>
              <div className="flex justify-between p-2 items-center">
                <h1>Avg.Release Time</h1>
                <p>1 Minutes(s)</p>
              </div>
            </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default SellDetail;
