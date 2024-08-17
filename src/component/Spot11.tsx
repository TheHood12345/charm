import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { Long } from "./Long";
// import { FcFinePrint } from "react-icons/fc";
// import { TradeComponent } from "./TradeComponent";
import { useState, useEffect } from "react";
import axios from "axios";

export const Spot11 = () => {
  //const [open, setOpen] = useState(false);
  const [loading] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  //const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(4.0255);
  //const [coin, set_coin] = useState(useState({symbol:"chambs",usd:0,priceChange:0}));
  //const [coins, set_coins] = useState(useState([{symbol:"",usd:0,priceChange:0}]));

  //let [coins, set_coins] = useState([{symbol:"",usd:0,priceChange:0}]);

  let [buy, setBuy] = useState(true);
  let [isBuying, setIsBuying] = useState(false);
  const navigate = useNavigate()

  const location = useLocation();
  let [t_change,set_t_change] = useState({priceChange:-1,currentPrice:-1});

  let [asset] = useState(`${location.state === null? "CHAMBS": location.state.choosen_coin.symbol}`);
  let [orderType, setOrderType] = useState("limit");
  let [tradeType, setTradeType] = useState("buy");
  let [limitPrice, setLimitPrice] = useState(0.0000);
  let [amount, setAmount] = useState(0);
  let [amountType, setAmountType] = useState("USDT");
  let [usdt_value, set_usdt_value] = useState(0);
  let [chambs_value, set_chambs_value] = useState(0);

  let [b_bal,set_b_bal] = useState({currency:"",balance:-1});
  let [s_bal,set_s_bal] = useState({currency:"",balance:-1});

  let [spot_order, set_spot_order] = useState([{tradeType:"",limitPrice:0.1,amount:1.1,asset:"",createdAt:"2024-08-10T22:05:42.948Z"}]);
  
  let [chambsPrice, setChambsPrice] = useState({currentPrice:0});
  let [singlePrice, setSinglePrice] = useState([{pair:"",tradeType:"",limitPrice:0.1,amount:1.1,asset:"",createdAt:"2024-08-10T22:05:42.948Z"}]);

  

  const userToken = localStorage.getItem("userToken");

  useEffect(()=>{
    const checkToken = async()=>{
      await axios.get("https://chambsexchange.onrender.com/api/auth/check-logout",{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        if(response.data.loginCheck == false){
          navigate("/");
        }
      }).catch((err)=>{
        console.log(err);
      });
    }

    checkToken();
  },[]);


  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);


  // useEffect(()=>{
  //   const getSportOrders = async()=>{

  //     await axios.get("https://chambsexchange.onrender.com/api/spot/get-coins",{
  //       headers: {
  //         Authorization: `Bearer ${userToken}`
  //       }
  //     }).then((response)=>{
  //       console.log(`Spot order success: ${response.data.priceChange}`);
  //       set_coins(response.data);
  //       // set_coins.forEach((x)=>{
  //       //   if(x.symbol == "CHAMBS"){
  //       //     set_coin(x)
  //       //   }
  //       // })
  //       for(let x=0; x< coins.length; x++){
  //         if(coins[x].symbol == "CHAMBS"){
  //           set_coin(coins[x]);
  //         }
  //       }

  //     }).catch((e)=>{
  //       console.log(`Couldn not fetch spot order: ${e}`)
  //     });
  //   }

  //   getSportOrders();
  // },[])

  const makeSpot = async()=>{
    setIsBuying(true);
    await axios.post("https://chambsexchange.onrender.com/api/spot/execute-spot",{
      asset: asset,
      amount: amount,
      tradeType: tradeType,
      orderType: orderType,
      limitPrice: limitPrice,
      amountType: amountType
    },
  {
    headers: {
      Authorization: `Bearer ${userToken}`
    }
  }) //api/trans/get-coin-balance/bnb
    .then((response)=>{
      console.log(`Spot success:  ${response.data}`);
      setIsBuying(false);
    })
    .catch((e)=>{
      console.log("Spot trading failed: ",e);
      setIsBuying(false);
    });
  }

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  const HandleDerop = () => {
    setDropdown(!dropdown);
  };

  // const handleSubmit = () => {
  //   setOpen(!open);
  // };

  // const handleSell = () => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //     // Add your logic here after the loading effect
  //   }, 2000); // Adjust the timeout duration as needed
  // };

  // const increaseQuantity = () => {
  //   setQuantity(quantity + 1);
  // };

  // const decreaseQuantity = () => {
  //   if (quantity > 0) {
  //     setQuantity(quantity - 1);
  //   }
  // };

  const increasePrice = () => {
    setPrice(price + 0.00001);
    setLimitPrice(limitPrice + 0.0001);
  };

  const decreasePrice = () => {
    if (price > 0) {
      setPrice(price - 0.0001);
      setLimitPrice(limitPrice - 0.001);
    }
  };

  useEffect(()=>{
    const getBuyBalance = async()=>{
      await axios.get(`https://chambsexchange.onrender.com/api/trans/get-coin-balance/USDT`,{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        console.log(`get bal success: ${response.data.balance}`);
        set_b_bal(response.data);
      }).catch((err)=>console.log(`get bal error: ${err}`));
    }
  
    const getSellBalance = async()=>{
      await axios.get(`https://chambsexchange.onrender.com/api/trans/get-coin-balance/${location.state.choosen_coin.symbol}`,{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        console.log(`get sell success: ${response.data.balance}`);
        set_s_bal(response.data);
      }).catch((err)=>console.log(`get bal error: ${err}`));
    }

    const getPriceChange = async()=>{
      await axios.get(`https://chambsexchange.onrender.com/api/spot/get-coin/${location.state.choosen_coin.symbol}`,{
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }).then((response)=>{
        console.log(`get tc success: ${response.data.currentPrice}`);
        set_t_change(response.data);
        setLimitPrice(response.data.currentPrice)
      }).catch((err)=>console.log(`get tc error: ${err}`));
    }

    //const x = Math.round(limitPrice);
    

    getBuyBalance();
    getSellBalance();
    getPriceChange();
  },[]);


  const handle_drag: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    //set_drag_value((Number(event.target.value)/100) * us_balance.balance);
    //set_drag_value(Number(event.target.value));
    setAmount(Number(event.target.value));
    if(buy == true){
      let x = Number(amount) / Number(t_change.currentPrice);
      set_chambs_value(x);
    }
    if(buy == false){
      let x = Number(amount) * Number(t_change.currentPrice);
      set_usdt_value(x)
    }
  }

  useEffect(()=>{
    axios.get(`https://chambsexchange.onrender.com/api/spot/spot-orders`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`prices res: ${response.data}`);
      set_spot_order(response.data);
    }).catch((err)=>{
      console.log(`price err: ${err}`);
    });
  },[]);

  useEffect(()=>{
    axios.get(`https://chambsexchange.onrender.com/api/spot/prices/${location.state.choosen_coin.symbol}`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`price fetch success: ${response.data}`);
      setChambsPrice(response.data);
    }).catch((err)=>{
      console.log(`price fetch error: ${err}`)
    });
  }, []);

  useEffect(()=>{
    axios.get(`https://chambsexchange.onrender.com/api/spot/spot-order/${location.state.choosen_coin.symbol}`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`price single fetch success: ${response.data}`);
      setSinglePrice(response.data);
    }).catch((err)=>{
      console.log(`price fetch error: ${err}`)
    });
  }, []);

//https://chambsexchange.onrender.com/api/spot/spot-order/bnb
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
        <div className="flex justify-between items-center">
          <button className="bg-gray-500 px-10 py-2 rounded-md">Spot</button>
          <Link to="/pp">
            <button className="bg-gray-500 px-10 py-2 rounded-md">P2P</button>
          </Link>
        </div>

        {/* subheader */}
        <Link to="/market" className="flex justify-between items-center mt-10">
          <h1 className="text-1xl">
            {location.state.choosen_coin.symbol.toUpperCase()}/USDT{" "}
            <span style={{paddingLeft:"10px",paddingRight:"10px"}} className={`text-sm ${location.state.choosen_coin.priceChange < 1? "bg-red-600": "bg-green-600"} rounded-md`}>{location.state.choosen_coin.priceChange? location.state.choosen_coin.priceChange.toFixed(2): "0.00"}%</span>
          </h1>
          {/* <p>200x</p> */}
          {/* <div className="flex gap-2">
            <h1>icon</h1>
            <p>..</p>
          </div> */}
        </Link>
        {/* trade side component */}

        <div className="min-h-[500px] bg-black p-4 rounded-md mt-5 text-black flex justify-between gap-2">
          <div className="w-1/2 bg-black text-white">
            <div>
              <div className="flex justify-between p-2">
                <div>
                  <h1>Price</h1>
                  <p className="text-center">(USDT)</p>
                </div>
                <div>
                  <h1>Amount</h1>
                  <p className="text-center">
                      ({location.state.choosen_coin.symbol.toUpperCase()})
                  </p>
                </div>
              </div>


              <div className="mt-4">

                {
                  spot_order.slice(-10).sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((item,index)=>(
                    <>
                    {
                      item.asset == location.state.choosen_coin.symbol.toUpperCase() && item.tradeType == "sell" && index < 10?
                      <div key={index} className="flex justify-between ">
                        <h1 className="text-red-600">{item.limitPrice.toFixed(3)}</h1>
                        <p>{item.amount.toFixed(1)}</p>
                      </div>:
                      null
                    }
                    </>
                  ))
                }

                <div className="mt-4 text-center">
                  <h1 className="text-2xl text-green-500">{chambsPrice.currentPrice}</h1>
                  <p>${chambsPrice.currentPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>

            <div className="bg-black">

              {
                spot_order.slice(-10).sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((item,index)=>(
                  <>
                  {
                    item.asset == location.state.choosen_coin.symbol.toUpperCase() && item.tradeType == "buy" && index < 10?
                    <div key={index} className="flex justify-between ">
                      <h1 className="text-green-600">{item.limitPrice.toFixed(3)}</h1>
                      <p>{item.amount.toFixed(1)}</p>
                    </div>:
                    null
                  }
                  </>
                ))
              }
              

              <div className="p-2 flex justify-between items-center gap-2">
                {/* <button
                  onClick={decreasePrice}
                  className="bg-gray-600 px-7 p-2 flex mt-2  mr-2 items-center justify-between rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  <p> 0.0001</p>
                  <div>
                    <FaArrowDown />
                  </div>
                </button> */}
                {/* <div className="h-8 w-10 bg-blue-500 rounded-md mt-2 flex justify-center items-center">
                  <FcFinePrint size={25} className="text-white text-center" />
                </div> */}
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex mt-2">
              <button onClick={()=>{
                setBuy(true);
                setTradeType("buy");
                setAmountType("USDT")
              }} style={{opacity: `${buy==true? 1: 0.1}`,fontWeight:"bold",color:"white"}}  className="bg-green-600 w-1/2 py-2 rounded-md">Buy</button>
              <button onClick={()=>{
                setBuy(false);
                setTradeType("sell");
                setAmountType(asset);
              }}  style={{opacity: `${buy==false? 1: 0.1}`,fontWeight:"bold",color:"white"}}  className="bg-red-600 w-1/2 py-2 rounded-md">Sell</button>
            </div>
            {/* <p style={{color:"red"}}>{amountType} {limitPrice} {amount} {orderType} {tradeType} {asset} hdjshfjsh</p> */}

            <div className="bg-gray-800 mt-6 py-2 rounded-md">
              <div
                className="flex justify-between items-center px-2 text-white"
                onClick={HandleDerop}
              >
                <p> </p>
                <h1 style={{fontWeight:"bold"}}>{orderType == "limit"? "Limit": orderType == "market"? "Market": null}</h1>

                {dropdown ? (
                  <FaArrowDown onClick={HandleDerop} />
                ) : (
                  <FaArrowUp onClick={HandleDerop} />
                )}
              </div>
            </div>
            {dropdown && (
              <div style={{width:"100%",paddingTop:"10px",paddingBottom:"10px",color:"white",backgroundColor:"transparent"}} className=" rounded-lg shadow-lg ">
                <div onClick={()=>{
                  setOrderType("limit");
                  setDropdown(false);
                }} style={{width:"100%",display:"flex",backgroundImage:"linear-gradient(to right,gray,black)",fontWeight:"bold",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"10px",paddingTop:"5px",paddingBottom:"5px",color:"orange"}} className="rounded-lg shadow-lg">
                  Limit
                </div>

                <div onClick={()=>{
                  setOrderType("market");
                  setDropdown(false);
                }} style={{width:"100%",display:"flex",backgroundImage:"linear-gradient(to left,gray,black)",fontWeight:"bold",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"5px",paddingBottom:"5px",color:"orange"}} className="rounded-lg shadow-lg">
                  Market
                </div>
              </div>
            )}

            { orderType == "limit"?
            <div className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <button
                  onClick={decreasePrice}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  -
                </button>
                <h1>{limitPrice.toFixed(4)}</h1>
                <button
                  onClick={increasePrice}
                  className="text-white px-2 py-1 rounded-md transition duration-200 ease-in-out transform hover:scale-105"
                >
                  +
                </button>
              </div>
            </div>:
            null

            }

            {/* <p className="text-white py-2">${price.toFixed(2)}</p> */}
            <input type="range"  onChange={handle_drag}  max={100} min={0} style={{width:"100%",height:"3px",borderColor:"red"}}/>
                    
            <div style={{marginTop: "0px",marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"center"}} className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                
                
                <input type="number" className="no_spinner1" value={Number(amount)} onChange={handle_drag} style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",width: "100%"}} />
                <h1 style={{color:"yellow",fontSize:"10px"}}>{buy == true? "USDT": asset}</h1>
                
              </div>
              
            </div>
            {/* https://chambsexchange.onrender.com/api/spot/get-coin/chambs */}
            <div style={{marginTop: "0px",display:"flex",alignItems:"center",justifyContent:"center"}} className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                
                
                <input type="number" className="no_spinner1" value={buy==true? Math.round(chambs_value): Math.round(usdt_value)} onChange={handle_drag} style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",width: "100%"}} min={0} />
                <h1 style={{color:"yellow",fontSize:"10px"}}>{buy == true? asset: "USDT"}</h1>
                
              </div>
              
            </div>
            

            

            {/* <div className="py-4">
              <Long />
            </div> */}
            <div style={{overflow:"none"}} className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-center items-center px-2 text-white">
                <h1 className="text-xl">{buy == true? <span>{`${b_bal.balance.toFixed(1)}`} <span style={{color:"yellow",fontSize:"8px"}}>USDT Available</span></span>: <span>{`${s_bal.balance.toFixed(1)}`} <span style={{color:"yellow",fontSize:"8px"}}> {location.state.choosen_coin.symbol.toUpperCase()} Available</span></span>}</h1>
              </div>
            </div>

            {/* <div className="flex text-white gap-2 mt-4">
              <input type="checkbox" />
              <p>
                TP/SL <span></span>
              </p>
            </div> */}

            {/* <div className="bg-gray-800 mt-2 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                <p>Avail</p>
                <p className="h-3 w-3 rounded-full bg-blue-600 flex justify-center items-center text-sm">
                  +
                </p>
              </div>
            </div> */}

            <div className="mt-4">
              <button
                onClick={makeSpot} style={{fontWeight:"bold"}}
                className={`${buy==true? "bg-green-700": "bg-red-700"} w-full py-2 rounded-md text-white transition duration-200 ease-in-out transform hover:scale-10`}
                disabled={loading}
              >
                {isBuying==true ? "Processing Request" : buy==true? "BUY": "SELL"}
              </button>
            </div>
          </div>
        </div>
        <div style={{marginTop:"40px",width:"100%",paddingRight:"10px",paddingLeft:"10px",paddingBottom:"40px",paddingTop:"40px",backgroundColor:'black'}}>

          {
            singlePrice.slice(-10).sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((item,index)=>(
              // <p>{item.pair}</p>
            <div key={index} className="flex justify-between items-center py-5">
            <div className="text-sm">
              <h2>{item.pair}</h2>
              <span>{item.limitPrice}+</span>
            </div>
            <div className="flex gap-4">
              <h2>{item.amount.toFixed(2)}</h2>
              <button style={{opacity: "0.4"}} className={`px-2 ${item.tradeType == "buy"? "bg-green-800": "bg-red-800"} text-white font-bold py-2 rounded-md`}>
                  Pending..
              </button>
              {/* <Link to="/orderbook">
                <button className="px-2 bg-green-600 text-white font-bold py-2 rounded-md">
                  +184.33%
                </button>
              </Link> */}
            </div>
          </div>
            ))
          }

        </div>
        
        
        
      </div>
      
    </div>
  );
};
