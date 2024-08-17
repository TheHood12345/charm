import { ChangeEvent, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

import { IoMdHeadset } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BsStars } from "react-icons/bs";
// import { FaArrowRight } from "react-icons/fa6";
// import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import axios from "axios";

const BuyDetails = () => {
  // const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [amount, setAmount] = useState<number | string>("");

  const userToken = localStorage.getItem("userToken");
  const navigate = useNavigate();

  // const handleClick = () => {
  //   setOpen(!open);
  // };

  const handleSellClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>)=>{
    setAmount(event.target.value);
  }
  
  const buyTrade = async()=>{
    setLoading(true);
    await axios.post("https://chambsexchange.onrender.com/api/trade/sell",{
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
          <Link to="/pp">
            <FaArrowLeft size={20} />
          </Link>
          <h1>Buy USDT</h1>
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
            <div className="flex gap-2">
              <div>
                {/* <h1>With Crypto</h1> */}
                {/* <p className="w-24 bg-orange-600 h-1"></p> */}
              </div>
              {/* <p>With Fiat</p> */}
            </div>
            <div className="mt-4">
              <div className="bg-slate-900 py-4 rounded-md flex gap-4 p-2 items-center">
                <input
                  type="number"
                  className="w-full h-full outline-none bg-transparent no_spinner1"
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
                <div className="flex justify-between items-center">
                  {/* <div>
                    <h1>I will receive</h1>
                    <p>Available</p>
                  </div> */}
                  {/* <div>
                    <h1>--NGN</h1>
                    <p>0 USDT</p>
                  </div> */}
                </div>

                <div className="mt-4">
                  {/* <Link to="/payment"> */}
                    <button
                      className={`w-full py-4 rounded-md ${
                        loading ? "bg-gray-500" : "bg-[#1DD55E]"
                      } text-white`}
                      onClick={()=>{
                        //handleSellClick
                        buyTrade();
                        }
                      }
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Buy"}
                    </button>
                  {/* </Link> */}
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BuyDetails;
