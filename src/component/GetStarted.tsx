import { useState } from "react";
import { useNavigate } from "react-router-dom";
import pic from "../asset/chambit.png";

export const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/login");
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-img text-white p-4 overflow-y-auto relative">
      <div className="fixed inset-0 bg-black/50" />
      <div className="relative flex flex-col items-center w-full max-w-md mx-auto bg-white bg-opacity-20 rounded-lg p-6 shadow-lg">
        <img
          src={pic}
          alt="Chambit Logo"
          className="w-48 h-48 object-contain"
        />
        <h1 className="text-center mt-5 animate-bounce text-2xl">
          Welcome to Chambit
        </h1>
        <div className="mt-8 w-full">
          <button
            onClick={handleGetStarted}
            className={`w-full py-2 rounded-md font-bold text-xl transition duration-300 ${
              loading ? "bg-gray-500" : "bg-orange-500 hover:bg-blue-600"
            }`}
            disabled={loading}
          >
            {loading ? "Loading..." : "Get started"}
          </button>
        </div>
      </div>
    </div>
  );
};
