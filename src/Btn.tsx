import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
}

export const Btn: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="bg-gray-400 px-2 text-white">
      {label}
    </button>
  );
};
