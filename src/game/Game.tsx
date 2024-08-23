import { FaArrowLeft } from "react-icons/fa6";
import { Footer } from "../component/footer/Footer";
import { TbMessageCircleCancel } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";

export const Game = () => {
  
  const [coming1,setComing1] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
        className="fixed bg-black text-white w-full top-0 p-4 z-10 left-0 right-0"
      >
        <div className="flex justify-between items-center">
          <FaArrowLeft className="cursor-pointer hover:text-green-600 transition-colors duration-300" />
          <h1 className="text-2xl font-bold">
            <span className="text-green-600">CHAMBIT</span> Games
          </h1>
          <TbMessageCircleCancel className="cursor-pointer hover:text-red-600 transition-colors duration-300" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="flex-grow pt-20 pb-16 overflow-y-auto p-4 min-h-screen">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-400 to-blue-500 rounded-md py-8 flex flex-col items-center text-white shadow-lg"
        >
          <h1 className="text-3xl font-extrabold mb-2 animate-bounce">
            Play to Earn!
          </h1>
          <address style={{fontWeight:"bold"}}>New games uploaded weekly</address>
          {/* <p className="text-md pl-2 ">
            Get ready for some exciting games and earn rewards.
          </p> */}
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-900 mt-6 py-6 rounded-md p-4 shadow-lg"
        >
          <h1 className="text-3xl font-bold text-white mb-4" >
            <span className="text-green-700 text-xl " style={{backgroundImage:"linear-gradient(to right, red,blue)",color:"transparent",backgroundClip:"text"}}> Upcoming Listings..</span> 
          </h1>
          <ul className="space-y-3 ">
            <div onClick={()=>{
              setComing1(!coming1);
            }}  className="py-4 p-1 font-semibold bg-gradient-to-r from-red-400 to-blue-500 text-md rounded-md cursor-pointer hover:text-white transition-colors duration-300 bg-orange-600 ">
               Spin Wheel <span style={{color:"green",fontWeight:"bold"}} className="text-sm">{coming1 == true? "Coming soon": null}</span>
            </div>
            <div  className="py-4 p-1 bg-gradient-to-r from-red-400 to-blue-500 text-md rounded-md cursor-pointer hover:text-white transition-colors duration-300 bg-green-600 ">
              <a href="https://t.me/lemonfibot" target="_blank" style={{textDecoration:"underline"}}>
              Tap king
              </a>
              
            </div>
          </ul>
        </motion.div>
        {/* scroll */}
        <h1 className="text-slate-200 py-3 text-2xl font-semibold">
          Views Our Games
        </h1>
        <div className="snap-x snap-mandatory overflow-x-auto scroll-smooth flex space-x-4 p-4 bg-gray-100 ">
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              className="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              className="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              className="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              className="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              className="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
          <div className="snap-center shrink-0">
            <img
              src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=160&q=80"
              nonce="rounded-lg shadow-lg w-80 h-40 object-cover"
            />
          </div>
        </div>

        <div className=""></div>
      </div>

      {/* Footer */}
      <div className="fixed bottom-0 bg-pink-700 w-full left-0 right-0 p-4 z-10">
        <Footer />
      </div>
    </div>
  );
};