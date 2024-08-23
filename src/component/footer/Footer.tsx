import { SiCoinmarketcap } from "react-icons/si";
import { FaWallet } from "react-icons/fa";
import { PiTrademarkFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const footerItmems = [
  {
    title: "Home",
    icons: <FaHome />,
    path: "/home",
  },
  {
    title: "Market",
    icons: <SiCoinmarketcap />,
    path: "/market",
  },

  {
    title: "Trade",
    icons: <PiTrademarkFill />,
    path: "/spot?pair=CHAMBS/USDT",
  },
  {
    title: "Wallet",
    icons: <FaWallet />,
    path: "/asset",
  },
];

export const Footer = () => {
  return (
    <div className="bg-slate-900 py-2 fixed bottom-0 left-0 right-0 z-10">
      <div className="flex justify-between items-center px-6 gap-4 mb-4 mt-2">
        {footerItmems.map((item, index) => (
          <div
            key={index}
            className="text-white hover:text-orange-500 gap-2 flex items-center justify-center"
          >
            <Link to={item.path}>
              <div className="ml-3 text-[#1DD55E]">{item.icons}</div>
              <p className="text-[#1DD55E]">{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
