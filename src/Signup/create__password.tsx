import { ChangeEvent, useState } from "react";
import axios from "axios";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { useNavigate, useLocation} from "react-router-dom";

export const CreatePassword = () => {

  const [loading,setIsLoading] = useState(false);


  const location = useLocation();
  const navigate = useNavigate();

  const [ps,setPs] = useState("");

  

  const handlePs = (e: ChangeEvent<HTMLInputElement>) => {
    setPs(e.target.value);
  };

  const createAccount = async()=>{
    setIsLoading(true);
    await axios.post("",{
      email: location.state.email.trim(),
      country: location.state.country.trim(),
      password: ps.trim()
    }).then((response)=>{
      console.log("registration success: ",response.data);
      setIsLoading(false);
      
      if(response.data.status == "SUCCESS"){
        navigate("/home");
      }
    }).catch((err)=>{
      console.log("registeration faild: ", err)
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
        <h1 className="text-2xl mt-3 font-bold text-center">
          Create your Password
        </h1>
          <div className="mb-4" style={{paddingTop:"30px"}}>
            <input
              type="password" style={{paddingTop:"20px",paddingBottom:"20px",color:"white"}}
              name="password"
              placeholder="Password"
              value={ps}
              onChange={handlePs}
              className="w-full py-2 rounded-md border bg-transparent p-2 outline-none hover:border-green-400"
            />
          </div>
          <p>{ps}</p>
       
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
          "Creating account..."
        </button>)
          }
          
        {/* </form> */}
      </div>
    </div>
  );
};
