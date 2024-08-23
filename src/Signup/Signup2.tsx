import { ChangeEvent, useState } from "react";
import axios from "axios";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
//import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup2 = () => {

  const [loading,setIsLoading] = useState(false);
  const [error] = useState<string | null>(null);


const userToken = localStorage.getItem("userToken");
const [email,setEmail] = useState("");
const [con,setCon] = useState("");

const navigate = useNavigate();

  const handleEmail =(e: ChangeEvent<HTMLInputElement>)=>{
    setEmail(e.target.value);
    console.log(email);
  }
  const handleCon =(e: ChangeEvent<HTMLSelectElement>)=>{
    setCon(e.target.value);
    console.log(con);
  }


  let [country, setCountry] = useState([]);

  const fetchCountries = async () => {
    
    let res = await axios.get(
      "https://backend.chambit.exchange/api/auth/country-list"
    );
    setCountry(Object.values(res.data));
  };

  const sendOtp = async () =>{
    console.log(`country: ${con}, email: ${email}`);
    setIsLoading(true);
    await axios.post("https://chambsexchange.onrender.com/api/auth/request-otp",{
        email: email.trim(),
        country: con
    },{
        headers: {
            Authorization: `Bearer ${userToken}`
        }
    }).then((response)=>{
        setIsLoading(false);
        console.log("user data is:  ", response.data);
        navigate("/otp", {state:{email: response.data.data.email,userId: response.data.data.userId}});
      }
      ).catch((e)=>{
            setIsLoading(false);
            console.log(e)
        });
    
  }

  return (
    <div
      style={{ height: "100%",paddingBottom:"200px" }}
      className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
    >
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <h1 className="text-2xl mt-3 font-bold text-center">
          Create your Account
        </h1>
        <p className="py-2 text-sm text-center">
          Sign up for an account by entering your email and country
        </p>
        {/* <form className="mt-10" onSubmit={handleSubmit}> */}
          {/* <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div> */}
          {/* <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div> */}
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          {/* <div className="mb-4">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div> */}
          {/* <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full py-2 rounded-md border p-2 bg-transparent outline-none hover:border-green-400"
            />
          </div> */}
          <div className="mb-4">
            <select
              name="country" onFocus={fetchCountries}
              value={con} onChange={handleCon}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            >
              <option disabled selected>
                Country
              </option>
              {country.map((coun, index) => (
                <option
                  key={index}
                  value={coun}
                  style={{ color: "white", backgroundColor: "rgb(6, 10, 23)" }}
                >
                  {coun}
                </option>
              ))}
            </select>
          </div>
          {/* <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div> */}
          {/* <div className="flex justify-center items-center gap-4 px-2 mb-2">
            <input type="checkbox" className="h-5 w-5" />
            <span className="text-sm">
              By registering you agree to our Terms and privacy policy.{" "}
              <a href="/privacy-policy" className="text-blue-500 underline">
                See privacy policy
              </a>
            </span>
          </div> */}
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          {
            loading == false?
            (<button
            type="submit" onClick = {sendOtp}
            className="w-full bg-[#1DD55E] rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
          >
            Submit
          </button>):

          <button
          type="submit" style={{opacity:"0.3"}}
          className="w-full bg-[#1DD55E] rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
        >
          Submitting details...
        </button>
          }
          

          <p className="py-2 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500">
              Login here
            </a>
          </p>
        {/* </form> */}
      </div>
    </div>
  );
};
