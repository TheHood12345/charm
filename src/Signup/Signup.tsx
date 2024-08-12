import { useState } from "react";
import axios from "axios";
import logo from "../asset/chambit.svg";
import {useNavigate} from "react-router-dom";

export const Signup = () => {

  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phoneNumber: "",
    password: "",
    agreedToTerms: true,
    country: ""
    
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://backend.chambit.exchange/api/auth/signup",
        formData
      );
      console.log("Signup successful:", response.data.data.userId);
      localStorage.removeItem("userId");
      localStorage.setItem("userId", response.data.data.userId);
      await navigate("/otp", {state: {formData}});
      // Handle successful signup (e.g., redirect to login page)
    } catch (err) {
      console.error("Signup failed:", err);
      setError("Signup failed. Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };


  
  let [country, setCountry] = useState([]);

  const fetchCountries = async()=>{
    let res = await axios.get("https://backend.chambit.exchange/api/auth/country-list");
    setCountry(Object.values(res.data)); 
  };

  return (
    <div style={{height:"100%"}} className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen">
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <h1 className="text-2xl mt-3 font-bold text-center">
          Create your Account
        </h1>
        <p className="py-2 text-sm text-center">
          Login to your account by entering your email and password
        </p>
        <form className="mt-10" onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="userName"
              placeholder="Username"
              value={formData.userName}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full py-2 rounded-md border p-2 bg-transparent outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4">
            <select
              name="country"
              onFocus={fetchCountries}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-500"
            >
              <option disabled selected>Country</option>
              {
                country.map((coun,index)=>
                  (
                  <option key={index} value={coun} style={{color: "white", backgroundColor: "rgb(6, 10, 23)"}}>{coun}</option>
                  )
                )
              }

            </select>
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="flex justify-center items-center gap-4 px-2 mb-2">
            <input type="checkbox" className="h-5 w-5" />
            <span className="text-sm">
              By registering you agree to our Terms and privacy policy.{" "}
              <a href="/privacy-policy" className="text-blue-500 underline">
                See privacy policy
              </a>
            </span>
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
          >
            {loading ? "Submitting details..." : "Submit"}
          </button>
          
          <p className="py-2 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500">
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};
