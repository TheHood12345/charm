import { FaArrowLeft, FaCopy } from "react-icons/fa6";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const PaymentCompleted = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [min,setMin] = useState(15);
  const [sec,setSec] = useState(59);
  const [loading,setLoading] = useState(false);

  const userToken = localStorage.getItem("userToken");

  useEffect(()=>{

      const timeInterval = setInterval(()=>{
        if(sec > 0){
          setSec(sec - 1);
        }else if(min > 0){
          setMin(min - 1);
          setSec(59);
        }else{
          clearInterval(timeInterval);
          cancelRequest();
        }
      },1000);

    return () => clearInterval(timeInterval);
  
  },[min,sec]);

  const cancelRequest = async()=>{
    setLoading(true);
    await axios.post("https://chambsexchange.onrender.com/api/trade/cancel-trade",{
      tradeId: location.state._id
    },{
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log("cancelled",response.data);
      setLoading(false);
      if(response.data.message == "Trade canceled successfully"){
        navigate("/pp")
      }
      
    }).catch((err)=>{
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/pp">
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
              {min}
            </div>
            <div className="h-5 w-5 bg-red-600 p-5 flex justify-center items-center rounded-md">
              {sec}
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Please complete your payment within 15:00. Otherwise,the order will be
          automatically canceled.
        </p>
        {/* <div className="mt-4">
          <div className="bg-slate-900 rounded-md p-2  py-2">
            <li> Please use UMOREN VICTOR EMMANUEL when making payment</li>
            <li>
              Make sure not to remark sensitive words such as "BTC/USDT
              purchase" when transferring fiat,otherwise the transfer may fail
            </li>
          </div>
        </div> */}
        <div className="mt-4">
          <div>
            
              {/* <div className="flex justify-between">
                <div className="ml-2">Buy USDT</div>
                <div className="border py-2 px-2 rounded-s-full border-green-700 flex items-center text-green-700 justify-center gap-2 text-xl">
                  <FaMessage size={20} />
                </div>
              </div> */}
              {/* <div className="p-2">
                <li>1.Log in to your account:Bank Transfer</li>
                <li className="py-2">2. Transfer to the seller </li>
                <h1 className="flex items-center gap-1">
                  20,000 NGN <FaCopy />
                </h1>
              </div> */}
              <div className="mt-4">
                <div className="bg-slate-800 bg-gray-800 rounded-md"  style={{width:"100%",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",height:"100%"}}>
                  <div className="flex justify-between mt-2">
                    <h1 style={{color:"gray",fontWeight:"bold"}}>NAME</h1>
                    <p style={{fontWeight:"bold"}} className="text-white flex items-center gap-1">
                       {location.state.accountName} <FaCopy style={{color:"green",marginLeft:"3px"}} onClick={()=>{navigator.clipboard.writeText(`${location.state.accountName}`).then(()=>{console.log("copied")})}}/>
                    </p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <h1 style={{color:"gray",fontWeight:"bold"}}>Account Number</h1>
                    <p style={{fontWeight:"bold"}} className="text-white flex items-center gap-1">
                      {location.state.accountNumber} <FaCopy style={{color:"green",marginLeft:"3px"}} onClick={()=>{navigator.clipboard.writeText(`${location.state.accountNumber}`).then(()=>{console.log("copied")})}}/>
                    </p>
                  </div>
                  
                  <div className="flex justify-between mt-2">
                    <h1 style={{color:"gray",fontWeight:"bold"}}>Bank Name</h1>
                    <p style={{fontWeight:"bold"}} className="text-white flex items-center gap-1">
                      {location.state.bankName} <FaCopy style={{color:"green",marginLeft:"3px"}} onClick={()=>{navigator.clipboard.writeText(`${location.state.bankName}`).then(()=>{console.log("copied")})}}/>
                    </p>
                  </div>

                  <div className="flex justify-between mt-2">
                    <h1 style={{color:"gray",fontWeight:"bold"}}>Order No.</h1>
                    <p style={{fontWeight:"bold"}} className="text-white flex gap-2 justify-center items-center">
                       {location.state.orderNumber}
                      <FaCopy style={{color:"green",marginLeft:"3px"}} onClick={()=>{navigator.clipboard.writeText(`${location.state.orderNumber}`).then(()=>{console.log("copied")})}} />
                    </p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500">
          Please click the button below only after you have made the payment.
        </p>
          <Link to="/paycompleted_1" className="">
            <button className="bg-green-700 w-full py-2 rounded-md mt-4">
              I have paid
            </button>
          </Link>
          {
            loading?
            <button style={{opacity:0.8}} className="bg-red-700 w-full py-2 rounded-md mt-4">
              Canceling...
            </button>:
            <button onClick={()=>{
              cancelRequest();
            }} className="bg-red-700 w-full py-2 rounded-md mt-4">
              Cancel Request
            </button>
          }
          
        </div>
        
      </div>
   
  );
};

export default PaymentCompleted;
