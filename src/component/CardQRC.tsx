//import logo from "../asset/QR-removebg-preview.png";
import { IoIosArrowForward } from "react-icons/io";
import { BsCopy } from "react-icons/bs";
import { useState } from "react";
import QRCode from "qrcode.react";


interface GetAddress {
  address: string;
}

const CardQRC: React.FC<GetAddress> = ({address}) => {

  let [copied_text, set_copied_text] = useState("");

  return (
    <div className="mt-4 px-2 p-2 py-4">
      <div className="bg-gray-800 py-5 rounded-md p-2">
        
        <div className="flex items-center justify-center">
          <QRCode value={address}  className="bg-white rounded-md"/>
        </div>
        <div className="bg-gray-900 rounded-md mt-4 py-2" style={{width:"100%"}}>
          <div style={{color:"gray"}} className="flex items-center gap-2 p-2">
            <h1>Wallet address</h1>
            <IoIosArrowForward />
          </div>
          <div className="flex justify-between items-center p-2" style={{width:"100%"}}>
            <h1 style={{width:"80%",userSelect:"all"}} className="text-sm flex-1 break-words mr-2">
            {address}
            </h1>
            <div style={{width:"20%",cursor:"pointer"}} className="flex-shrink-0" onClick={()=>{
              navigator.clipboard.writeText(address).then(()=>{
                set_copied_text("Address copied to clipboard");
                setTimeout(()=>{
                    set_copied_text("");
                },3000);
                
              });
            }}>
              <BsCopy style={{color:"yellow"}} />
            </div>
          </div>
          <p style={{color:"green",width:"100%",fontWeight:"bold",fontStyle:"italic",textAlign:"center"}}>{copied_text}</p>
        </div>
      </div>
    </div>
  );
};

export default CardQRC;
