import TypingEffect from 'react-typing-effect';

import {
  
  RiLoader4Fill
} from "react-icons/ri";
import { LuArrowDownUp } from "react-icons/lu";
import { CgSwap } from "react-icons/cg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export const SwapComp = () => {
 
  const [isLoading, setIsLoading] = useState(false);
  const userToken = localStorage.getItem("userToken");
  const [coins, set_coins] = useState(["loading"]);

  const [coins_loading1, set_coins_loading1] = useState(true);
  const [coins_loading2, set_coins_loading2] = useState(true);

  const [swap_to, set_swap_to] = useState("");
  const [swap_from, set_swap_from] = useState("");
  const [swap_from_amount, set_swap_from_amount] = useState<number | string>("");
  const [swap_turn, set_swap_turn] = useState(true);

  const [is_swap_to, set_is_swap_to] = useState(false);
  const [is_amount, set_is_amount] = useState(false);

  const [is_success, set_is_success] = useState(false);
  const navigate = useNavigate();

  const [quote, setQuote] = useState({amount:0,received:0,buyToSell:0});
  const [is_previewed,set_is_previewed] = useState(false);




  const handleSwapToChange = async(event: React.ChangeEvent<HTMLSelectElement>)=>{
    set_swap_to(event.target.value);
    set_is_amount(true);
  }
  const handleSwapFromChange = async(event: React.ChangeEvent<HTMLSelectElement>)=>{
    set_swap_from(event.target.value);
    set_swap_from_amount(1);
    console.log(swap_from);
    set_is_swap_to(true);
  }
  const handleSwapFromAmountChange = async(event: React.ChangeEvent<HTMLInputElement>)=>{
    set_swap_from_amount(event.target.value);
    console.log(swap_from_amount);
    console.log(swap_from);
  }
 


  


  useEffect(()=>{
    axios.get("https://chambsexchange.onrender.com/api/address/all-unique-curerency",{
      headers: {
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`Success fetching: ${response.data}`);
      set_coins(response.data);
    }).catch((err)=>{
      console.log(`Error fetching: ${err}`);
    });
  },[]);

  const makeSwap = async()=>{
    setIsLoading(true);

    await axios.post("https://chambsexchange.onrender.com/api/swap/execute-swap",{
      sellAsset: swap_from,
      buyAsset: swap_to
    },{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`swap successful:  ,${response.data}`);
      setIsLoading(false);
    }).catch((err)=>{
      console.log(`swap failed:  ,${err}`);
      setIsLoading(false);
    });
  }

  const getCon = async()=>{
    setIsLoading(true);

    await axios.post("https://chambsexchange.onrender.com/api/swap/get-swap-quote",{
      amount: swap_from_amount,
      sellAsset: swap_from,
      buyAsset: swap_to
    },{
      headers:{
        Authorization: `Bearer ${userToken}`
      }
    }).then((response)=>{
      console.log(`swap successful:  ,${response.data}`);
      setIsLoading(false);
      setQuote(response.data);
    }).catch((err)=>{
      console.log(`swap failed:  ,${err}`);
      setIsLoading(false);
    });
  }




  return (
    <div className="min-h-screen bg-slate-950 py-16 text-white relative">
      <div className="text-center py-2">
      <h1 className="text-md mt-4 text-[#1DD55E]">
          <TypingEffect 
            text={["SWAP your coin"]}
            speed={100}
            eraseSpeed={50}
            eraseDelay={1000}
            typingDelay={500}
            
          />
        </h1>
      </div>
      <hr className="border-gray-600" />
      <div className="mt-10 px-4">

        <div style={{marginBottom:"0px",backgroundColor:"transparent"}} className="bg-gray-700 px-2 py-1 text-white rounded-lg relative ">


          <div  style={{height:"100%",marginBottom:"0px",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}} className="flex justify-between items-center gap-2 mb-4">

          

          <select name="" id="" onClick={()=>{set_coins_loading1(false);}} value={swap_from} onChange={handleSwapFromChange} className="py-2 no_spinner2" style={
            {backgroundColor:"black",fontWeight:"bold",paddingTop:"20px",paddingBottom:"20px",fontSize:15,width:"50%",border:"none",color:"white"}
          }>
            <option selected disabled style={{color:"gray",fontWeight:"bold"}}>Swap From</option>
            {
            coins_loading1 == false?
            coins.map((item, index)=>(
              <>
              {
                item.toUpperCase() == swap_to.toUpperCase() || item == "loading"?
                null:
                <option key={index} value={item} style={{backgroundColor:"black",color:"white"}}>{item}</option>
              }
              </>
              
            )):
            null
          }

          
          </select>

          <input type="number" value={swap_from_amount} placeholder="Amount" onChange={handleSwapFromAmountChange} className="py-2 no_spinner1" style={
            {backgroundColor:"black",opacity:`${is_amount==false? "0.3": 1}`,paddingTop:"20px",paddingBottom:"20px",fontWeight:"bold",fontSize:15,width:"50%",border:"none",color:"green",paddingLeft:"10px",paddingRight:"10px"}
          } disabled={is_amount==false? true: false}/>
          
          </div>
          
        </div>
<div className="flex justify-center">
  <p onClick={()=>{
    set_swap_from(swap_to);
    set_swap_to(swap_from);
    set_swap_turn(!swap_turn);
    set_swap_from_amount(0);
    
  }} className={`text-center rounded-full h-10 w-10 bg-[#1DD55E] flex items-center justify-center ${swap_turn==false? "rotate1": "rotate2"}`}><LuArrowDownUp size={16} className="text-white" /></p>
</div>
<div style={{marginTop:"0px",backgroundColor:"transparent"}}  className="bg-gray-700 px-2 py-1 text-white rounded-lg relative mb-4">
<div  style={{height:"100%",marginBottom:"0px",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}} className="flex justify-between  gap-2 mb-4">
<select name="" id="" onClick={()=>{set_coins_loading2(false)}} value={swap_to} onChange={handleSwapToChange} className="py-2 no_spinner2" style={
  {backgroundColor:"black",opacity:`${is_swap_to==false? 0.3: 1}`,paddingTop:"20px",fontWeight:"bold",paddingBottom:"20px",fontSize:15,width:"50%",border:"none",color:"white"}
} disabled={is_swap_to==false? true: false}>
  <option selected disabled>Swap To</option>
  {
    coins_loading2 == false?
    coins.map((item, index)=>(
      <>
      {
        item.toUpperCase() == swap_from.toUpperCase() || item == "loading"?
        null:
        <option key={index} style={{backgroundColor:"black"}}>{item}</option>
      }
      </>
      
    )):
    null
  }
</select>


<input type="number" value={quote.received.toFixed(5)} className="py-2 no_spinner1" style={
            {backgroundColor:"black",fontSize:15,fontWeight:"bold",width:"50%",border:"none",color:"yellow",
              appearance: "textfield",opacity:"0.3",paddingTop:"20px",paddingBottom:"20px", WebkitAppearance: "none",MozAppearance:"textfield",paddingLeft:"10px",paddingRight:"10px"
            }
          } disabled/>

</div>

</div>
        <div style={{backgroundImage:"linear-gradient(black,rgb(11, 34, 11))",color:"gray",fontWeight:"bold"}} className="p-4 bg-gray-700 text-white rounded-lg mb-4">
          <div className="flex justify-between items-center text-sm">
            <div onClick={getCon} style={{paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",color:"yellow",backgroundColor:"rgba(0,0,0,0.5)", display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
              <CgSwap size={20} />
              <p>Preview Rate</p>
            </div>
            
            {quote.buyToSell.toFixed(2)} USD
          </div>
        </div>
        <button
          onClick={()=>{
            console.log(`${swap_from} ${swap_from_amount} --${swap_to}`);
              makeSwap;
              getCon;
              set_is_success(true);
    setTimeout(()=>{
      navigate("/asset")
    },10000);

          }
            }  style={{backgroundImage:"linear-gradient(to bottom,black,green)",opacity: `${swap_from_amount && swap_from && swap_to? 1: 0.2}`}} 
          className="w-full py-2 rounded-xl text-white bg-[#1DD55E] text-xl transition-transform transform hover:scale-105"
          disabled={swap_from_amount && swap_from && swap_to? isLoading: true}
        >
          {isLoading ? (
            <div className="flex justify-center items-center">
              <span className="animate-spin mr-2">
                <RiLoader4Fill />
              </span>
              Loading...
            </div>
          ) :
          swap_from_amount && swap_from && swap_to?
          
          (
            "Continue"
          ):
          (
            "Check all fields"
          )
          }
        </button>

        <div className="mt-6 px-4 py-9" style={{backgroundColor:"black"}}>
          {/* <div className="flex justify-between">
            <div className="w-1/2 py-6 p-2">
              <ul>
                <li>Provider</li>
                <li>Provider fee</li>
                <li>Slippage tolerance</li>
              </ul>
            </div>
            <div className="w-1/2 py-6 p-2 text-right">
              <ul>
                <li>0x</li>
                <li>47356 DONS (=$3.59)</li>
                <li>7.0%</li>
              </ul>
            </div>
          </div> */}
          {
  is_success == true?
<div style={{width:"100%",height:"100%",top:"0px",left:"0px",position:"absolute",paddingTop:"10px",display:`flex`,paddingBottom:"10px",backgroundImage:"linear-gradient(black,rgba(0, 0, 0,1))",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
  <h2 style={{color:"green",fontWeight:"bold"}}>Success !!</h2>
  <div className="flex justify-between" style={{padding:"10px",backgroundImage:"linear-gradient(black,rgb(11, 34, 11))",width:"80%",borderRadius:"10px"}}>
            <div className="w-1/2 py-6 p-2" style={{width:"50%"}}>
              <ul style={{color:"yellow"}}>
                <li>Swapped:</li>
                <li>Received:</li>
                <li>Charge:</li>
              </ul>
            </div>
            <div className="w-1/2 py-6 p-2 text-right" style={{width:"50%"}}>
              <ul style={{fontWeight:"bold"}}>
                <li>{swap_from_amount} {swap_from}</li>
                <li>{quote.received.toFixed(2)} {swap_to}</li>
                <li>0.0%</li>
              </ul>
            </div>
          </div>

</div>:
null
}
        </div>
      </div>
      
    </div>
  );
};
