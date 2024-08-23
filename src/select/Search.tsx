import React, { useState } from "react";
import Select, { StylesConfig, SingleValue } from "react-select";

// Define the option type
interface CryptoOption {
  value: string;
  label: string;
}

// Dummy cryptocurrency options
const cryptoOptions: CryptoOption[] = [
  { value: "btc", label: "Bitcoin (BTC)" },
  { value: "chambs", label: "Chambs (CHAMB)" },
  { value: "eth", label: "Ethereum (ETH)" },
  { value: "bnb", label: "Binance Coin (BNB)" },
  { value: "usdt", label: "Tether (USDT)" },
  { value: "ada", label: "Cardano (ADA)" },
  { value: "sol", label: "Solana (SOL)" },
  { value: "xrp", label: "Ripple (XRP)" },
  { value: "dot", label: "Polkadot (DOT)" },
  { value: "doge", label: "Dogecoin (DOGE)" },
  { value: "matic", label: "Polygon (MATIC)" },
];

const customStyles: StylesConfig<CryptoOption, false> = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "gray" : "gray",
    backgroundColor: state.isSelected ? "lightgray" : "white",
  }),
};

const App: React.FC = () => {
  const [selectedCrypto, setSelectedCrypto] = useState<string>("");

  // Handle select change
  const handleSelectChange = (option: SingleValue<CryptoOption>) => {
    setSelectedCrypto(option?.value || "");
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-full">
        <Select
          options={cryptoOptions}
          styles={customStyles}
          className="w-full mt-4"
          onChange={handleSelectChange}
          isSearchable={true}
          placeholder="Search "
        />
      </div>
      <div>
        <p style={{ display: "none" }}>{selectedCrypto}</p>
      </div>
    </div>
  );
};

export default App;