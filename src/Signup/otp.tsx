import {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Otp = ()=>{

    let [loading, setLoading] = useState(false);
    let location = useLocation();
    let {formData} = location.state;
    let userId = useState(localStorage.getItem("userId"));

    let [res, setRes] = useState();
    let [otpInput, setOtpInput] = useState("");
    
    let navigate = useNavigate();

    const handleOptInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
      setOtpInput(e.target.value);
    };


    const enterOtp = async () => {
        setLoading(true);
   
        try {
          const response = await axios.post(
            "https://backend.chambit.exchange/api/auth/sendotp",
            {
              "userId": userId,
              "otp": otpInput
            }
          );
          console.log("OTP response:", response.data);
          setRes(response.data.status);
          if(response.data.status != "FAILED"){
            await navigate("/");
          }

        } catch (err) {
          console.error("Otp failed:", err);
        } finally {
          setLoading(false);
        }
      };

      const resendOTP = async () => {
        setLoading(true);
    
        try {
          const response = await axios.post(
            "https://backend.chambit.exchange/api/auth/resendotp",
            {
              "userId": userId,
              "email": formData.email
            }
          );
          console.log("OTP response:", response.data);

        } catch (err) {
          console.error("Otp failed:", err);
        } finally {
          setLoading(false);
        }
      };

    return (
        <div style={{flexDirection:"column"}} className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen">

            <h2>{res} An OTP has been sent to your email, <span style={{color:"rgb(143, 98, 44)"}}>{formData.email}</span></h2>
            <h2>Enter the OTP in the box below</h2>

          
            <input type="text" name="otp" value={otpInput} onChange={handleOptInputChange} style={{backgroundColor: "rgb(6, 10, 23)",color:"orange",fontWeight:"bold",border:"2px solid white",marginTop:"20px",paddingTop:"30px",paddingBottom:"30px",paddingLeft:"30px", paddingRight:"30px", textAlign:"center"}}></input>

            <button
            type="submit"
            style={{width:"50%",marginTop:"30px"}}
            disabled={loading}
            onClick={enterOtp}
            className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
            >
            {loading ? "Creating Account..." : "Create Account"}
            </button>
            
            <p style={{color:"red",marginTop:"10px"}}>{res == "FAILED"? "OTP Failed.. Retry": ""}</p>
            
            <p className="py-2 text-center">
            Didn't receive email?{" "}
            <button onClick={resendOTP} type="submit" className="text-orange-500">{"Resend OTP"}</button>
            </p>
            

        </div>
    );

}