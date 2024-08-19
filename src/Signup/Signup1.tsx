import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
//import { FaGoogle } from "react-icons/fa";
// import {  CredentialResponse} from "@react-oauth/google";

export const Signup1: React.FC = () => {
  //const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    // setError(null);

    try {
      const response = await axios.post(
        "https://backend.chambit.exchange/api/auth/signup",
        { email }
      );

      if (response.data.message === "sign up successfully") {
        console.log("Sign up successfully", response.data);
        localStorage.removeItem("userToken");
        localStorage.setItem("userToken", response.data.token);

        // Navigate to another page, e.g., "/home" or "/dashboard"
        navigate("/otp"); // Replace with your target route
      }
    } catch (error) {
      // setError("An error occurred. Please try again.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  let [country, setCountry] = useState([]);

  const fetchCountries = async () => {
    let res = await axios.get(
      "https://backend.chambit.exchange/api/auth/country-list"
    );
    setCountry(Object.values(res.data));
  };


  // const googleAuth = async() =>{
  //   await axios.post("",).then().catch(()=>{});
  // }
  // const handleSuccess = (response: CredentialResponse)=>{
  //   alert(response.credential);
  // }

  // const signIn = useGoogleLogin({
  //   onSuccess: (response)=>{
  //     alert(response);
  //   }
  // })

  // const userToken = localStorage.getItem("userToken");
  const [email,setEmail] = useState<string>(""); 
  // const [con,setCon] = useState("");

  // const em = async()=>{
  //   await axios.post("https://backend.chambit.exchange/api/auth/request-otp",{
  //     email: email,
  //     country: con
  //   },{
  //     headers: {
  //       Authorization: `Bearer ${userToken}`
  //     }
  //   })};

  return (
    <div
      className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
      style={{ overflowY: "auto" }}
    >
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mb-4 mt-5 font-bold text-center">Sign Up</h1>
        <p className="text-sm text-start mb-2">Signup with your email</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 rounded-full border bg-transparent p-2 ml-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-2" style={{width:"100%"}}>
            {/* <input
              type="text"
              placeholder="Country"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 rounded-full border bg-transparent p-2 ml-2 outline-none hover:border-green-400"
            /> */}
             <select
              name="country" 
              onFocus={fetchCountries}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            >
              <option disabled selected>
                Country
              </option>
              {country.map((coun, index) => (
                <option onClick={()=>{alert(12)}}
                  key={index}
                  value={coun}
                  style={{ color: "white", backgroundColor: "rgb(6, 10, 23)" }}
                >
                  {coun}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className={`w-full rounded-full py-2 mt-4 mb-2 text-md text-white font-bold ${
              loading ? "bg-gray-500 cursor-not-allowed" : "bg-[#1DD55E]"
            }`}
            disabled={loading} // Disable the button when loading
          >
            {loading ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-3 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V4a10 10 0 00-10 10h2zm16 0a8 8 0 00-8 8v-2a10 10 0 0110-10h-2z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              "Next"
            )}
          </button>
        </form>
        {/* <GoogleOAuthProvider clientId="676215451002-gaps6dqmillkssr7oreb7l63gtbts8lb.apps.googleusercontent.com" >
          <div style={{width:"100%"}}>
            <GoogleLogin onSuccess={handleSuccess} text="signup_with" shape="circle"  key={"676215451002-gaps6dqmillkssr7oreb7l63gtbts8lb.apps.googleusercontent.com"} />
          </div> */}
          {/* 676215451002-gaps6dqmillkssr7oreb7l63gtbts8lb.apps.googleusercontent.com */}
          {/* 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 */}
          
        {/* </GoogleOAuthProvider> */}
        {/* {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <div className="flex justify-center items-center gap-1">
          <hr className="w-1/2 h-1 text-slate-400" />
          <p className="text-xl mb-1">Or</p>
          <hr className="w-1/2 h-1 text-slate-400" />
        </div>
        <button
          className="w-full bg-transparent border rounded-full py-2 mt-10 mb-2 flex justify-center items-center text-md text-white font-bold gap-4"
          style={{ marginTop: "0px" }}
        >
          <FaGoogle className="text-red-700" /> Sign up with Google
        </button> */}
        
      </div>
    </div>
  );
};