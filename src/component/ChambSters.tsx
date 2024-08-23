import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import logo from "../asset/NEWLOGO-removebg-preview (1).png";
import { IoMdHeadset } from "react-icons/io";
import { TfiGift } from "react-icons/tfi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  timeRemaining: number; // total time remaining in milliseconds
}

export const ChambSters = () => {

  const startDate = new Date('2024-08-18T16:00:00'); // Change to the specific start date and time
  const targetDate = new Date(startDate.getTime() + 60 * 24 * 60 * 60 * 1000); // 60 days from the start date

  const calculateTimeRemaining = (): TimeRemaining => {
    const now = new Date();
    const timeRemaining = targetDate.getTime() - now.getTime(); // Ensure timeRemaining is a number
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, timeRemaining };
  };

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining());
  const [chal,setChal] = useState("Join challenge");

  const [notify1,setNotify1] = useState(false);

  const navigate = useNavigate();
  const userToken = localStorage.getItem("userToken");

  useEffect(()=>{
    if(!userToken){
      navigate("/login");
    }
  },[]);



  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining();
      setTimeRemaining(remaining);

      if (remaining.timeRemaining <= 0) {
        clearInterval(timer); // Stop the timer
      }
    }, 1000); // Update every second

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);





  return (
    <div className="relative min-h-screen" >
      
      {/* Header */}
      <div className="py-3 fixed top-0 w-full bg-gray-950 z-10 flex justify-between items-center p-2 text-white">
        <Link to="/subhead">
          <FaArrowLeftLong size={20} />
        </Link>
        <img src={logo} alt="Logo" className="h-10 object-contain" />
        <IoMdHeadset size={20} />
      </div>

      <div className="text-white bg-slate-950  mt-20 min-h-screen lg:hidden">
        <div
        style={{width:"100%",paddingBottom:"20px",paddingTop:"20px",backgroundColor:"rgba(0,0,0,0.9)",display:`${notify1 == true? "flex": "none"}`,position:"fixed",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"green",fontWeight:"bold"}}>Copied successfully !!</div>
        

        <div className=" px-4 p-2">
          { timeRemaining.timeRemaining > 0 ?
          (<div className="flex  items-center bg-gradient-to-r from-sky-500 via-purple-900 to-pink-500 p-2 gap-5 rounded-xl ">
            <h1>Countdown to next distribution date</h1>
            <div className="flex gap-2">
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
              >
                {timeRemaining.days} days
              </button>
              <span className="mt-3">:</span>
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
              >
                {timeRemaining.hours}
              </button>
              <span className="mt-3">:</span>
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
              >
                {timeRemaining.minutes}
              </button>
              <span className="mt-3">:</span>
              <button
                type="button"
                className="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 rounded-md text-sm px-2 p-1"
              >
                {timeRemaining.seconds}
              </button>
            </div>
          </div>):
          (<p>Countdown complete!</p>)
          }
        </div>

        <div className="px-2 bg-slate-950 mt-4 min-h-[400px]">
          <div className="flex hover:bg-blue-400 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-900 rounded-md py-4 mb-2">
            <div className="flex flex-col   justify-center w-full items-center">
              <h1 className="py-2 text-xl text-black font-bold">
                Overall Prize Pool
              </h1>
              <p className="text-white">
                3,752.29 <span>USDT</span>
              </p>
            </div>
          </div>

          <div className="flex  cursor-pointer bg-slate-800 rounded-md py-4 px-4">
            <div className="items-center gap-2 p-1 flex w-full ">
              <div onClick={()=>{setChal("Enrolled")}} className={`w-1/2 py-2 bg-slate-950 text-center rounded-md bg-gradient-to-r ${chal=="Enrolled"? "from-red-500 via-red-900": "from-sky-500 via-purple-900 to-pink-500"} `}>
                <h1 className="py-2">{chal}</h1>
              </div>
              <div className="w-1/2 py-2 bg-slate-950 text-center rounded-md bg-gradient-to-r from-red-500 via-purple-900 to-red-500">
                <h1 className="py-2">Decline</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer bg-slate-800 rounded-md py-2 mt-1">
            <h1 className="text-center text-xl mb-1">
              Price Pool Distributtion
            </h1>
            <div className="items-center gap-2 p-2 flex w-full ">
              <div className="w-full py-2 text-center rounded-md flex justify-between items-center ">
                <div>
                  <h1 className="py-2 text-xl">Ref-count</h1>
                  <p className="text-slate-400 mb-2">0</p>
                </div>
                <div>
                  <h1 className="py-2 text-xl">T-Points</h1>
                  <p className="text-slate-400">0.00 USDT</p>
                </div>
              </div>
            </div>
            <p className="p-2 font-bold">
              Complete a minimum of 20 transactions and above before the next distribution date.
            </p>
          </div>

          <div style={{paddingBottom:"200px"}}  className="flex cursor-pointer bg-slate-800 rounded-md py-2 mt-2 p-2">
            <div className="flex items-center justify-between  p-1 flex-col">
              <h1 className="flex items-center text-xl font-bold gap-2">
                <TfiGift size={20} />
                <span>Activity Description</span>
              </h1>
              <p>
                Invite a minimum of 3 friends and family to join chambit, completing a minimum of 10 transactions and above before the next distribution date.
              </p>
              <hr/>
              <p className="mt-4 underline text-blue-500" onClick={()=>{
                navigator.clipboard.writeText(`${localStorage.getItem("referralLink")}`).then(()=>{
                  setNotify1(true);
                  setTimeout(()=>{
                      setNotify1(false);
                  },2000);
                });
              }}>
                {localStorage.getItem("referralLink")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};