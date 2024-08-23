import {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Otp = ()=>{

    let [loading, setLoading] = useState(false);
    let [load1, setLoad1] = useState(false);
    let location = useLocation();
    
    let [otpInput, setOtpInput] = useState(0);

    let [mess,setMess] = useState("");
    let [res,setRes] = useState("");
    
    let navigate = useNavigate();

    const handleOptInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setOtpInput(Number(e.target.value));
    };


    const enterOtp = async () => {
        setLoading(true);
   
        try {
          const response = await axios.post(
            "https://chambsexchange.onrender.com/api/auth/verify-otp",
            {
              userId: location.state.userId,
              otp: otpInput.toString()
            }
          );
          console.log("OTP response:", response.data);
          
          if(response.data.status == "FAILED"){
            setMess("Otp failed.Check your otp and try again");
          }
          if(response.data.status == "PENDING"){
            setMess("Please Check your otp and try again");
          }
          if(response.data.status == "VERIFIED"){
            setMess("Your account has been verified successfully");
            await navigate("/create_password", {state: {email: location.state.email}});
          }

        } catch (err) {
          console.error("Otp failed:", err);
        } finally {
          setLoading(false);
        }
      };

      const resendOTP = async () => {
        setLoad1(true);
  
        setMess("");
        setRes("")
        
          axios.post(
            "https://chambsexchange.onrender.com/api/auth/resendotp",
            {
              "email": location.state.email,
              "userId": location.state.userId
            }
          ).then((response)=>{
            setLoad1(false);
            if(response.data.status == "SUCCESS"){
              setRes(`Otp resent to your email ${location.state.email}`);
            }
          }).catch((err)=>{
            console.log(err);
          });
          

        
      };

    return (
        <div style={{flexDirection:"column"}} className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen">
          
          <div style={{width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",paddingLeft:"30px",paddingRight:"30px"}}>
            <h2>An OTP has been sent to your email, <span style={{color:"rgb(143, 98, 44)"}}>{location.state.email}</span></h2>
            <address>Enter the OTP in the box below</address>
          </div>
          
            <input type="text" name="otp" className="no_spinner1" value={otpInput} onChange={handleOptInputChange} style={{backgroundColor: "rgb(6, 10, 23)",color:"orange",fontWeight:"bold",border:"2px solid white",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px", paddingRight:"20px", textAlign:"center"}}></input>
            <p style={{color:"green",marginTop:"10px"}}>{res}</p>
            <p style={{color:"red",marginTop:"10px"}}>{mess}</p>
            <button
            type="submit"
            style={{width:"50%",marginTop:"30px", opacity: `${loading == true? "0.3": "1"}`}}
            disabled={loading}
            onClick={enterOtp}
            className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
            >
            {loading ? "Please wait.." : "Send"}
            </button>
            
            
            
            <p className="py-2 text-center">
            <button disabled={load1} onClick={resendOTP} type="submit" style={{opacity: `${load1 == true? "0.3": "1"}`}} className="text-orange-500">{load1 == true? "Resending OTP.  Please wait.." : "Resend OTP"}</button>
            </p>
            

        </div>
    );

}