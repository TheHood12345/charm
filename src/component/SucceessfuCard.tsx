export const SuccessfuCard = () => {
    return (
      <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mx-auto mb-4">
            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-2">Success!</h2>
          <p className="text-gray-600 text-center mb-4">
            Your action has been completed successfully. Thank you for your submission.
          </p>
          <button className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50">
            Ok
          </button>
        </div>
      </div>
    );
  };
  
  