
interface CardProps{
    amount:any,
    type:any,
    date:any,
    address:any
}
const HistoryCard = ({ amount, type, date, address }:CardProps) => {
  return (
    <div className="bg-gray-200 min-h-full shadow-lg rounded-lg p-6 max-w-sm mx-auto my-4">
      <div className="mb-4 flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold text-gray-800">Amount:</h2>
        <p className="text-gray-600">${amount}</p>
      </div>
      <div className="mb-4 flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold text-gray-800">Type:</h2>
        <p className="text-gray-600">{type}</p>
      </div>
      <div className="mb-4 flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold text-gray-800">Date:</h2>
        <p className="text-gray-600">{date}</p>
      </div>
      <div className="flex justify-between items-center py-5">
        <h2 className="text-xl font-semibold text-gray-800">Address:</h2>
        <p className="text-gray-600">{address}</p>
      </div>
    </div>
  );
};

export default HistoryCard;
