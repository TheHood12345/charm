import { RiErrorWarningFill } from "react-icons/ri";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate, useLocation } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useState, useEffect} from 'react';
import axios from "axios";

// const textItems = [
//   "ERC20",
//   "Arbitrum",
//   "Base Mainnet",
//   "Op Mainnet",
//   "LINEA",
//   "zkSync Era",
//   "Mantle Network ",
//   "Arbitrum Nova",
//   "zkSync Lite",
// ];

export const DepositDetailPage = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate("/depositdetails"); // Navigate to the desired route
  };

  const location = useLocation();
  let [blockchain,setBlockchain] = useState([{name:null}]);


  useEffect(() => {
    const userToken = localStorage.getItem("userToken");

    if (userToken) {
      axios
        .get(`https://chambsexchange.onrender.com/api/address/asset-blockchain/${location.state}`,
          {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((response) => {
          console.log("Blockchain API RESPONSE:", response.data);
          setBlockchain(response.data);
          
        })
        .catch((error) => {
          console.error("Error fetching blockchain:", error);
        });
    } else {
      console.warn("No token found");
    }

    
  }, []);


  return (
    <div className="flex justify-center items-center bg-gray-950 text-white overflow-y-auto">
      <div className="w-full max-w-sm min-h-screen h-auto">
        <div className="bg-gray-950 py-3 fixed top-0 w-full left-0 right-0">
          <div className="flex items-center justify-between p-2">
            <p>Choose a Crypto type</p>
            <MdOutlineCancel
              className="cursor-pointer"
              onClick={handleCancelClick}
            />
          </div>
          <hr className="border-gray-600" />
        </div>
        <div className="min-h-screen overflow-y-auto w-full max-w-sm h-auto mt-14">
          <div className="mt-1 p-2">
            <div className="bg-slate-800 py-3 px-4 rounded-md shadow-md flex gap-1">
              <RiErrorWarningFill className="mt-1 text-orange-500" />

              <Typewriter
                options={{
                  strings: [
                    "Make sure that the chain type you make the deposit to is the one",
                    "you make withdrawals from.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="p-2 mt-4">
          {
              blockchain.map((item,index)=>(
                <div
              key={index}
              onClick={()=>{
                navigate("/depositview", {state: {coin:`${location.state}`,network:`${item.name}`}});
              }}
              className="block p-2 cursor-pointer"
              >
                <p key={index} className="text-sm font-semibold mb-4">
                   {item.name}
                </p>
            </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};
