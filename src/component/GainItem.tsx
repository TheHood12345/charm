import { useState } from "react";
import { Gainorder } from "./Gainorder";

export const GainItem: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0); // "Hot" is highlighted by default

  const handleHighlight = (index: number) => {
    setHighlightedIndex(index);
  };

  const sliderItems = [
    { title: "Hot" },
    { title: "Gainers" },
    { title: "Losers" },
    { title: "New" },
  ];

  return (
    <div className="bg-gray-950 text-white mt-3 py-4 h-auto mb-10 px-4">
      <div className="py-2 p-2  flex-wrap flex justify-around bg-gray-800 items-center rounded-lg text-sm ">
        <div className="flex justify-between items-center gap-8 ">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`mb-5  font-bold cursor-pointer mt-3 relative text-sm ${
                highlightedIndex === index
                  ? "text-[#fed503]"
                  : "hover:text-[#fed503]"
              }`}
              onClick={() => handleHighlight(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Gainorder />
      </div>
    </div>
  );
};
