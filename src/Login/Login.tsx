import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from "axios";
import logo from "../asset/chambit.svg";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Explicitly type the state

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://backend.chambit.exchange/api/auth/signin", {
        email,
        password,
      });

      if(response.data.message == "Welcome back"){
        console.log("Login successful:", response.data);
        localStorage.removeItem("userToken");
        localStorage.setItem("userToken", response.data.token);
        navigate("/home")
        
      }
      // Handle successful login (e.g., store tokens, redirect)
    } catch (err) {
      console.error("Login failed:", err);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen" style={{overflowY:"auto"}}>
      <div className="w-full max-w-sm">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px] mt-10" />
        </div>
        <h1 className="text-2xl mt-5 font-bold text-center">
          Login to your Account
        </h1>
        <p className="py-4 text-sm text-center">
          Login to your account by entering your email and password
        </p>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <div className="mb-4 relative" style={{marginBottom:"0px"}}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
            <div
              className="absolute top-0 right-3 flex items-center h-full cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEye className="text-white" />
              ) : (
                <FaEyeSlash className="text-white" />
              )}
            </div>
          </div>
          <p className="py-2 text-center" style={{float: "right",marginTop:"0px"}}>
            <a href="/forgot-password" className="text-orange-500">
              Forgot password?
            </a>
          </p>
          {/* {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )} */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold"
            style={{marginTop:"0px"}}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p className="py-2 text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-orange-500">
              Sign up here
            </a>
          </p>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};
