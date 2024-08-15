import { Link } from "react-router-dom";
import { SuccessfuCard } from "./SucceessfuCard";

const Successful = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white overflow-hidden">
      <Link to="/home">
        <SuccessfuCard />
      </Link>
    </div>
  );
};

export default Successful;
