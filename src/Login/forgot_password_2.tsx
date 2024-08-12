import logo from "../asset/chambit.svg";
import { useNavigate } from "react-router-dom";

export const ForgotPasswordSuccess = () =>{

    
    const navigate = useNavigate();
  
    
    return (
        <div className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen" style={{overflowY:"auto"}}>
        <div className="w-full max-w-sm">
          <div className="flex justify-center mb-6">
            <img src={logo} alt="Logo" className="h-[50px] mt-10" />
          </div>
          <h1 className="text-2xl mt-5 font-bold text-center">
             A password reset link has been sent to your email. Click on it to reset your password.
          </h1>
           
          <button
            className="w-full bg-blue-600 rounded-lg py-2 mt-10 mb-2 text-md text-white font-bold"
            
            onClick={async()=>{
                await navigate("/new-password")
            }}
          >
            ok
          </button>
        </div>
      </div>
    )
}