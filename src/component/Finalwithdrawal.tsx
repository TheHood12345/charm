import { MdOutlineArrowDropDown } from "react-icons/md";
import { RiArrowDropRightLine } from "react-icons/ri";
import { LuScanLine } from "react-icons/lu";

import { FaPlusCircle } from "react-icons/fa";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

import { useLocation } from "react-router-dom";
import { useState, ChangeEvent } from "react";
import axios from "axios";

export const Finalwithdrawal = () => {

  const location = useLocation();

  let [coin,setCoin] = useState([{symbol:"eth",name:"Ethereum"}]);
  const userToken = localStorage.getItem("userToken");
  let [blockchain,setBlockchain] = useState([{name:"",currencies:""}]);

  let [choosen_coin, set_choosen_coin] = useState(location.state.symbol);
  let [choosen_blockchain, set_choosen_blockchain] = useState("");

  let [total_balance, set_total_balance] = useState(0);
  let [total_values, set_total_values] = useState([{currency:"CHAMBS",balance:-1}]);
  //let [prices, setPrices] = useState([{symbol:"..",usd:0,name:""}]);
  //let [p_total, set_p_total] = useState(-1);
  // let [choosen_coin_balance, set_choosen_coin_balance] = useState("");

  let [wallets,setWallets] = useState([{currency:"",balance:-1}]);
  let [amount_value,set_amount_value] = useState(0);
  let [recipient_address,set_recipient_address] = useState("");

  let [sending, setSending] = useState(false);
  let [block_load, set_block_load] = useState(true);
  //let [coin_load, set_coin_load] = useState(true);

  const handleCoinChange = (event: ChangeEvent<HTMLSelectElement>) =>{
    set_choosen_coin(event.target.value);
  }
  const handleBlockchainChange = (event: ChangeEvent<HTMLSelectElement>) =>{
    set_choosen_blockchain(event.target.value);
  }
  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) =>{
    set_amount_value(parseFloat(event.target.value));
  }
  const handleRecipientAddressChange = (event: ChangeEvent<HTMLInputElement>) =>{
    set_recipient_address(event.target.value);
  }

  const sendCoin = async()=>{

    setSending(true);
    console.log("Please Wait... ",choosen_blockchain);

    await axios.post("https://chambsexchange.onrender.com/api/trans/send",
      {
        amount: amount_value,
        blockchain: choosen_blockchain,
        asset: choosen_coin.toUpperCase(),
        recipientAddress: recipient_address
      },
      {
        headers:{
          Authorization: `Bearer ${userToken}`
        }
      }
    ).then((response)=>{
      console.log("Withdrawal successful:  ",response.data);
      console.log(`${total_values} ${total_balance}`);
      setSending(false);
    }).catch((e)=>{
      console.log("Withdrawal error: ",e.response.data.message);
      setSending(false);
    });

  }
  
  const getBalance = async()=>{
    // await axios.get("https://chambsexchange.onrender.com/api/trans/get-wallet",{
    //   Au
    // })
    if (userToken) {
      await axios
        .get("https://chambsexchange.onrender.com/api/trans/get-wallet", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          // console.log("API walletss res:", response.data);
          
          // console.log(`total wallets: ${response.data.length}`)
          // console.log(`total balance: ${total_balance}`);

          setWallets(response.data);

          //set_choosen_coin_balance(response.data.balance);
          
          let t_bal = 0;
          let t_val = [];

          for(let x=0; x<response.data.length; x++){
            t_bal += response.data[x].balance;
            t_val.push(response.data[x]);
          }

          set_total_balance(t_bal);
          set_total_values(t_val);
          // console.log(t_val);
          // console.log(`This vals are:... ${total_values}`);
        })
        .catch((error) => {
          console.error("Error fetching balance:", error);
        });

        // await axios
        // .get("https://chambsexchange.onrender.com/api/spot/get-coins", {
        //   headers: {
        //     Authorization: `Bearer ${userToken}`,
        //   },
        // })
        // .then((response) => {
        //   console.log("API price response:", response.data);
        //   setPrices(response.data);

        // })
        // .catch((error) => {
        //   console.error("Error fetching price:", error);
        // });

    } else {
      console.warn("No token found");
    }
  
  }
  getBalance();


  const fetchCoins = async()=>{
    //set_coin_load(true);
    if (userToken) {
      axios
        .get("https://chambsexchange.onrender.com/api/spot/get-coins",
          {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          //console.log("Fetching coin API RESPONSE:", response.data);
          //set_coin_load(false);
          setCoin(response.data);
          
        })
        .catch((error) => {
          console.error("Error making deposit:", error);
        });
    } else {
      console.warn("No token found");
    }
  };

  const fetchBlockchain = ()=>{
    set_block_load(true);
    if (userToken) {
      axios
        .get(`https://chambsexchange.onrender.com/api/address/asset-blockchain/${choosen_coin}`,
          {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log("Blockchain API RESPONSE:", response.data);
          set_block_load(false);
          setBlockchain(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching blockchain:", error);
        });
    } else {
      console.warn("No token found");
    }
  };


  return (
    <div className="flex justify-center items-center bg-black p-2 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="p-2 flex gap-4">
            <button>On-Chain</button>
            <p className="text-slate-500">Internal Transfer</p>
          </div>
        </div>

        <div className="min-h-auto overflow-y-auto w-full max-w-sm h-auto mt-5">
          <div className="mt-20 bg-slate-800 p-2 px-2">
            <div className="bg-gray-800 p-2">
              <h1>Coin</h1>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center">
                {/* <div className="flex items-center">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center bg-slate-100">
                    t
                  </div>
                  <span>{location.state.symbol}</span>
                  <span className="ml-1 text-sm text-slate-400">
                    {location.state.name}
                  </span>
                </div> */}
                <select value={choosen_coin} onChange={handleCoinChange} style={{borderWidth:"0px",WebkitAppearance:"none", MozAppearance:"none",appearance:"none"}} 
              name="country"
              onFocus={fetchCoins}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            >
              <option selected>{choosen_coin}</option>
              {
                coin.map((c,index)=>
                  (
                    <>
                    {
                      // block_load == false?
                      c.symbol != location.state.symbol?

                      
                        <option key={index} value={c.symbol} style={{color: "white", backgroundColor: "rgb(6, 10, 23)"}}>{c.symbol}</option>
                      : null
                      // : <option disabled>Loading..</option>
                    }
                    </>
                  
                  )
                )
              }

            </select>
                <MdOutlineArrowDropDown />
              </div>
            </div>

            <div className="bg-gray-800 p-2">
              <div className="flex justify-between items-center">
                <h1>Address</h1>
                <h2 className="flex items-center justify-center">
                  Address Book
                  <RiArrowDropRightLine size={20} className="mt-1" />
                </h2>
              </div>
              <div className="bg-slate-600 rounded-md flex justify-between items-center gap-2 ">
                <div className="flex items-center w-full  gap-2">
                  <input
                    type="text"
                    value={recipient_address}
                    style={{color:"white"}}
                    onChange={handleRecipientAddressChange}
                    placeholder="Input or press and hold to paste the withdrawals address"
                    className="w-[90%] mb-2 py-4 p-2 outline-none text-black bg-transparent text-sm placeholder:text-gray-400 placeholder:whitespace-normal"
                  />
                </div>
                <LuScanLine size={30} className="mr-2" />
              </div>
            </div>

            <div className="bg-gray-800 p-2">
              <h1>Network</h1>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center">
                {/* <div className="flex items-center">
                  <p className="text-sm text-slate-400">
                    Please choose a chain type
                  </p>
                </div> */}
                <select onChange={handleBlockchainChange} style={{borderWidth:"0px",WebkitAppearance:"none", MozAppearance:"none",appearance:"none"}} 
              name="country"
              onFocus={fetchBlockchain}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            >
              <option disabled selected>Please choose a chain type</option>
              {
                blockchain.map((b,index)=>
                  (
                     <>
                    {
                      block_load == false?
                        <option key={index} value={`${b.name}`} style={{color: "white", backgroundColor: "rgb(6, 10, 23)"}}>{b.name}</option>
                      : <option disabled>Loading..</option>
                    }
                     </>
                  
                  )
                )
              }

            </select>
                <MdOutlineArrowDropDown />
              </div>
            </div>
            <div className="bg-gray-800 p-2">
              <div className="flex justify-between">
                <h1>Amount</h1>
                <h1 className="flex items-center gap-1">
                  <span>0</span> <FaPlusCircle className="" />
                </h1>
              </div>
              <div className="bg-slate-600 mt-2 p-2 rounded-md flex justify-between items-center gap-2">
                {/* <div className="flex items-center">
                  <p className="text-sm text-slate-400">
                    Min.Withdrawal Amount:100
                  </p>
                </div> */}
                <div className="mb-4" style={{width:"100%",backgroundColor:"rgba(60, 57, 63, 0.4)",borderRadius:"10px",height:"100%",margin:"0px",borderWidth:"0px",borderColor:"transparent"}}>
            <input
              type="number"
              name="amount"
              onChange={handleAmountChange}
              value = {amount_value}
              max= {100}
              min={0}
              placeholder="0"
              className="w-full py-2 rounded-md p-2 bg-transparent outline-none hover:border-green-400"
            />
          </div>
                {/* {
                  wallets.map((wallet)=> (
                    <h1 className="text-md">
                      {wallet.currency == choosen_coin? `${wallet.balance} ${wallet.currency.toUpperCase()}`: "..."}<span className="text-yellow-600 ">Max</span>
                    </h1>
                  ))
                } */}
                {
                  wallets.map((wallet)=> (
                    wallet.currency.toUpperCase() == choosen_coin.toUpperCase()? 
                    <h1 className="text-md" style={{width:"100%"}}>
                      {`${wallet.balance} ${wallet.currency.toUpperCase()}`}<span className="text-yellow-600 "> available</span>
                    </h1>:
                    null
                  ))
                }
                
              </div>
              <div className="flex justify-between mt-2 items-center">
                <h1>Funding Account:</h1>
                <p>0</p>
              </div>
            </div>
          </div>
          <div className="bg-slate-600 mt-2 p-2 py-4 rounded-md flex justify-between items-center gap-2">
            <div className="w1/2 w-full">
              <h1>Note:</h1>
              <div className="flex gap-2 items-center">
                <p className="text-sm">Daily Remaining Limit:</p>
                <p className="flex items-center gap-1">
                  1,000,00000/1,000,000USDT
                  <IoIosHelpCircleOutline />
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <p className="text-sm">Daily Remaining Limit:</p>
                <p className="flex gap-1 text-sm items-center">
                  Ending With6 EFzoF{" "}
                  <span>
                    <IoIosArrowDown />
                  </span>
                </p>
              </div>
              <h3 className="text-sm mt-4 text-orange-500">
                Need help? please visit our Help Center
              </h3>
              <div className="flex mt-10 justify-between items-center">
                <h4 className=" text-sm">Withdeawal Fees:</h4>
                <h1 className=" text-sm font-bold ml-2">100 1SOL</h1>
              </div>
              <div className="flex gap-2 justify-between items-center">
                <div>
                  <h1 className="text-sm">Amount Recieved Setting</h1>
                  <h1 className=" text-sm font-bold">100 1SOL</h1>
                </div>
                {
                amount_value && choosen_coin && choosen_blockchain?

                sending != true?
                <button style={{color:"white"}}  onClick={
                  sendCoin
                } className="bg-orange-400 px-5 rounded-md text-black py-2">
                   Withdraw {amount_value? amount_value: null} {amount_value? choosen_coin: null}
                </button>:

                <button style={{opacity:"0.5",color:"white"}} className="bg-orange-400 px-5 rounded-md text-black py-2">
                  Processing request
                </button>:

                <button style={{opacity:"0.3",color:"white"}} className="bg-orange-400 px-5 rounded-md text-black py-2">
                    Withdraw
                </button>
                
                }
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
