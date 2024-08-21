import { FaArrowDown, FaArrowUp } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Spot11 = () => {
  
  const [dropdown, setDropdown] = useState(false);
  const [price, setPrice] = useState(4.0255);
  

  let [buy, setBuy] = useState(true);
  let [isBuying, setIsBuying] = useState(false);
  const [is_deleting, set_is_deleting] = useState(false);
  const navigate = useNavigate()

  const location = useLocation();
  let [t_change,set_t_change] = useState({priceChange:-1,currentPrice:-1});

  let [asset] = useState(location.state.choosen_coin.symbol);
  let [orderType, setOrderType] = useState("limit");
  let [tradeType, setTradeType] = useState("buy");
  let [limitPrice, setLimitPrice] = useState<number>(0.0000);
  let [amount, setAmount] = useState(0);
  let [amountType, setAmountType] = useState("USDT");
  let [usdt_value, set_usdt_value] = useState<any>();
  let [chambs_value, set_chambs_value] = useState<any>();

  let [b_bal,set_b_bal] = useState({currency:"",balance:-1});
  let [s_bal,set_s_bal] = useState({currency:"",balance:-1});

  let [spot_order, set_spot_order] = useState([{tradeType:"",limitPrice:0.1,amount:1.1,asset:"",createdAt:"2024-08-10T22:05:42.948Z"}]);
  
  let [chambsPrice, setChambsPrice] = useState({currentPrice:0});
  let [singlePrice, setSinglePrice] = useState([{pair:"",tradeType:"",limitPrice:0.1,amount:1.1,asset:"",createdAt:"2024-08-10T22:05:42.948Z",_id:""}]);

  const [index_min,set_index_min] = useState<number>(0);
  const [index_max,set_index_max] = useState<number>(4);

  const userToken = localStorage.getItem("userToken");

  const [logout] = useState(false);




  useEffect(()=>{
    const minValues = [0,7,14];
    const maxValues = [7,14,21];

    let minIndex = 0;
    let maxIndex = 0;

    const intervalId = setInterval(()=>{
      set_index_min(minValues[minIndex]);
      set_index_max(maxValues[maxIndex]);

      minIndex = (minIndex + 1) % minValues.length;
      maxIndex = (maxIndex + 1) % maxValues.length;
    }, 1000);

    return () => clearInterval(intervalId);
  },[]);


  useEffect(()=>{
    const storedTime = localStorage.getItem("startTime");
    const currentTime = new Date().getTime();
  
    if(storedTime){
      if(24 * 60 * 60 * 1000 - (currentTime - parseInt(storedTime, 10)) <= 0){
            localStorage.removeItem("userToken");
            localStorage.removeItem("startTime");
            navigate("/");
      }else{
        const timer = setTimeout(()=>{
            localStorage.removeItem("userToken");
            localStorage.removeItem("startTime");
            navigate("/");
        },24 * 60 * 60 * 1000 - (currentTime - parseInt(storedTime, 10)));
  
        return clearTimeout(timer);
      }
    }else{
      navigate("/");
    }
    },[]);


  useEffect(()=>{
    window.scrollTo(0,0);
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
  },[])


  const fetchSpot1 = async()=>{
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

  }

  

  const fetchPending1 = async()=>{
    await axios.get(`https://chambsexchange.onrender.com/api/spot/spot-order/${location.state.choosen_coin.symbol}`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`price single fetch success: ${response.data}`);
      setSinglePrice(response.data);
    }).catch((err)=>{
      console.log(`price fetch error: ${err}`)
    });
    }

    

    useEffect(()=>{
        fetchSpot1();
        fetchPending1();
    
    }, []);




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
  }) 
    .then((response)=>{
      console.log(`Spot success: asset: ${asset} amount: ${amount} tradeType: ${tradeType} orderType: ${orderType} limitPrice: ${limitPrice} amountType: ${amountType} ${response.data.trade.pair}`);
      setIsBuying(false);
      fetchSpot1();
      fetchPending1();
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

  

  const increasePrice = () => {
      setPrice(price + 0.0001);
      let x = limitPrice + 0.0001;
      setLimitPrice(x);
  };

  const decreasePrice = () => {
    if (limitPrice > 0) {
      setPrice(price - 0.0001);
      let x  = limitPrice - 0.0001;
      setLimitPrice(x);
    }else{
      setLimitPrice(0.00);
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

    getBuyBalance();
    getSellBalance();
    getPriceChange();
  },[]);


  const handle_drag: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setAmount(Number(event.target.value));
  }

  const handle_amount_change = (event: React.ChangeEvent<HTMLInputElement>) => {
    let inVal = event.target.value;
    setAmount(Number(inVal));
  }

  
  const [lim,setLim] = useState(false);

  const lim_focus: React.ChangeEventHandler<HTMLInputElement> = ()=>{
    setLim(true);
  }
  const lim_blur: React.ChangeEventHandler<HTMLInputElement> = ()=>{
    setLim(false);
  }
  const handle_limit = (event: React.ChangeEvent<HTMLInputElement>) => {

    let inVal = event.target.value;
     setLimitPrice(Number(inVal));
  }
  
  const handle_blur: React.ChangeEventHandler<HTMLInputElement> = () => {
    if(buy == true){
      let x = Number(amount) / Number(t_change.currentPrice);
      set_chambs_value(x);
      console.log(x);
    }
    if(buy == false){
      let x = Number(amount) * Number(t_change.currentPrice);
      set_usdt_value(x)
      console.log(x);
    }
  }

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

  const cancelAll = async()=>{
    set_is_deleting(true);
    await axios.delete(`https://chambsexchange.onrender.com/api/spot/cancel-order/asset/${asset}`,{
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((res)=>{
      console.log(res);
      set_is_deleting(false);
    }).catch((err)=>{
      console.log(err);
      set_is_deleting(false);
    });
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20 flex flex-col">
      <div className="flex justify-between items-center">
          <button className="bg-green-500 hover:bg-orange-500 px-10 py-2 rounded-md">Spot</button>
          {
            logout == false?
            (<Link to="/pp">
            <button className="bg-transparent border border-green-500 b-green-500 hover:bg-green-500 px-10 py-2 rounded-md">P2P</button>
          </Link>):
          <Link to="/login">
          <button className="bg-green-500 px-10 py-2 rounded-md">Please login</button>
        </Link>
          }
        </div>

        
        <Link to="/market" className="flex justify-between items-center mt-10">
          <h1 className="text-1xl">
            {location.state.choosen_coin.symbol.toUpperCase()}/USDT{" "}
            <span style={{paddingLeft:"10px",paddingRight:"10px"}} className={`text-sm ${location.state.choosen_coin.priceChange < 1? "bg-red-600": "bg-green-600"} rounded-md`}>{location.state.choosen_coin.priceChange? location.state.choosen_coin.priceChange.toFixed(2): "0.00"}%</span>
          </h1>
        </Link>

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
                      item.asset == location.state.choosen_coin.symbol.toUpperCase() && item.tradeType == "sell" && index < index_max && index > index_min?
                      <div key={index} className="flex justify-between ">
                        <h1  style={{color:"red",fontWeight:"bold",backgroundColor:"rgba(128,0,0,0.1)"}} className="text-red-600">{item.limitPrice.toFixed(3)}</h1>
                        <p  style={{color:"white",fontWeight:"bold",paddingLeft:"12px",backgroundColor:"rgba(128,0,0,0.1)"}} className="text-red-600 bg-red-500">{item.amount.toFixed(1)}</p>
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
                    item.asset == location.state.choosen_coin.symbol.toUpperCase() && item.tradeType == "buy" && index < index_max && index > index_min?
                    (
                      <div key={index} className="flex justify-between ">
                        <h1 style={{color:"green",fontWeight:"bold",backgroundColor:"rgba(0,128,0,0.1)"}}  className="text-green-600 bg-green-500">{item.limitPrice.toFixed(3)}</h1>
                        <p style={{color:"white",fontWeight:"bold",paddingLeft:"12px",backgroundColor:"rgba(0,128,0,0.1)"}} className="text-green-600  bg-green-500">{item.amount.toFixed(1)}</p>
                      </div>):
                    null
                  }
                  </>
                ))
              }
              
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
                {/* <h1>{limitPrice.toFixed(4)}</h1> */}
                <input type="number" className="no_spinner1" value={lim == false? limitPrice.toFixed(4): limitPrice} onFocus={lim_focus} onBlur={lim_blur} onChange={handle_limit} style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",width: "100%"}}/>
              
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
            <input type="range"  onChange={handle_drag} min={0} max={buy == true? b_bal.balance.toFixed(1): s_bal.balance.toFixed(1)} style={{width:"100%",height:"3px",borderColor:"red"}}/>
                    
            <div style={{marginTop: "0px",marginBottom:"10px",display:"flex",alignItems:"center",justifyContent:"center"}} className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                
                
              <input type="number" placeholder="Amount" className="no_spinner1" value={Number(amount)} onBlur={handle_blur} onChange={handle_amount_change} style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",width: "100%"}} />
                <h1 style={{color:"yellow",fontSize:"10px"}}>{buy == true? "USDT": asset}</h1>
                
              </div>
              
            </div>
            {/* https://chambsexchange.onrender.com/api/spot/get-coin/chambs */}
            <div style={{marginTop: "0px",display:"flex",alignItems:"center",justifyContent:"center"}} className="bg-gray-800 mt-4 py-2 rounded-md">
              <div className="flex justify-between items-center px-2 text-white">
                
                
              <input disabled type="number" className="no_spinner1" value={buy==true? Number(chambs_value).toFixed(4): Number(usdt_value).toFixed(4)} onChange={handle_drag} style={{color:"white",fontWeight:"bold",backgroundColor:"transparent",width: "100%"}}/>
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
                onClick={
                    makeSpot
                } style={{fontWeight:"bold",opacity:`${isBuying==true ? 0.3: 1}`}}
                className={`${buy==true? "bg-green-700": "bg-red-700"} w-full py-2 rounded-md text-white transition duration-200 ease-in-out transform hover:scale-10`}
                disabled={isBuying}
              >
                {isBuying==true ? "Processing Request" : buy==true? "BUY": "SELL"}
              </button>
            </div>
          </div>
        </div>
        <div style={{marginTop:"40px",width:"100%",paddingRight:"10px",paddingLeft:"10px",paddingBottom:"40px",paddingTop:"40px",backgroundColor:'black'}}>


        {
          logout == false?
          (<div style={{marginTop:"40px",width:"100%",paddingRight:"10px",paddingLeft:"10px",paddingBottom:"40px",paddingTop:"40px",backgroundColor:'black'}}>
          <div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h2 style={{textAlign:"end",cursor:"pointer",color: "white",paddingLeft:"20px",paddingRight:"20px",borderRadius:"5px",fontWeight:"bold"}}>Assets</h2>
            <p onClick={
              cancelAll
            } style={{textAlign:"end",cursor:"pointer",color:"red",paddingLeft:"20px",paddingRight:"20px",borderRadius:"5px",fontWeight:"bold"}}>Cancel all</p>
          </div>

        {
              singlePrice.slice(-10).sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((item,index)=>(
                // <p>{item.pair}</p>
              <div key={index} className="flex justify-between items-center py-5">
              <div className="text-sm">
                <h2  style={{opacity:`${is_deleting == true? 0.2: 1}`}}>{item.pair}</h2>
                <span  style={{opacity:`${is_deleting == true? 0.2: 1}`}}>{item.limitPrice}+</span>
              </div>
              <div className="flex gap-4">
                <h2  style={{opacity:`${is_deleting == true? 0.2: 1}`}}>{item.amount.toFixed(2)}</h2>
                <button style={{opacity: `${is_deleting == true? 0.2: 0.4}`}} className={`px-2 ${item.tradeType == "buy"? "bg-green-800": "bg-red-800"} text-white font-bold py-2 rounded-md`}>
                    {item.tradeType == "buy"? "Buy": "Sell"}
                </button>
                <button onClick={async()=>{
                  set_is_deleting(true);
                  await axios.delete(`https://chambsexchange.onrender.com/api/spot/cancel-order/:${item._id}`,{
                    headers: {
                      Authorization: `Bearer ${userToken}`
                    }
                  }).then((res)=>{set_is_deleting(false);console.log(res.data)}).catch((e)=>{set_is_deleting(false);console.log("some error: ",e)});
                }} style={{backgroundColor:"red",borderRadius:"100px"}} className={`px-2 ${item.tradeType == "buy"? "bg-green-800": "bg-red-800"} text-white font-bold py-2 rounded-md`}>
                    x
                </button>
              </div>
            </div>
              ))
            }
  
            </div>):
            null
  
          }

        </div>
        
        
        
      </div>
      
    </div>
  );
};
