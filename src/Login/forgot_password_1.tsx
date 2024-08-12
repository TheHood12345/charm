import { useState } from "react";
//import { FaEyeSlash, FaEye } from "react-icons/fa6";
import axios from "axios";
import logo from "../asset/chambit.svg";
import { useNavigate } from "react-router-dom";

export const ForgotPassword = ()=>{

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Explicitly type the state

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post("https://backend.chambit.exchange/api/users/reset-passord-link", {
        email
      });
      console.log("Login successful:", response.data);
      if(response.data.message == "Password reset email sent successfully."){
        navigate("/forgot-password-success")
      }
      // Handle successful login (e.g., store tokens, redirect)
    } catch (err) {
      console.error("Reset password failed:", err);
      setError("Reset password Login failed. Please check your credentials and try again.");
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
        <p className="py-4 text-sm text-center">
          Reset your password by entering your account's email in the field below
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
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold"
            style={{marginTop:"0px"}}
          >
            {loading ? "Resetting password..." : "Reset Password"}
          </button>
          {error && (
            <p className="text-red-500 text-sm text-center mb-4">{error}</p>
          )}
        </form>
      </div>
    </div>
    )
}