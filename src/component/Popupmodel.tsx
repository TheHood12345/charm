export const Popupmodel = () => {
  return (
    <div className="bg-gray-800 rounded-lg text-white mt-6 mx-auto max-w-md p-6 shadow-lg">
      <div className="text-center flex flex-col items-center">
        <span className="bg-yellow-500 h-12 w-12 rounded-full flex items-center justify-center text-2xl border-2 border-yellow-400 mb-4">
          !
        </span>
        <h1 className="text-xl font-semibold mb-4">Notice</h1>
        <div className="w-full text-left mb-6">
          <p className="text-sm">
            please confirm that you are depositing USDT to this address on the
            BSC (BEP20) network.Mismatched address information may result in the
            permanent loss of your assets
          </p>
        </div>
        <button className="bg-yellow-400 text-gray-800 w-full py-2 rounded-md font-semibold hover:bg-yellow-300 transition duration-300">
          OK
        </button>
      </div>
    </div>
  );
};
