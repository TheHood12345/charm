import { FaSpeakerDeck } from "react-icons/fa6";
import { Button } from "./Button";
import { GreenBtn } from "./GreenBtn";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Market = () => {

  const userToken = localStorage.getItem("userToken");
  let [coins, set_coins] = useState([{symbol:"CHAMBS",usd:0,priceChange:0}]);

  //const navigate = useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);

  useEffect(()=>{

    const getSportOrders = async()=>{

      await axios.get("https://chambsexchange.onrender.com/api/spot/get-coins",{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        console.log(`Spot order success: ${response.data.priceChange}`);
        set_coins(response.data);

      }).catch((e)=>{
        console.log(`Couldn not fetch spot order: ${e}`)
      });
    }

    getSportOrders();

    const interval = setInterval(()=>{
      getSportOrders();
      console.log("new data");
    }, 5000);

    return ()=> clearInterval(interval)
  },[]);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto relative">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col  ">
        
        <div className="bg-gray-800 flex items-center p-2 gap-2 mt-2 py-2 rounded-md">
          <FaSpeakerDeck className="text-orange-400" />
          <p>Chambit Dual Asset:Avail Now Supported!</p>
        </div>
        
        <hr className="mt-2" />

        
        <div className="flex text-green-700 font-bold justify-between items-center mt-4">
          <h1>Trading Pairs/Vol</h1>
          <h1>Price</h1>
          <h1>24H Change</h1>
        </div>

        {
          coins.map((coin,index)=>(

            <div key={index} style={{marginLeft:"10px",display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginTop:"20px"}} className="flex justify-around pb-2 items-center w-full">
                <h4 style={{width:"40%"}}>
                  <div>{coin.symbol.toUpperCase()}/USDT</div>
                {/* <div>volume</div> */}
                </h4>
                <p className="px-4" style={{width:"30%"}}>{coin.usd}</p>
                <Link to="/spot11" state={{"choosen_coin":coin}} style={{width:"30%"}}>
                <button className={`px-8 ${coin.priceChange < 1 ? "bg-red-500": "bg-green-500"} py-2 rounded-lg`}>
                  {coin.priceChange? Math.round(coin.priceChange): 0}%
                </button>
                </Link>
  
                </div>

          ))
        }
        
      </div>
    </div>
  );
};
