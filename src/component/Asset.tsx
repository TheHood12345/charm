import {
  FaEye,
  FaEyeSlash,
  FaTradeFederation,
  FaWallet,
} from "react-icons/fa6";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import b1 from "./button.jpg";

type VisibilityState = {
  totalEquity: boolean;
  walletBalance: boolean;
  usdt: boolean;
  usdc: boolean;
  kok: boolean;
};

// const iconlist = [
//   {
//     name: "USDT",
//     symbols: "$",
//     subName: "Theater KOK",
//   },
// ];
export const Asset = () => {
  const [isVisible, setIsVisible] = useState<VisibilityState>({
    totalEquity: true,
    walletBalance: true,
    usdt: true,
    usdc: true,
    kok: true,
  });

  const toggleVisibility = (key: keyof VisibilityState) => {
    setIsVisible((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  let [total_balance, set_total_balance] = useState(-1);
  let [total_values, set_total_values] = useState([{currency:"CHAMBS",balance:-1}]);
  //let [price, setPrice] = useState({symbol:"..",currentPrice:0});
  let [prices, setPrices] = useState([{symbol:"..",usd:0,name:""}]);

  let [p_total, set_p_total] = useState(-1);
  let p_t = 0;

  let [checked, setChecked] = useState(false);




  useEffect(() => {

    const fetch1 = async() =>{
      const userToken = localStorage.getItem("userToken");

      if (userToken) {
        await axios
          .get("https://chambsexchange.onrender.com/api/trans/get-wallet", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            console.log("API response main:", response.data);
            
            console.log(`total wallets: ${response.data.length}`)
            console.log(`total balance: ${total_balance}`);
            
            let t_bal = 0;
            let t_val = [];
  
            for(let x=0; x<response.data.length; x++){
              t_bal += response.data[x].balance;
              t_val.push(response.data[x]);
            }
  
            set_total_balance(t_bal);
            set_total_values(t_val);
            console.log(t_val);
            console.log(`This vals are:... ${total_values}`);
          })
          .catch((error) => {
            console.error("Error fetching balance:", error);
          });

          await axios
          .get("https://chambsexchange.onrender.com/api/spot/get-coins", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            console.log("API price response:", response.data);
            setPrices(response.data);    

          })
          .catch((error) => {
            console.error("Error fetching price:", error);
          });

      } else {
        console.warn("No token found");
      }
    }

    fetch1();

    
  }, []);


  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 text-white p-4 overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen mt-20">
        <div className="py-4 bg-gray-800 rounded-lg flex justify-between items-center p-4 text-lg w-full">
          <div>
            <div>
              <h2 className="flex items-center gap-2 text-2xl">
                Total Equity
                {isVisible.totalEquity ? (
                  <FaEye
                    onClick={() => toggleVisibility("totalEquity")}
                    title="Hide"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => toggleVisibility("totalEquity")}
                    title="Show"
                  />
                )}
              </h2>
              {isVisible.totalEquity ? (
                <>
                  <h1>
                    {/*{total_balance} and */}{p_total} <span>USD</span>
                  </h1>
                  {/* <p>=--BTC</p> */}
                </>
              ) : (
                <h1>******</h1>
              )}
              {/* <p>
                Today's P&L -2.41 <span>USD</span>
              </p> */}
            </div>
          </div>
          <div className="mb-16 text-sm text-green-700">0.00%</div>
        </div>
        {/* second card */}
        <div className="py-4 bg-gray-800 rounded-lg flex justify-between items-center p-2 text-lg w-full mt-2">
          <p>Wallet balance</p>
          {isVisible.walletBalance ? (
            <FaWallet
              onClick={() => toggleVisibility("walletBalance")}
              title="Hide"
            />
          ) : (
            <FaEye
              onClick={() => toggleVisibility("walletBalance")}
              title="Show"
            />
          )}
          {isVisible.walletBalance ? <p>0.00 USD</p> : <p>******</p>}
        </div>
        {/* third card */}
        <div className="py-4 rounded-lg flex justify-between items-center p-2 text-lg w-full mt-2 gap-4">
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <Link to="/depositdetails">
              <FaTradeFederation />
              <p className="p-1 text-sm">Deposit</p>
            </Link>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <Link to="/withdrawal">
              <FaTradeFederation />
              <p className="p-1 text-sm">Withdraw</p>
            </Link>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <Link to="/swap">
              <FaTradeFederation />
              <p className="p-1 text-sm">Swap</p>
            </Link>
          </div>
          <div className="w-full py-4 flex justify-center bg-gray-800 flex-col items-center rounded-md">
            <Link to="">
              <FaTradeFederation />
              <p className="p-1 text-sm">Stack</p>
            </Link>
          </div>
        </div>
        {/* fourth card */}
        <div className="flex justify-between items-center p-2 text-lg w-full mt-2">
          <div className="flex flex-col w-full">
            <h1>Crypto</h1>
            <div className="flex py-4 items-center gap-2">
            <input type="checkbox" onChange={()=>{
                setChecked(!checked);
                console.log(checked)
              }} className="p-2" />
              <span className="text-sm">
              {checked==false? "Hide zero balance customize collateral": "View all balances"}
              </span>
            </div>
            
            { 
                total_values.sort((a,b)=>a.currency.localeCompare(b.currency)).map((v, index)=>(

                  <div key={index} className="flex justify-between p-2" style={{display: v.balance==0 && checked==true? "none": "flex"}}>
                  <div className="text-xl flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-green-500 flex justify-center items-center mb-5 mr-1 text-sm">
                      T
                    </div>
                    <div className="flex flex-col">
                      <span>{v.currency}</span>
                      {

                        prices.map((p)=>(
                            p.symbol.toUpperCase() == v.currency.toUpperCase()? 
                                <span className="text-sm ml-1">{p.name}</span>
                            : null
                        ))

                      }

                      
                    </div>
                  </div>
                  <div onClick={() => toggleVisibility("usdt")}>
                    {isVisible.usdt ? (
                      <>
                        <p>{v.balance}</p>
                        {
                          
                          prices.map((p)=>(
                            p.symbol.toUpperCase() == v.currency.toUpperCase()?
                            <>
                            <h5>= {p.usd * v.balance} USD</h5>
                            <img src={b1} style={{width:"0px",height:"0px"}} onLoad={()=>{
                              let a = p.usd * v.balance;
                              p_t += a;
                              set_p_total(p_t);
                              //console.log(p_total);
                            }}/>
                            </>

                            : null
                          ))
                        }
                      </>
                    ) : (
                      <p>******</p>
                    )}
                  </div>
                </div>
                ))
                
              }  
          </div>
        </div>
      </div>
    </div>
  );
};
