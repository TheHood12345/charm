import { useNavigate } from "react-router-dom";
import { RiUserAddLine } from "react-icons/ri";
import { RiSwapFill } from "react-icons/ri";
import { TbWorldWww } from "react-icons/tb";
import { GiWantedReward } from "react-icons/gi";

import { useState } from "react";
import pic from "../asset/TONCOIN 011.jpg";
import { CgMoreO } from "react-icons/cg";

type LoadingState = {
  swapLoading: boolean;
  p2pLoading: boolean;
  more: boolean;
  reward: boolean;
  Invite: boolean;
  chembsters: boolean;
  support: boolean;
};

const carditem = [
  {
    icon: (
      <RiUserAddLine
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Invite Friend",
    path: "/chembster",
    loadingKey: "Invite",
  },
  {
    icon: (
      <RiSwapFill
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Swap",
    path: "/swap",
    loadingKey: "swapLoading",
  },
  {
    icon: (
      <RiSwapFill
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "P2P trading",
    path: "/pp",
    loadingKey: "p2pLoading",
  },
  {
    icon: (
      <GiWantedReward
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Play to earn",
    path: "/game",
    loadingKey: "play",
  },
  {
    icon: (
      <TbWorldWww
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Instant Loan",
    path: "",
    loadingKey: "more",
  },
  {
    icon: (
      <CgMoreO
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Rewards",
    path: "/subhead",
    loadingKey: "chambsters",
  },
  {
    icon: (
      <CgMoreO
        size={30}
        className="border border-white rounded-full text-[#1DD55E]"
      />
    ),
    title: "Quick support",
    path: "https://t.me/chambsteam",  
    loadingKey: "support",
  },
];

export const Swap = () => {
  const [loading, setLoading] = useState<LoadingState>({
    swapLoading: false,
    p2pLoading: false,
    more: false,
    reward: false,
    Invite: false,
    chembsters: false,
    support: false,
  });

  const navigate = useNavigate();

  const handleClick = (loadingKey: keyof LoadingState, path: string) => {
    setLoading((prevLoading) => ({ ...prevLoading, [loadingKey]: true }));
    setTimeout(() => {
      setLoading((prevLoading) => ({ ...prevLoading, [loadingKey]: false }));
      navigate(path);
    }, 2000); // Adjust the timeout duration as needed
  };

  return (
    <div className="bg-gray-950 py-2 px-4 mt-3 text-white">
      <div className="px-2  grid  grid-cols-3 m-4 gap-4 justify-between items-center">
        {carditem.map((item, index) => (
          <div
            key={index}
            className="w-full py-2 justify-center p-3 flex flex-wrap items-centers rounded-lg shadow-lg text-white text-sm hover:bg-blue-600 transition-all ease-in duration-300 gap-4"
            onClick={() =>
              handleClick(item.loadingKey as keyof LoadingState, item.path)
            }
          >
            {loading[item.loadingKey as keyof LoadingState] ? (
              <div className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              </div>
           ) : //  (
            //   <>
            //     {item.title == "Instant Loan" ? (
            //       <a style={{paddingLeft:"20px",paddingRight:"20px"}}
            //         href="https://lemonfi.app/"
            //         target="_blank"
            //         className="text-sm"
            //       >
            //         {item.icon}
            //       </a>
            //     ) :
            //     item.title == "Quick support" ?
            //     (
            //       <a style={{paddingLeft:"20px",paddingRight:"20px"}}
            //         href="https://t.me/chambsteam"
            //         target="_blank"
            //         className="text-sm"
            //       >
            //         {item.icon}
            //       </a>
            //     )
            //     :
            //     (
            //       <div className="text-sm">{item.icon}</div>
            //     )}

            //     <>
            //     {
            //       item.title == "Instant Loan" ?
            //       (<a href="https://lemonfi.app/" style={{paddingLeft:"20px",paddingRight:"20px"}} target="_blank">{item.title}</a>):
                   
            //       item.title == "Quick support" ?
            //       (<a href="https://t.me/chambsteam" style={{paddingLeft:"20px",paddingRight:"20px"}} target="_blank">{item.title}</a>)
            //       : 
            //       (<p className="text-sm">{item.title}</p>)
            //     }
            //     </>

                
            //   </>
            // )
            <>
            { item.title == "Instant Loan" ?
            (
            <a style={{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <a style={{paddingLeft:"20px",paddingRight:"20px"}}
                    href="https://lemonfi.app/"
                    target="_blank"
                    className="text-sm"
                  >
                    {item.icon}
                  </a>
                  <p className="text-sm" style={{fontStyle:"italic"}}>{item.title}</p>
            </a>
            ):

            item.title == "Quick support" ?
            (<a style={{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <a style={{paddingLeft:"20px",paddingRight:"20px"}}
                    href="https://t.me/chambsteam"
                    target="_blank"
                    className="text-sm"
                  >
                    {item.icon}
                  </a>
                  <p className="text-sm">{item.title}</p>
            </a>
            ):

            (<a style={{padding:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <div style={{paddingLeft:"20px",paddingRight:"20px"}}
                    className="text-sm"
                  >
                    {item.icon}
                  </div>
                  <p className="text-sm">{item.title}</p>
            </a>
            )
          
          }
            </>
            }
          </div>
        ))}
      </div>
      <hr />
      <div className="py-2 rounded-md mt-5">
        <img src={pic} alt="" className=" w-full rounded-lg" />
      </div>
    </div>
  );
};