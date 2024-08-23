import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SubCard } from "./subCard";
import { RowCard } from "./RowCard";
import { Reward } from "./Reward";
import { Latcard } from "./Latcard";
import { SubNav } from "./SubNav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const SubHeaderComp = () => {

  const navigate = useNavigate();
  const verified = localStorage.getItem("verified");
  const userToken = localStorage.getItem("userToken");

  useEffect(()=>{
    if(!userToken){
      navigate("/login");
    }
  },[]);

  return (
    <>
      <SubNav />
      <div className="flex justify-center items-center bg-black text-white p-4 overflow-y-auto">
        <div className="w-full max-w-sm min-h-screen h-auto mt-20">
          <div className=" py-2 flex justify-center items-center p-2">

            
            {/* // (<button className="bg-slate-600 px-4 text-[#1DD55E] rounded-md text-sm p-2">
            //   Non-vip
            // </button>
            // <button className="bg-slate-600 px-2 rounded-md text-sm p-2 text-[#1DD55E]">
            //   Main Account
            // </button>) */}
            {
              verified?.toString() == "true"?
            (<button className="bg-slate-600 px-4 rounded-md  flex justify-center items-center p-2 text-[#1DD55E] gap-1 text-sm">
              <RiVerifiedBadgeFill />
              Verified ID
            </button>):
            (<button className="bg-slate-600 px-4 rounded-md  flex justify-center items-center p-2 text-[#1DD55E] gap-1 text-sm">
              
              Verify
            </button>)

            }
          </div>
          <SubCard />
          <RowCard />
          <Reward />
          <Latcard />
        </div>
      </div>
    </>
  );
};