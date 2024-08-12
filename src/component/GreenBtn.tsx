import React, { ReactNode } from "react";

interface GlobalButtonProps {
  children: ReactNode;
  bgColor: string;
  title: string;
}

const GlobalButton: React.FC<GlobalButtonProps> = ({
  children,
  bgColor,
  title,
}) => {
  return (
    <button className={`px-4 py-2 rounded-md ${bgColor}`} title={title}>
      {children}
    </button>
  );
};

export const GreenBtn = () => {
  return (
    <div className="flex justify-between items-center mt-4">
      <div>
        <h1>NOT/USDT🔸</h1>
        <h5>13.39M USDT</h5>
      </div>
      <div>
        <h1>0.0000345</h1>
        <p>0.18USD</p>
      </div>
      <div>
        <GlobalButton bgColor="bg-green-500" title="Increase Value">
          +4.945
        </GlobalButton>
      </div>
    </div>
  );
};
