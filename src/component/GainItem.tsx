import { useState, useRef } from "react";
import { Gainorder } from "./Gainorder";

export const GainItem: React.FC = () => {
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0); // "Hot" is highlighted by default
  let bottomRef = useRef<HTMLDivElement | null>(null);

  const handleHighlight = (index: number) => {
    setHighlightedIndex(index);
    bottomRef.current?.scrollIntoView({behavior:"smooth"})
  };

  const sliderItems = [
    { title: "Hot" },
    { title: "Gainers" },
    { title: "Losers" },
    { title: "New" },
  ];
  
  let [gain, setGain] = useState(true);
  let [lose, setLose] = useState(false);
  let [hot1, setHot1] = useState(true);
  let [new1, setNew1] = useState(false);

  return (
    <div className="bg-gray-950 text-white mt-3 py-4 h-auto mb-10 px-4">
      <div className="py-2 p-2  flex-wrap flex justify-around bg-gray-800 items-center rounded-lg text-sm ">
        <div className="flex justify-between items-center gap-8 ">
          {sliderItems.map((item, index) => (
            <div
              key={index}
              className={`mb-5  font-bold cursor-pointer mt-3 relative text-sm ${
                highlightedIndex === index
                  ? "text-[#1DD55E]"
                  : "hover:text-[#1DD55E]"
              }`}
              onClick={() => {


                if(item.title == "Gainers"){
                  setGain(true);
                  setLose(false);
                  setHot1(false);
                  setNew1(false);
                }
                if(item.title == "Losers"){
                  setGain(false);
                  setLose(true);
                  setHot1(false);
                  setNew1(false);
                }
                if(item.title == "Hot"){
                  setGain(false);
                  setLose(false);
                  setHot1(true);
                  setNew1(false);
                }
                if(item.title == "New"){
                  setGain(false);
                  setLose(false);
                  setHot1(false);
                  setNew1(true);
                }
                handleHighlight(index)}}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div>
        <Gainorder gainers={gain} losers={lose} hot1={hot1} new1={new1} />
      </div>
    </div>
  );
};
