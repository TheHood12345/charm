import { FaArrowLeft, FaCopy, FaMessage } from "react-icons/fa6";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import axios from "axios";

const PaymentCompleted_1 = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [min,setMin] = useState(9);
  const [sec,setSec] = useState(59);
  const [loading,setLoading] = useState(false);
  const [dispute, setDispute] = useState(false);

  //const userToken = localStorage.getItem("userToken");

  useEffect(()=>{

      const timeInterval = setInterval(()=>{
        if(sec > 0){
          setSec(sec - 1);
        }else if(min > 0){
          setMin(min - 1);
          setSec(59);
        }else{
          clearInterval(timeInterval);
          setDispute(true);
        }
      },1000);

    return () => clearInterval(timeInterval);
  
  },[min,sec]);

  
  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/pp ">
            <FaArrowLeft size={20} />
          </Link>
        </div>
        <hr className="mb-4" />
      </div>
      <div className="flex-1 p-4 pt-20">
        <div className="flex justify-between items-center">
          <div className="text-xl">
            <h1>Please wait for</h1>
            <p>release of payment</p>
          </div>
          <div className="flex gap-2">
            <div className="h-5 w-5 bg-green-600 p-5 flex justify-center items-center rounded-md">
              {min}
            </div>
            <div className="h-5 w-5 bg-green-600 p-5 flex justify-center items-center rounded-md">
              {sec}
            </div>
          </div>
        </div>
        <p className="mt-3 text-sm text-slate-500">
          Please wait for payment release . If funds are not received before the 9:00 countdown expires, disputes will be
          automatically enabled.
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
                    
                  </div>
                  <div className="flex justify-between mt-2">
                    
                  </div>
                  
                  <div className="flex justify-between mt-2">
                
                  </div>

                  <div className="flex justify-between mt-2">
                    
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <p className="mt-3 text-sm text-slate-500">
          Please click the button below only after you have made the payment.
        </p>
          <Link to="/home" className="">
            <button style={{fontWeight:"bold"}} className="bg-green-700 w-full py-2 rounded-md mt-4">
              I have received my payment
            </button>
          </Link>
          {
            dispute == false?
            <button style={{opacity:0.1,fontWeight:"bold"}} className="bg-red-700 w-full py-2 rounded-md mt-4">
              Dispute
            </button>:
            <button style={{opacity:1,fontWeight:"bold"}} className="bg-red-700 w-full py-2 rounded-md mt-4">
              Dispute
            </button>
          }
          
        </div>
        
      </div>
   
  );
};

export default PaymentCompleted_1;
