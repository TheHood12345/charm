import { useState, useEffect } from "react";
//import { RiDeleteBin5Line } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const DepositeCrypto = () => {

  const [selectedType, setSelectedType] = useState("Crypto");
  const navigate = useNavigate();

  //let [coin,setCoin] = useState([{symbol:"eth",name:"Ethereum"}]);

  let [coins,setCoins] = useState([""]);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      axios
        .get("https://chambsexchange.onrender.com/api/address/all-unique-curerency",
          {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log("Deposit API RESPONSE:", response.data);
          setCoins(response.data);
          
        })
        .catch((error) => {
          console.error("Error making deposit:", error);
        });
    } else {
      console.warn("No token found");
    }

    
  }, []);

  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="text-center p-2">
            <div className="flex gap-4">
              <div className="w-full bg-slate-700 rounded-full flex gap-2">
                <CiSearch className="mt-1 ml-2" />
                <input
                  type="text"
                  className="w-full bg-transparent text-sm outline-none"
                  placeholder="Please select your preferred pairs"
                />
              </div>
              <Link to="/home">Cancel</Link>
            </div>
            <div className="mb-3 flex gap-3 mt-4 text-start pl-3">
              <button
                onClick={() => setSelectedType("Crypto")}
                className={`${
                  selectedType === "Crypto"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Crypto
              </button>
              <button
                onClick={() => setSelectedType("Fiat")}
                className={`${
                  selectedType === "Fiat"
                    ? "underline underline-offset-4 text-[#fed503]"
                    : ""
                }`}
              >
                Fiat
              </button>
            </div>
          </div>
          <hr />
        </div>

        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-24">
          <div className="mt-4">
            {/* <div className="flex items-center justify-between p-2">
              <h1>Search History</h1>
              <RiDeleteBin5Line />
            </div> */}
            <div className="p-2 flex gap-4">
              <Link to="/depositcrypto" state="TON">
                <button className="px-2 bg-slate-700 rounded-md">TON</button>
              </Link>
              <Link to="/depositcrypto" state="USDT">
                <button className="px-2 bg-slate-700 rounded-md">USDT</button>
              </Link>
              <Link to="/depositcrypto" state="BNB">
                <button className="px-2 bg-slate-700 rounded-md">BNB</button>
              </Link>
              <Link to="/depositcrypto" state="SOL">
                <button className="px-2 bg-slate-700 rounded-md">SOL</button>
              </Link>
            </div>
          </div>
          {

            

          coins.map((item,index)=> (
            <>
            { item != "NOT"?
            (<div
              key={index}
              onClick={()=>{
                navigate("/depositcrypto", {state:item.toUpperCase()});
              }}
              className="block p-2 cursor-pointer"
            >
              <div className="flex items-center">
                <FaCircle />
                <p style={{fontWeight:"bold",paddingLeft:"10px"}}>
                  {item}
                  <span className="text-sm text-slate-500" style={{fontWeight:"normal"}}>{item}</span>
                </p>
              </div>
            </div>):

(<div
  key={index}
  
  className="block p-2 cursor-pointer"
>
  <div className="flex items-center">
    <FaCircle />
    <p className="text-slate-500" style={{fontWeight:"bold",paddingLeft:"10px"}}>
      {item}
      <span className="text-sm text-slate-500" style={{fontWeight:"normal"}}>{item}</span>
    </p>
  </div>
</div>)
          
            }
          </>
        
        ))
          



          }
        </div>
      </div>
    </div>
  );
};
