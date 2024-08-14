import { useState, useEffect } from "react";
import { FaRegEyeSlash, FaRegEye, FaCircle } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdCancel } from "react-icons/md";
import axios from "axios";
import { Swap } from "./Swap";
import { MySlider } from "./MySlider";
import { GainItem } from "./GainItem";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import b1 from "./button.jpg";

interface User {
  isAuthenticated: boolean;
  balance: number | null;
}

export const TotalBal: React.FC = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [deposit, setDeposit] = useState(false);
  // const [search, setSearch] = useState("");
  const [user /*setUser*/] = useState<User>({
    isAuthenticated: false,
    balance: null,
  });

  const toggleDeposit = () => {
    setDeposit(!deposit);
  };

  const [total_balance, set_total_balance] = useState(0);

  const [total_values, set_total_values] = useState([
    { currency: "CHAMBS", balance: -1 },
  ]);
  const [prices, setPrices] = useState([{ symbol: "..", usd: 0, name: "" }]);

  const [p_total, set_p_total] = useState(-1);
  let p_t = 0;

  useEffect(() => {
    const fetch1 = async () => {
      const userToken = localStorage.getItem("userToken");

      if (userToken) {
        await axios
          .get("https://chambsexchange.onrender.com/api/trans/get-wallet", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            console.log("API response main:", response.data);

            console.log(`total wallets: ${response.data.length}`);
            console.log(`total balance: ${total_balance}`);

            let t_bal = 0;
            const t_val = [];

            for (let x = 0; x < response.data.length; x++) {
              t_bal += response.data[x].balance;
              t_val.push(response.data[x]);
            }

            set_total_balance(t_bal);
            set_total_values(t_val);
            console.log(t_val);
            console.log(`This vals are:... ${total_values}`);
          })
          .catch((error) => {
            console.error("Error fetching balance:", error);
          });

        await axios
          .get("https://chambsexchange.onrender.com/api/spot/get-coins", {
            headers: {
              Authorization: `Bearer ${userToken}`,
            },
          })
          .then((response) => {
            console.log("API price response:", response.data);
            setPrices(response.data);
          })
          .catch((error) => {
            console.error("Error fetching price:", error);
          });
      } else {
        console.warn("No token found");
      }
    };

    fetch1();
  }, [total_balance, total_values]);

  useEffect(() => {
    console.log("User state updated:", user); // Log user state updates
  }, [user]);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="bg-gray-950 py-5 text-gray-100 ">
      <div className="max-w-sm overflow-y-auto bg-slate-950">
        <div className="text-white px-4 ml-3  bg-gray-700 rounded-lg border mt-6 j justify-center flex items-center gap-2  ">
          <input
            type="text"
            // value={search}
            placeholder="search you coin"
            className="w-full bg-transparent outline-none text-sm"
          />
          <CiSearch />
        </div>
        <div className="py-4 rounded-lg flex justify-between items-center mt-4 p-5 text-lg w-full mb-2">
          <div>
            <div>
              <h2 className="flex items-center gap-2">
                Total Assets{" "}
                <span onClick={toggleVisibility} className="cursor-pointer">
                  {isHidden ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </h2>
              {total_values
                .sort((a, b) => a.currency.localeCompare(b.currency))
                .map((v) => (
                  <p>
                    {prices.map((p) =>
                      p.symbol.toUpperCase() == v.currency.toUpperCase() ? (
                        <img
                          src={b1}
                          style={{ width: "0px", height: "0px" }}
                          onLoad={() => {
                            const a: number = p.usd * v.balance;
                            p_t += a;
                            set_p_total(p_t);
                            //console.log(p_total);
                          }}
                        />
                      ) : null
                    )}
                  </p>
                ))}

              <h1>
                {isHidden
                  ? "****"
                  : //: user.isAuthenticated
                    //? user.balance
                    p_total}{" "}
                <span>USD</span>
              </h1>
            </div>
          </div>
          <div className="text-sm text-green-700">
            <button
              className="px-5 py-3 rounded-md text-white bg-[#1DD55E] font-semibold hover:bg-blue-600 duration-300 ease-in transition cursor-pointer"
              onClick={toggleDeposit}
            >
              Deposit
            </button>
          </div>
        </div>
        {deposit && (
          <div className="relative bg-slate-800 transition duration-300  p-4 rounded-lg mt-4 ease-in min-h-[500px]">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-white">Deposit Options</span>
              <MdCancel
                className="cursor-pointer text-white"
                onClick={toggleDeposit}
              />
            </div>
            <div className="space-y-2">
              <button className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded-md hover:bg-gray-600">
                <Link to="/p2p">
                  <div className="flex gap-2">
                    <FaCircle className="mt-1" />
                    <div>
                      <h1>P2P Trading</h1>
                      <p className="text-sm">
                        Bank Transfer ,Opay,GooglePay & more
                      </p>
                    </div>
                  </div>
                </Link>
              </button>
              <h1>Deposit with Crypto</h1>
              <button className="w-full px-4 py-2 text-left bg-gray-700 text-white rounded-md hover:bg-gray-600">
                <div className="flex gap-2">
                  <FaCircle className="mt-1" />
                  <Link to="/depositdetails">
                    <div>
                      <h1>Deposit Crypto</h1>
                      <p className="text-sm">
                        Already have crypto?Deposit directly
                      </p>
                    </div>
                  </Link>
                </div>
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="mt-4">
        <Swap />
        <MySlider />
        <GainItem />
      </div>
    </div>
  );
};
//
