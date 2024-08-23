import { useState, useEffect } from "react";
import { IoMdHeadset } from "react-icons/io";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BeatLoader } from "react-spinners"; // Ensure this package is installed

export const SecondAdd = () => {
  // State for number inputs
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [paymentTime, setPaymentTime] = useState(15);

  const location = useLocation();

  // State for loading
  const [isLoadingNext, setIsLoadingNext] = useState(false);
  const [isLoadingPrevious, setIsLoadingPrevious] = useState(false);




  // Handlers for incrementing/decrementing
  const incrementMinValue = () => setMinValue(minValue + 1);
  const decrementMinValue = () => setMinValue(minValue - 1);
  const incrementMaxValue = () => setMaxValue(maxValue + 1);
  const decrementMaxValue = () => setMaxValue(maxValue - 1);
  const incrementPaymentTime = () => setPaymentTime(paymentTime + 1);
  const decrementPaymentTime = () => setPaymentTime(paymentTime - 1);

  const [amount, setAmount] = useState(0);

  const userToken = localStorage.getItem("userToken");
  const  navigate = useNavigate();

  useEffect(()=>{
    if(!userToken){
      navigate("/login");
    }
  },[]);

  // Simulate a loading action
  const handleNextClick = async () => {
    setIsLoadingNext(true);
    // Simulate an async action (e.g., API request)
    setTimeout(() => {
      setIsLoadingNext(false);
      // Handle action completion
    }, 2000); // 2 seconds delay
  };

  const handlePreviousClick = async () => {
    setIsLoadingPrevious(true);
    // Simulate an async action (e.g., API request)
    setTimeout(() => {
      setIsLoadingPrevious(false);
      // Handle action completion
    }, 2000); // 2 seconds delay
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      {/* Header */}
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
        <Link to="/addvert">
        <FaArrowLeftLong size={20} />
        </Link>
          
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <IoMdHeadset size={20} />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 pt-20">
        <div className="text-center">
          <h1 className="text-xl font-bold">Post an Advert</h1>
          <p className="text-sm text-gray-400">Set Type and Price (2/3)</p>

          {/* Progress Indicator */}
          <div className="flex py-3 mt-4 justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center"></div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center">
              2
            </div>
            <div className="h-1 w-[30%] bg-[#1DD55E]"></div>
            <div className="h-5 w-5 rounded-full bg-[#1DD55E] text-white flex justify-center items-center"></div>
          </div>
        </div>
        <hr />

        {/* Form Section */}
        <div style={{backgroundColor:"rgba(0,0,0,0.3)"}} className="bg-white text-black rounded-md py-4 mt-5 p-2 min-h-[500px]">
          {/* Amount to Trade */}
          <div style={{width:"80%",marginBottom:"0px"}} className={`flex border rounded-md border-[#1DD55E] w-full py-1 p-1 gap-2`}>
            <input
              type="number"
              placeholder="Amount" value={amount} onChange={async(event: React.ChangeEvent<HTMLInputElement>)=>{
                setAmount(Number(event.target.value));
              }}
              style={{width:"80%",backgroundColor:"transparent",color:"white"}}
              className="flex-1 outline-none text-sm border-none placeholder:p-1 no_spinner1"
            />
            <h1 style={{width:"20%",color:"white",fontWeight:"bold"}}>{location.state.assetToTrade}</h1>
          </div>

          {/* Price Information */}
          {/* <div className="flex justify-between">
            <h1></h1>
            <h1 className="text-sm">NAN USD</h1>
          </div> */}

          {/* Order Limit */}
          {/* <h1 className="text-sm">Order Limit</h1> */}
          <div className="flex justify-between items-center mt-2" style={{color:"white"}}>
            <h1>Min</h1>
            <h1>Max</h1>
          </div>

          {/* Min and Max Inputs with Increment/Decrement Buttons */}
          <div className="flex gap-4">
            <div style={{borderColor:"transparent"}} className={`w-1/2 flex border rounded-md p-1 items-center`}>
              <button
                onClick={decrementMinValue} style={{color:"white"}}
                className="bg-[#1DD55E] px-2 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                value={minValue}
                className="w-full ml-2 outline-none"
                readOnly
              />
              <button
                onClick={incrementMinValue} style={{color:"white"}}
                className="bg-[#1DD55E] px-2 py-1 rounded-r-md"
              >
                +
              </button>
              <span style={{color:"white",fontWeight:"bold"}}>NGN</span>
            </div>
            <div style={{borderColor:"transparent"}} className={`w-1/2 flex border rounded-md p-1 items-center`}>
              <button
                onClick={decrementMaxValue} style={{color:"white"}}
                className="bg-[#1DD55E] px-2 py-1 rounded-l-md"
              >
                -
              </button>
              <input
                type="number"
                value={maxValue}
                className="w-full ml-2 outline-none"
                readOnly
              />
              <button
                onClick={incrementMaxValue} style={{color:"white"}}
                className="bg-[#1DD55E] px-2 py-1 rounded-r-md"
              >
                +
              </button>
              <span style={{color:"white",fontWeight:"bold"}}>NGN</span>
            </div>
          </div>

          {/* Additional Information */}
          {/* <div className="flex justify-between items-center">
            <h1 className="text-sm">NAN USDT</h1>
            <h1 className="text-sm">NAN USDT</h1>
          </div> */}

          {/* Payment Time Limit */}
          <h1 className="mt-1" style={{color:"white",marginTop:"10px"}}>Payment Time Limit</h1>
          <div className="w-full h-full p-1 mt-4 py-1 rounded-md  flex items-center" style={{marginTop:"0px"}}>
            <button
              onClick={decrementPaymentTime} style={{color:"white"}}
              className="bg-[#1DD55E] px-2 py-1 rounded-l-md"
            >
              -
            </button>
            <input
              type="number"
              value={paymentTime}
              placeholder="15 minutes"
              className="w-full outline-none border-none"
              readOnly
            />
            <button
              onClick={incrementPaymentTime} style={{color:"white"}}
              className="bg-[#1DD55E] px-2 py-1 rounded-r-md"
            >
              +
            </button>
          </div>

          {/* Buttons with Loading Effect */}
          <div>
            <Link to="/postadd" state = {{isSell:location.state.is_sell, assetToTrade:location.state.assetToTrade, priceMargin:location.state.priceMargin, adType: location.state.adType, amount:amount, minOrderLimit:minValue, maxOrderLimit:maxValue, elapsTime:paymentTime}}>
            <button
              onClick={handleNextClick}  style={{backgroundImage:"linear-gradient(black,rgb(11, 34, 11))"}}
              className="bg-[#1DD55E] w-full mb-1 mt-4 rounded-md py-2 text-white flex items-center justify-center"
              disabled={isLoadingNext}
            >
              {isLoadingNext ? <div className="spinner"></div> : "Next"}
            </button>
            </Link>
           <Link to="/addvert">
           <button
              onClick={handlePreviousClick}  style={{backgroundImage:"linear-gradient(black,rgb(11, 34, 11))"}}
              className="bg-[#1DD55E] w-full rounded-md py-2 text-white flex items-center justify-center"
              disabled={isLoadingPrevious}
            >
              {isLoadingPrevious ? <div className="spinner"></div> : "Previous"}
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
