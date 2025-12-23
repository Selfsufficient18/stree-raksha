import axios from "axios";
import { useState } from "react";
import Navbar from "../Components/Navbar";

function Dashboard() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const sendSOS = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");

      await axios.post(
        "http://stree-raksha-backend.onrender.com/api/alerts",
        { lat: 12.9716, lng: 77.5946 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMessage("🚨 SOS Alert Sent Successfully");
    } catch {
      setMessage("❌ Failed to send SOS");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Emergency Dashboard</h2>

        <button
          onClick={sendSOS}
          disabled={loading}
          className={`px-6 py-3 rounded-lg text-lg text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-red-600 hover:bg-red-700"
          }`}
        >
          {loading ? "Sending SOS..." : "🚨 Send SOS"}
        </button>

        <p className="mt-4 text-green-600">{message}</p>
      </div>
    </>
  );
}

export default Dashboard;
