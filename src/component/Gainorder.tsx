import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface options{
  gainers: boolean,
  losers: boolean,
  hot1: boolean,
  new1: boolean
}

export const Gainorder: React.FC<options> = ({gainers, losers, hot1, new1}) => {

  const userToken = localStorage.getItem("userToken");
  let [coins, set_coins] = useState([{symbol:"CHAMBS",usd:0,priceChange:0}]);

  //const navigate = useNavigate();

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
    <div className="mt-5 w-full bg-gray-950 text-white  py-15 rounded-md slide-in">
      <h1 className="font-bold text-xl px-4">Spot</h1>
      {/* Spot Trading Top */}
      <div>
        <div className="flex justify-between items-center px-4 mt-2">
          <h1>Trading pairs</h1>
          <p>Price</p>
          <h5>24H Change</h5>
        </div>
        {
          coins.map((coin,index)=>(
            <>
            {
              losers == true?
              <>
              {
                coin.priceChange < 1?
              (<div key={index} style={{marginLeft:"10px",display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginTop:"20px"}} className="flex justify-around pb-2 items-center w-full">
              <h4 style={{width:"40%"}}>
              <div>{coin.symbol.toUpperCase()}/USDT</div>
              {/* <div>volume</div> */}
              </h4>
              <p className="px-4" style={{width:"30%"}}>{coin.usd}</p>
              <Link to="/spot11" state={{"choosen_coin":coin}} style={{width:"30%"}}>
              <button className={`px-8 bg-red-500 py-2 rounded-lg`}>
                {coin.priceChange? Math.round(coin.priceChange): 0}%
              </button>
              </Link>
          
              </div>):
              null
              }
              </>
              : gainers == true?
              (<>
              {
              coin.priceChange >= 1?
              (<div key={index} style={{marginLeft:"10px",display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginTop:"20px"}} className="flex justify-around pb-2 items-center w-full">
              <h4 style={{width:"40%"}}>
                <div>{coin.symbol.toUpperCase()}/USDT</div>
              {/* <div>volume</div> */}
              </h4>
              <p className="px-4" style={{width:"30%"}}>{coin.usd}</p>
              <Link to="/spot11" state={{"choosen_coin":coin}} style={{width:"30%"}}>
              <button className={`px-8 bg-green-500 py-2 rounded-lg`}>
                {coin.priceChange? Math.round(coin.priceChange): 0}%
              </button>
              </Link>

              </div>):
              null
            }
              </>):
              hot1 == true?
              (
              <>{
                coin.symbol.toUpperCase() == "CHAMBS"?
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
  
                </div>:

                coin.symbol.toUpperCase() == "CHAMBS"?
                (<div key={index} style={{marginLeft:"10px",display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginTop:"20px"}} className="flex justify-around pb-2 items-center w-full">
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
    
                  </div>):
                  null

                }
                </>):
              new1 == true?
              (
                <>{
                  coin.symbol.toUpperCase() == "CHAMBS" || coin.symbol.toUpperCase() == "NOT"?
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
    
                  </div>:
  
                  coin.symbol.toUpperCase() == "CHAMBS" && coin.symbol.toUpperCase() == "NOT"?
                  (<div key={index} style={{marginLeft:"10px",display:"flex",flexDirection:"row",width:"100%",alignItems:"center",marginTop:"20px"}} className="flex justify-around pb-2 items-center w-full">
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
      
                    </div>):
                    null
  
                  }
                  </>):
              null 
            }
        </>
          ))
        }
        
      </div>
      {/* Spot Trading Down */}
      
      <div>
        
       
      </div>
    </div>
  );
};
