import { FaArrowRight, FaEarListen } from "react-icons/fa6";

export const Latcard = () => {
  return (
    <div className="bg-white mt-4">
      <div className="bg-gray-800">
        <h1 className="text-xl p-2">Customer</h1>
        
        <a href="https://t.me/chambsteam" target="_blank" className="flex justify-between items-center mt-4 p-2">
          <div className="flex gap-1">
            <FaEarListen className="mt-1" />
            <p>
              Help center & call <br /> support
            </p>
          </div>
          <FaArrowRight />
        </a>
        
        
      </div>
    </div>
  );
};
