import {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Otp = ()=>{

    let [loading, setLoading] = useState(false);
    let location = useLocation();
    // let {formData} = location.state;
    // let userId = useState(localStorage.getItem("userId"));

    let [res, setRes] = useState();
    let [otpInput, setOtpInput] = useState("");

    let [mess,setMess] = useState("");
    
    let navigate = useNavigate();

    const handleOptInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setOtpInput(e.target.value);
    };


    const enterOtp = async () => {
        setLoading(true);
   
        try {
          const response = await axios.post(
            "https://chambsexchange.onrender.com/api/auth/verify-otp",
            {
              email: location.state.email,
              otp: otpInput
            }
          );
          console.log("OTP response:", response.data);
          setRes(response.data.status);
          if(response.data.status == "FAILED"){
            setMess("Otp failed.Check your otp and try again");
          }
          if(response.data.status == "PENDING"){
            navigate("/create_password", {state:{
            email: location.state.email,
            country: location.state.country
          }});
          }
          if(response.data.status == "VERIFIED"){
            //await navigate("/login");
            setMess("Your account has been already verified");
          }

        } catch (err) {
          console.error("Otp failed:", err);
        } finally {
          setLoading(false);
        }
      };

      const resendOTP = async () => {
        setLoading(true);
    
        
          axios.post(
            "https://chambsexchange.onrender.com/api/auth/resendotp",
            {
              "email": location.state.email
            }
          ).then((response)=>{
            if(response.data.status == "PENDING"){
              console.log("OTP response:", response.data);
            }else{
              console.log("OTP response:", response.data);
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
          
            <input type="text" name="otp" value={otpInput} onChange={handleOptInputChange} style={{backgroundColor: "rgb(6, 10, 23)",color:"orange",fontWeight:"bold",border:"2px solid white",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"20px", paddingRight:"20px", textAlign:"center"}}></input>

            <address>{mess}</address>
            <button
            type="submit"
            style={{width:"50%",marginTop:"30px"}}
            disabled={loading}
            onClick={enterOtp}
            className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
            >
            {loading ? "Creating Account..." : "Complete"}
            </button>
            
            <p style={{color:"red",marginTop:"10px"}}>{res == "FAILED"? "OTP Failed.. Retry": ""}</p>
            
            <p className="py-2 text-center">
            Didn't receive email?{" "}
            <button onClick={resendOTP} type="submit" className="text-orange-500">{"Resend OTP"}</button>
            </p>
            

        </div>
    );

}