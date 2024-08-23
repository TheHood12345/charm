import { ChangeEvent, useState } from "react";
import axios from "axios";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { useNavigate, useLocation} from "react-router-dom";

export const CreatePassword = () => {


  

  const [loading,setIsLoading] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [ps,setPs] = useState("");

  const [mes,setMes] = useState("");

  const handleUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const handlePs = (e: ChangeEvent<HTMLInputElement>) => {
    setPs(e.target.value);
  };

  const createAccount = async()=>{
    setIsLoading(true);
    await axios.post("https://chambsexchange.onrender.com/api/auth/set-password",{
      email: location.state.email,
      userName: userName.trim(),
      password: ps.trim()
    })
    .then((response)=>{

      console.log("registration success: ",response.data);
      setIsLoading(false);
      
      if(response.data.message == "Signup successful"){
        setMes("account created");
        navigate("/login");
      }
      if(response.data.data.message == "Username is already taken, please choose another one."){
        setMes("User name already exist");
      }
    })
    .catch((err)=>{
      setIsLoading(false);
      console.log("registration faild: ", err)
    });
  }

 


  return (
    <div
      className="flex bg-gray-950 text-white justify-center items-center py-20 px-4 h-screen"
    >
      <div className="w-full max-w-sm" style={{width:"100%",height:"100%",paddingTop:"30px"}}>
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-[50px]" />
        </div>
        <h1 className="text-2xl py-4 mt-3 font-bold text-center">
          Create your Password
        </h1>

          <div className="mb-4">
            <input
              type="text"
              name="userName"
              placeholder="Create a user name"
              value={userName}
              onChange={handleUserName}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={ps}
              onChange={handlePs}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>

          <center><address>{mes}</address></center>
       
          {
            loading == false?
            (<button
            type="submit" onClick={createAccount} 
            className="w-full bg-[#1DD55E] rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
          >
            Finish
          </button>):

          (<button
          type="submit" style={{opacity:"0.3"}}
          className="w-full bg-[#1DD55E] rounded-lg py-2 mb-2 text-xl text-white font-bold cursor-pointer hover:bg-orange-500"
        >
          Creating account..
        </button>)
          }
          
        {/* </form> */}
      </div>
    </div>
  );
};
