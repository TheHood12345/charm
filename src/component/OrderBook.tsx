import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const OrderBook = () => {
  const [orderBookData, setOrderBookData] = useState({ bids: [], asks: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrderBookData = async () => {
      try {
        const response = await axios.get(
          "https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10"
        );
        console.log("Response data:", response.data); // Log the response data
        setOrderBookData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err); // Log the error
        if (axios.isAxiosError(err)) {
          setError(err.message);
          if (err.response) {
            console.error("Error response:", err.response);
          }
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchOrderBookData();
  }, []);

  const chartData = {
    labels: orderBookData.bids.map((_, index) => `Point ${index + 1}`),
    datasets: [
      {
        label: "Bids",
        data: orderBookData.bids.map((bid) => bid[0]),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Asks",
        data: orderBookData.asks.map((ask) => ask[0]),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  return (
    <div className="h-screen bg-slate-950 py-16 text-white">
      <div className="text-center py-2">
        <h1 className="text-2xl">SWAP</h1>
        <hr />
      </div>
      <div className="flex justify-between px-4 mt-4">
        <h2 className="text-2xl">SWAP</h2>
        <div className="flex flex-col text-2xl">
          <h2>TRADE</h2>
          <span className="h-1 w-20 bg-green-600"></span>
        </div>
      </div>
      <div className="px-4 flex justify-between mt-4">
        <Link to="/chart">
          <button className="bg-gray-500 text-white font-bold px-10 py-2 rounded-md text-xl">
            Chart
          </button>
        </Link>
        <Link to="/chart">
          <button className="text-white font-bold hover:bg-gray-500 transition text-xl duration-300 px-10 py-2 rounded-md">
            Trade
          </button>
        </Link>
      </div>
      {/* graph */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-md text-slate-500 py-16 flex justify-center">
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error loading data: {error}</p>
          ) : (
            <Line data={chartData} />
          )}
        </div>
      </div>

      {/* BUY */}
      <div className="px-4 mt-4">
        <div className="bg-white rounded-md text-slate-500 py-4 flex justify-between items-center p-4 gap-4">
          <div className="w-1/2 bg-black text-white py-4 px-4">
            <h1 className="text-2xl font-bold text-green-500">BUY</h1>
            <div className="flex justify-between items-center">
              <h1>QTY</h1>
              <h1>PRICE</h1>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>0.1</p>
              <p>40000</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>0.2</p>
              <p>39950</p>
            </div>
          </div>
          {/* SELL */}
          <div className="w-1/2 bg-slate-500 text-white py-4 px-2">
            <h1 className="text-2xl font-bold text-red-500">SELL</h1>
            <div className="flex justify-between items-center">
              <div>QTY</div>
              <h1>PRICE</h1>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>0.1</p>
              <p>40500</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p>0.2</p>
              <p>40550</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
