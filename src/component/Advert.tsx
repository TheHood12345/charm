import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { IoMdHeadset } from "react-icons/io";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdArrowDropDown } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

export const Advert = () => {
  const [assetOpen, setAssetOpen] = useState(false);
  const [fiatOpen, setFiatOpen] = useState(false);
  const [percentage, setPercentage] = useState(100.0);
  const [conditionMet, setConditionMet] = useState(false);

  const userToken = localStorage.getItem("userToken");

  const [assetToTrade, setAssetToTrade] = useState("USDT");
  const [priceType, setPriceType] = useState("float");
  const [priceMargin, setPriceMargin] = useState(100);
  const [amount, setAmount] = useState(4000);
  const [elapsTime, setElapsTime] = useState(15);
  const [bankName, setBankName] = useState("Opay");
  const [accountName, setAccountName] = useState("Muekara Tor");
  const [accountNumber, setAccountNumber] = useState("7014970207");
  const [minOrderLimit, setMinOrderLimit] = useState(2000);
  const [maxOrderLimit, setMaxOrderLimit] = useState(2000);
  const [status, setStatus] = useState("online");
  const [adType, setAdType] = useState("sell");

  const [is_sell,set_is_sell] = useState(true);

  const [assetList,setAssetList] = useState([""]);


  // const [ads,setAds] = useState({
  //     assetToTrade: "USDT",
  //     priceType: "float",
  //     priceMargin: "98",
  //     amount: 4000,
  //     elapsTime: 15,
  //     bankName: "Opay",
  //     accountName: "Muekara Tor",
  //     accountNumber: "7014970207",
  //     minOrderLimit: 2000,
  //     maxOrderLimit: 4000,
  //     status: "online",
  //     adType: "sell"
  // });

  useEffect(()=>{

const createAd = async()=>{
    await axios.post("https://chambsexchange.onrender.com/api/ad/sell-ad",{
        assetToTrade: "USDT",
        priceType: "float",
        priceMargin: "98",
        amount: 4000,
        elapsTime: 15,
        bankName: "Opay",
        blockchain: "binance",
        accountName: "Muekara Tor",
        accountNumber: "7014970207",
        minOrderLimit: 2000,
        maxOrderLimit: 4000,
        status: "online",
        adType: "sell"
  },{
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{console.log("res ads",response.data)}).catch((err)=>{console.log(err)});
  }
  createAd();

  },[]);

  useEffect(()=>{

    const fetchAssets = async()=>{
      await axios.get("https://chambsexchange.onrender.com/api/address/all-unique-curerency",{
        headers:{
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        setAssetList(response.data);
        console.log(`${response.data}`);
      }).catch((err)=>{
        console.log(`${err}`);
      })
    }
    fetchAssets();
  },[]);

  

  const handleDecrement = () => {
    setPercentage((prev) => Math.max(prev - 1,50)); // Prevent going below 0
    setPriceMargin((prev) => Math.max(prev - 1,50));
   // setConditionMet((prev) => prev || percentage <= 0); // Update condition based on percentage
  };

  const handleIncrement = () => {
    setPercentage((prev) => Math.min(prev + 1, 105)); // Prevent going above 100
    setPriceMargin((prev) => Math.min(prev + 1, 105));
   // setConditionMet((prev) => prev || percentage >= 100); // Update condition based on percentage
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10">
        <div className="flex justify-between items-center p-2">
          <Link to="/pp">
            <FaArrowLeftLong size={20} />
          </Link>
          <img src={logo} alt="Logo" className="h-10 object-contain" />
          <IoMdHeadset size={20} />
        </div>
      </div>
      <div className="flex-1 p-4 pt-20">
        <div className="text-center">
          <h1 className="text-xl font-bold" onClick={()=>{
            
          }}>Post an Advert</h1>
          <p className="text-sm text-gray-400">Set Type and Price (1/3)</p>

          <div className="flex py-3 mt-4 justify-center items-center">
            <div
              className={`h-5 w-5 rounded-full ${
                conditionMet ? "bg-green-700" : "bg-green-700"
              } text-white flex justify-center items-center transition-all duration-300`}
            >
              1
            </div>
            <div className="h-1 w-[30%] bg-green-700"></div>
            <div className="h-5 w-5 rounded-full bg-gray-700 text-white flex justify-center items-center">
              2
            </div>
            <div className="h-1 w-[30%] bg-gray-700"></div>
            <div className="h-5 w-5 rounded-full bg-gray-700 text-white flex justify-center items-center">
              3
            </div>
          </div>
        </div>
        <hr />
        <div className="bg-gray-800 text-white rounded-md py-4 px-2 mt-5" style={{backgroundColor:"black"}}>
          <div className="bg-[#1DD55E] p-2 flex justify-evenly items-center rounded-md" style={{backgroundColor:"black",width:"100%"}}>
            
            <p className="font-bold text-sm rounded-md" onClick={()=>{set_is_sell(false);}} style={{width:"50%",backgroundColor:"white", opacity:`${is_sell == false? 1: 0.3}`,color:"#1DD55E",textAlign:"center"}}>BUY</p>
            <p className="font-bold text-sm rounded-md" onClick={()=>{set_is_sell(true);}} style={{width:"50%",backgroundColor:"white", opacity:`${is_sell == true? 1: 0.3}`,color:"red",textAlign:"center",marginLeft:"10px"}}>SELL</p>
          </div>
          <div style={{marginBottom:"0px",paddingBottom:"0px",fontWeight:"bold",color:"white"}} className="text-slate-500 flex justify-start items-center p-2 mt-2">
            <h1>Asset</h1>
            {/* <h1>Fiat</h1> */}
          </div>
          <div style={{marginTop:"0px",paddingTop:"0px",width:"100%",}} className="flex justify-between items-center p-2">
            <div style={{backgroundColor:"white",color:`${is_sell? "red": "#1DD55E"}`,width:"50%"}}
              className="bg-[#535654] flex items-center justify-center font-bold text-sm px-4 py-1 rounded-md relative"
              onClick={() => setAssetOpen(!assetOpen)}
            >
              {assetToTrade} <MdArrowDropDown />
              {assetOpen && (
                <>
                <div style={{overflow:"auto"}} className="absolute top-full left-0 w-full mt-1 bg-white text-black rounded-md shadow-lg">
                {
                  assetList.map((item,index)=>(
                    
                    <p key={index} style={{backgroundColor:"white",color:`${is_sell? "red": "#1DD55E"}`,textAlign:"start"}} className="block px-4 py-2 hover:bg-gray-200" onClick={()=>{setAssetToTrade(item);}}>{item}</p>
                    
                  ))
                }
                </div>
                </>
                // <div className="absolute top-full left-0 w-full mt-1 bg-white text-black rounded-md shadow-lg">
                //   <button className="block px-4 py-2 hover:bg-gray-200">
                //     USDT
                //   </button>
                //   <button className="block px-4 py-2 hover:bg-gray-200">
                //     BTC
                //   </button>
                //   <button className="block px-4 py-2 hover:bg-gray-200">
                //     ETH
                //   </button>
                // </div>
              )}

            </div>
            <div style={{backgroundColor:"#1DD55E",color:"white",opacity:"0.4"}}
              className="bg-[#535654] flex items-center justify-center gap-2 font-bold text-sm px-4 py-2 rounded-md relative"
              onClick={() => setFiatOpen(!fiatOpen)}
            >NGN
              {/*  <MdArrowDropDown /> */}
              {/* {fiatOpen && (
                <div className="absolute top-full left-0 w-full mt-1 bg-white text-black rounded-md shadow-lg">
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    NGN
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    USD
                  </button>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    EUR
                  </button>
                </div>
              )} */}
            </div>
          </div>
          <hr style={{borderColor:`${is_sell? "red": "#1DD55E"}`,opacity:"0.4"}}/>
          <div className="mt-8" style={{paddingBottom:"100px",marginTop:"0px"}}>
            {/* <h1 className="text-lg font-bold">Set Your Trading Price</h1> */}
            <div className="flex justify-between items-center rounded-md mt-2">
              {/* <button className="bg-white text-[#1DD55E] px-10 py-1 rounded-md">
                Floating
              </button> */}
              <p className="text-white" style={{color:`${is_sell? "red": "#1DD55E"}`,opacity:"0.4",fontWeight:"bold"}}>Float</p>
            </div>
            {/* <h1 className="mt-1">Tap to Set Your Trading Price Below</h1> */}
            <div style={{backgroundImage:"linear-gradient(black,rgb(11, 34, 11))",display:"flex",flexDirection:"row",alignItems:"center"}} className="bg-[#1DD55E] p-2 mt-2 w-full max-w-md mx-auto rounded-md flex justify-between items-center text-white">
              <button style={{paddingTop:"10px",fontWeight:"bold",paddingBottom:"10px",paddingRight:"10px",paddingLeft:"10px",backgroundColor:"black",borderRadius:"20px",color:"green"}} className="text-2xl" onClick={handleDecrement}>
                -
              </button>
              <p style={{color:"white",fontWeight:"bold"}}>{priceMargin}%</p>
              <button style={{paddingTop:"10px",fontWeight:"bold",paddingBottom:"10px",paddingRight:"10px",paddingLeft:"10px",backgroundColor:"black",borderRadius:"20px",color:"green"}} className="text-2xl" onClick={handleIncrement}>
                +
              </button>
            </div>
            {/* <div className="flex justify-between items-center mt-4">
              <h1 className="text-sm">Your Price</h1>
              <h1 className="text-sm">Highest Order price</h1>
            </div>
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-sm">NGNNaN</h1>
              <h1 className="text-sm">NGN0</h1>
            </div> */}
            <Link to="/secondaddvert" state={{is_sell:is_sell,assetToTrade:assetToTrade,priceMargin:priceMargin,adType:`${is_sell==true? "sell":"buy"}` }} >
              <button style={{backgroundImage:"linear-gradient(black,green)"}}
                className="bg-[#1dd55e] w-full mt-4 rounded-md py-2 text-white"
                // className={`bg-[#1DD55E] w-full mt-4 rounded-md py-2 text-white ${
                //   loading ? "opacity-50 cursor-not-allowed" : ""
                // }`}
                // onClick={handleNextClick}
                // disabled={loading}
              >
                Next
                {/* {loading ? "Loading..." : "Next"} */}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
