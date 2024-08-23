import { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const PtopSell = () => {
  //const loading = useState(false);
  const navigate = useNavigate();

  // const handleBuyClick = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false); 
  //     navigate("/selldetail");
  //   }, 2000); 
  // };
  const userToken = localStorage.getItem("userToken");

  useEffect(()=>{
    if(!userToken){
      navigate("/login");
    }
  },[]);  

  const [ads, set_ads] = useState({ads:[{adType:"",assetToTrade:"",amount:12,status:"",priceMargin:10,userName:"",tradeRate:0,currencyCode: "",orderLimit:{min:0,max:0},_id:0,adStatus: ""}]});

  useEffect(()=>{
    const fetchSellAds = async()=>{
      await axios.get("https://chambsexchange.onrender.com/api/ad",{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        console.log(`Buy ads: ${response.data}`);
        set_ads(response.data);
      }).catch((err)=>{
        console.log(`Buy error: ${err}`);
      });
    }
    fetchSellAds();

  },[]);

  return (
    <div style={{paddingBottom:"150px"}} className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm mt-20 flex flex-col">
        <div className="mt-4 flex items-center justify-between">
          <h1 className="text-2xl py-2 mb-4 font-bold">P2P Trading</h1>
          <Link to="/addvert">
          <h1 className="text-xl px-5 rounded-md  mb-2 bg-[#1DD55E]">Create Ad</h1>
          </Link>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-5">
            <Link to="/pp">
              <h1 style={{color:"gray"}} className="text-[#fff] font-bold">Buy</h1>
            </Link>
            <Link to="/ptopsell">
              <h2 className="font-bold text-[#d51d1d]">Sell</h2>
            </Link>
          </div>
          <button className="px-5 rounded-md bg-gray-400">NGN</button>
        </div>

        {/* <div className="flex gap-5 mt-10">
          <h1>USDT</h1>
          <h2>USDC</h2>
          <h1>BTC</h1>
          <h1>ETH</h1>
        </div> */}

        {/* <div className="flex justify-between mt-10">
          <div className="flex gap-5">
            <h1>Amount</h1>
            <h2>All Payment Methods</h2>
          </div>
          <div>Filter</div>
        </div> */}

        <div className="min-h-screen">

        {
            ads.ads.map((item, index)=>(
              <>
              {
                item.adType == "sell" && item.adStatus == "available"?
              //   <div className="mt-10" key={index} style={{backgroundColor:"black",borderRadius:"10px",borderTopLeftRadius:"50px"}}>
              //   <div className="flex justify-between gap-4">
              //     <div className="flex gap-1">
              //       <p style={{fontWeight:"bold"}} className="h-10 w-10 rounded-full bg-green-500 text-base flex justify-center items-center">
              //       {item.userName[0].toUpperCase()}
              //       </p>
              //       <div>
              //         <h1 style={{fontWeight:"bold"}}>{item.assetToTrade}</h1>
              //         <p className="text-sm">{item.userName}</p>
              //         <p className="text-sm"><span style={{color:"gray",opacity:"1"}}>status</span> <span style={{color:"green"}}>{item.status}</span></p>
              //         <div>
              //           <p className="text-xl" style={{color:"white"}}>N {item.tradeRate.toFixed(2)}</p>
              //           {/* <p className="text-sm">Quantity 46,805.506 USDT</p>
              //           <p>Limits 5.00M-23.00m NGN</p>
              //           <p className="u underline">Bank Transfer</p> */}
              //         </div>
              //       </div>
              //     </div>
              //     <div>
              //       <h1>{item.amount} | {item.priceMargin}%</h1>
              //       <button
              //         onClick={handleBuyClick}
              //         className="px-10 bg-[#d51d1d] py-2 rounded-md mt-20"
              //       >
              //         {item.adType}
              //       </button>
              //     </div>
              //   </div>
              // </div>
              
              <div className="mt-10" key={index} style={{backgroundColor:"black",borderRadius:"10px",borderTopLeftRadius:"50px"}}>
                <div className="flex justify-between gap-4">
                  <div className="flex gap-1">
                    <p style={{fontWeight:"bold"}} className="h-10 w-10 rounded-full bg-green-500 text-base flex justify-center items-center">
                    {item.userName[0].toUpperCase()}
                    </p>
                    <div>
                      <h1 style={{fontWeight:"bold"}}>{item.assetToTrade}</h1>
                      <p className="text-sm">{item.userName}</p>
                      <p className="text-sm"><span style={{color:"gray",opacity:"1"}}>status</span> <span style={{color:"green"}}>{item.status}</span></p>
                      <div>
                      <h1 style={{fontWeight:"bold",justifySelf:"center"}} className="text-xl">{item.amount}<span style={{fontWeight:"normal",fontStyle:"italic",color:"gray"}} className="text-sm"> {item.assetToTrade}</span></h1>
                        {/* <p className="text-xl" style={{color:"white",fontWeight:"bold"}}>{item.currencyCode} {item.tradeRate.toFixed(2)}</p> */}
                        {/* <p className="text-sm">Quantity 46,805.506 USDT</p>
                        <p>Limits 5.00M-23.00m NGN</p>
                        <p className="u underline">Bank Transfer</p> */}
                         <p style={{marginTop:"10px",color:"gray"}} className="text-sm">Limits {item.currencyCode} {item.orderLimit.min}-{item.orderLimit.max}</p>
                         <p style={{color:"gray"}} className="u underline">Bank Transfer</p>
                      </div>
                    </div>
                  </div>
                  <div style={{display:"flex",flexDirection:"column", alignItems:"end",justifyContent:"space-between",width:"50%"}}>
                    
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",paddingRight:"10px"}}>
                      <p className="text-sm" style={{color:"gray",fontWeight:"bold"}}>{item.currencyCode}</p>
                      <p className="text-xl" style={{color:"white",fontWeight:"bold"}}>{item.tradeRate.toFixed(2)}</p>
                    </div>
                    <button onClick={()=>{
                        //setLoading(true);
      	               // setTimeout(() => {
                        //  setLoading(false); // Ensure loading state is reset after navigation
                          navigate("/selldetail", {state:{id1:item._id,asset:item.assetToTrade,adStatus:item.adStatus,userName:item.userName,min1:item.orderLimit.min,max1:item.orderLimit.max,am:item.amount}});
                       // }, 2000);
                      }
                     }
              //         //handleBuyClick
              //         //</div>} 
                       style={{marginTop:"50px"}}
                       className="px-10 bg-[#d51d1d] py-2 rounded-md mt-20"
                     >
                       {item.adType}
                    </button>
                  </div>
                </div>
              </div>
              :
              null
                // <p>{item.adType} {item.assetToTrade}</p>
              }
              </>
            ))
          }

          {/* Additional items omitted for brevity */}
        </div>

        {/* {loading && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="border-t-transparent border-solid animate-spin border-[#d51d1d] border-4 rounded-full h-12 w-12"></div>
          </div>
        )} */}
      </div>
    </div>
  );
};
