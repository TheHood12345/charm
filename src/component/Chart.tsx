import { FaArrowDown91, FaBatteryEmpty, FaCircle } from "react-icons/fa6";
import { useEffect, useState } from "react";
//import { Long } from "./Long";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export const Chart = () => {
  //const [value, setValue] = useState(0.00823);
  const location = useLocation();
  const navigate = useNavigate();
  let userToken = localStorage.getItem("userToken");
  let [av_balance, set_av_balance] = useState({currency:"",balance:0});
  let [us_balance, set_us_balance] = useState({currency:"",balance:0});
  let [drag_value, set_drag_value] = useState<number>(50);
  let [buy, setBuy] = useState(true);
  let [isBuying, setIsBuying] = useState(false);
  let [c_price, set_c_price] = useState({Symbol:"",currentPrice: 0.0});
  

  let [asset, setAsset] = useState(`${location.state?.choosen_coin.symbol}`);
  let [amount, setAmount] = useState(0);
  let [tradeType, setTradeType] = useState("buy");
  let [orderType,setOrderType] = useState<string>("limit");
  let [limitPrice, setLimitPrice] = useState(0.00823);
  let [amountType, setAmountType] = useState("usdt");
  let [pending, set_pending] = useState([{tradeType:"",limitPrice:0.1,amount:1.1,asset:"",createdAt:"2024-08-10T22:05:42.948Z"}]);

  const handleOrderType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderType(event.target.value);
  }
  const handle_drag: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    //set_drag_value((Number(event.target.value)/100) * us_balance.balance);
    set_drag_value(Number(event.target.value));
    setAmount(Number(event.target.value));
  }

  const handleIncrement = () => {
    //setValue((prevValue) => prevValue + 0.00001);
    setLimitPrice((prevValue) => prevValue + 0.00001);
  };

  const handleDecrement = () => {
    //setValue((prevValue) => (prevValue > 0 ? prevValue - 0.00001 : 0));
    setLimitPrice((prevValue) => (prevValue > 0 ? prevValue - 0.00001 : 0));
  };

  const handleCancelAll = () => {
    //setValue(0.00823);
    setLimitPrice(0.00823);
  };

  useEffect(()=>{
    window.scrollTo(0,0);
  },[]);


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
    

    const available_balance = async()=>{
      await axios.get(`https://chambsexchange.onrender.com/api/trans/get-coin-balance/${location.state?.choosen_coin.symbol}`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`
        }
      }) 
        .then((response)=>{

          set_av_balance(response.data);
          console.log(`Available balance success:  ${response.data}`);
        })
        .catch((e)=>{
          console.log("Available balance failed: ",e)
        });
      }

      const usd_balance = async()=>{
        await axios.get(`https://chambsexchange.onrender.com/api/trans/get-coin-balance/usdt`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`
          }
        }) 
          .then((response)=>{
  
            set_us_balance(response.data);
            console.log(`Available balance success:  ${response.data}`);
          })
          .catch((e)=>{
            console.log("Available balance failed: ",e)
          });
        }

    //makeSpot();
    available_balance();
    usd_balance();
  },[])

  useEffect(()=>{
    axios.get(`https://chambsexchange.onrender.com/api/spot/spot-order/${location.state.choosen_coin.symbol}`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`Pending fetch success: ${response.data}`);
      set_pending(response.data);
    }).catch((err)=>{
      console.log(`Pending fetch error: ${err}`);
    })
  },[]);

  useEffect(()=>{
    axios.get(`https://chambsexchange.onrender.com/api/spot/spot/spot-orders`,{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`prices res: ${response.data}`);
      set_c_price(response.data);
    }).catch((err)=>{
      console.log(`price err: ${err}`);
    });
  });


  return (
    <div className="flex justify-center items-center bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto mt-20">
        <div className="flex justify-between">
          <button style={{fontWeight:"bold"}} className="bg-gray-500 w-1/2 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition">
            Trade
          </button>
          <button style={{fontWeight:"bold"}} onClick={()=>{navigate("/orderbook")}} className="bg-gray-800 w-1/2 py-2 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-600 transition">
            Chart
          </button>
        </div>

        <div className="flex justify-between mt-6 py-4">
          <div>
            <h1 style={{fontWeight:"bold"}}>
              {location.state?.choosen_coin.symbol.toUpperCase()}/USDT{" "}
              
              <span className={Math.round(location.state?.choosen_coin.priceChange) < 1? "bg-red-500":"bg-green-500"}bg-green-300 rounded-md py-1 px-4 style={{borderRadius:"3px",paddingLeft:"20px",paddingRight:"20px"}}>
                {Math.round(location.state?.choosen_coin.priceChange) < 1? `${Math.round(location.state?.choosen_coin.priceChange)}%`: `+${Math.round(location.state?.choosen_coin.priceChange)}%`}
              </span>
            </h1>
          </div>
          {/* <div>
            <h1 className="flex gap-4 justify-center items-center">
              <p className="text-green-600">0.00%</p>
              <h2></h2>
              <p>...</p>
            </h1>
          </div> */}
        </div>

        <div className="flex justify-between mt-5 gap-2">
          <div className="w-1/2 py-4 p-2">
            <div className="flex justify-between">
              <button onClick={()=>{
                setBuy(true);
                setTradeType("buy");
                setAsset(av_balance.currency);
                setAmountType("usdt");
                }} style={{opacity: `${buy==true? 1: 0.1}`,fontWeight:"bold"}} className="bg-green-600 w-1/2 py-1 hover:bg-green-600 focus:outline-none  transition">
                BUY
              </button>
              <button onClick={()=>{
                setBuy(false);
                setTradeType("sell");
                setAsset(us_balance.currency);
                setAmountType(`${av_balance.currency}`)
                }} style={{opacity: `${buy==false? 1: 0.1}`,fontWeight:"bold"}} className="bg-red-600 w-1/2 py-1 hover:bg-red-700 focus:outline-none transition">
                SELL
              </button>
            </div>

            <div className="text-white mt-3">
              <div className="flex justify-between p-1 gap-2">
                <h1>Available</h1>

                {buy == true? 
                <p>{us_balance.balance}  {us_balance.currency}</p>:
                <p>{av_balance.balance}  {av_balance.currency}</p>
                }
              </div>
              <div className="bg-gray-800 rounded-md py-2 flex justify-between p-2">
                {/* <h1>Limit</h1>
                <p>v</p> */}
                <select value={orderType} onChange={handleOrderType} style={{width:"100%",height:"100%",backgroundColor:"transparent",color:"white"}}>
                  <option value="limit" style={{backgroundColor:"black"}} selected>Limit</option>
                  <option value="market" style={{backgroundColor:"black"}}>Market</option>
                </select>
              </div>

              {
                orderType == "limit"?
                <div className="bg-gray-800 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>{limitPrice.toFixed(5)}</h1>
                  <div className="flex gap-2 text-xl">
                    <button
                      onClick={handleDecrement}
                      className="hover:text-red-400 transition"
                    >
                      -
                    </button>
                    <button
                      onClick={handleIncrement}
                      className="hover:text-green-400 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>:

              null

              }
              {
                orderType == "limit"?
                <>
              <p className="py-2">= {drag_value} USD</p>
              <div className="bg-gray-800 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>QTY</h1>
                  <p>{buy == false? "USDT": av_balance.currency}</p>
                </div>
              </div>
              </>:
              null

              }

              <div>
                {/* <Long /> */}
                <input type="range" step={"25"} value={drag_value} onChange={handle_drag}  max={Number(us_balance)} min={0} style={{width:"100%",height:"3px",borderColor:"red"}}/>
              </div>
              <div className="bg-slate-800 rounded-md mt-3">
                <div className="flex justify-between p-2">
                  <h1>Order value 
                    <input type="number" value={drag_value} onChange={handle_drag} style={{color:"red",backgroundColor:"transparent",width: "100%"}} min={0} max={Number(us_balance.balance)} />
                    </h1>
                  <p>{buy == true? "USDT": av_balance.currency}</p>
                  {/* <select style={{width:"100%",height:"100%",backgroundColor:"transparent",color:"white"}}>
                    <option value="usdt" style={{backgroundColor:"black"}} selected>USDT</option>
                    <option value={`${av_balance.currency}`} style={{backgroundColor:"black"}}>{av_balance.currency}</option>
                    </select> */}
                </div>
              </div>

              {/* <div className="bg-gray-800 rounded-md mt-3 text-center">
                <h1>TP/SL</h1>
              </div> */}

              {/* <div className="mt-3">
                <div className="flex justify-between p-2">
                  <h1>
                    <input type="checkbox" />
                    <span>Post-only</span>
                  </h1>
                  <p>GTC</p>
                </div>
              </div> */}
              <div className="mt-8">
                {
                  buy == true?
                <button onClick={makeSpot} style={{fontWeight:"bold"}} className="bg-green-500 py-4 w-full py-1 rounded-md text-white text-lg hover:bg-green-600 transition">
                    {isBuying == true? "Processsing Request": `Buy ${av_balance.currency}`}
                </button>:
                <button onClick={makeSpot} style={{fontWeight:"bold"}} className="bg-red-500 w-full py-4 rounded-md text-white text-lg hover:bg-green-600 transition">
                {isBuying == true? "Processsing Request": `Sell ${av_balance.currency}`}
              </button>
                }
              </div>
            </div>
          </div>

          <div className="w-1/2 py-4 p-2">
            <div className="flex justify-between">
              <h1 className=" w-1/2 py-2 text-start p-2">
                Price
                <div>(USDT)</div>
              </h1>
              <p className="w-1/2 py-2 text-end p-2">
                QTY
                <div>({location.state.choosen_coin.symbol.toUpperCase()})</div>
              </p>
            </div>
            <div className="mt-4">
              <div className="py-2 mb-2">
                {
                  pending.map((pend,index)=>(
                    <>
                    {
                      pend.tradeType == "sell" && pend.asset == `${location.state?.choosen_coin.symbol}`?
                      <div key={index} className="flex justify-between">
                        <h1 className="text-red-600">{pend.limitPrice.toFixed(3)}</h1>
                        <p>{pend.amount.toFixed(1)}k</p>
                      </div>:
                      null
                    }
                    

                    </>
                  ))
                }
                

                <p className="text-xl" style={{fontWeight:"bold", color:"gray"}}>{c_price.currentPrice}</p>
                <h5  style={{fontWeight:"bold", color:"gray"}}>= {c_price.currentPrice.toFixed(1)} USD</h5>
              </div>
              <div className="py-2">

              {
                  pending.slice(-10).sort((a,b)=> new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((pend,index)=>(
                    <>
                    {
                      pend.tradeType == "buy"?
                      <div key={index} className="flex justify-between">
                        <h1 className="text-green-600">{pend.limitPrice.toFixed(3)}</h1>
                        <p>{pend.amount.toFixed(1)}k</p>
                      </div>:
                      null
                    }
                    

                    </>
                  ))
                }

                {/* <div className="flex justify-between gap-2" style={{marginTop: "20px",width:"100%"}}>
                  <button style={{overflow:"hidden",width:"100%"}} className="w-[40%] bg-green-600 p-2 hover:bg-green-400 transition">
                    <span className="h-3 w-3 border px-2 bg-green-300">B</span>
                    11%
                  </button>
                  <button style={{overflow:"hidden",width:"100%"}} className="w-[60%] bg-red-800 p-2 hover:bg-red-500 transition">
                    89% <span className="h-3 w-3 border px-2">$</span>
                  </button>
                </div>
                <div className="flex justify-between mt-2">
                  <button className="bg-gray-500 px-10 hover:bg-gray-600 transition">
                    0.00001
                  </button>
                  <div className="h-5 w-5 rounded-md border"></div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-2 flex justify-between p-2">
          <div>
            <div className="flex gap-4">
              <h1>Orders (1)</h1>
              <p>Assets</p>
              <h5>Tools (0)</h5>
            </div>
          </div>
          <p className="flex gap-1">
            <FaCircle />
            <FaBatteryEmpty />
          </p>
        </div>
        <div className="mt-4">
          <div></div>
          <div className="flex justify-between p-2">
            <div className="flex justify-center items-center">
              <input type="checkbox" className="mr-2" />
              All Markets <span className="ml-2">All Types</span>
              <FaArrowDown91 className="ml-3" />
            </div>
            <button
              onClick={handleCancelAll}
              className="hover:text-red-400 transition"
            >
              Cancel All
            </button>
          </div>
          <hr className="w-full h-1 bg-slate-100 mt-4" />
        </div>
        <div className="min-h-screen mt-10">
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center hover:bg-red-500 transition">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center hover:bg-red-500 transition">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
          <div className="flex justify-between items-center p-4">
            <h1 className="flex gap-2">
              AVAIL/USDT{" "}
              <span className="px-4 rounded-md bg-red-400 flex justify-center items-center hover:bg-red-500 transition">
                sell
              </span>
            </h1>
            <p>Limit</p>
          </div>
        </div>
      </div>
    </div>
  );
};
