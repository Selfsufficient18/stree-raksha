import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";

function Rakshak() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchAlerts = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        "http://stree-raksha-backend.onrender.com/api/alerts",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setAlerts(res.data.alerts);
    };

    fetchAlerts();
    const interval = setInterval(fetchAlerts, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">🚨 Emergency Alerts</h2>

        {alerts.length === 0 && (
          <p className="text-gray-500">No active alerts</p>
        )}

        {alerts.map(a => (
          <div
            key={a._id}
            className="bg-white border-l-4 border-red-600 rounded-lg p-4 mb-4 shadow"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-bold text-lg text-gray-800">
                🚨 Emergency Alert
              </h3>
              <span className="text-sm text-gray-500">
                {new Date(a.createdAt).toLocaleString()}
              </span>
            </div>

            <p className="text-gray-600 mb-4">
              Monitoring live emergency alerts from users
            </p>

            <p className="text-gray-700">
              <b>User:</b> {a.user?.name}
            </p>

            <p className="text-gray-700">
              <b>Role:</b> {a.user?.role}
            </p>

            <p className="text-gray-700">
              <b>Location:</b> {a.lat}, {a.lng}
            </p>

            <p className="mt-2 text-red-600 font-semibold">
              Status: {a.status}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Rakshak;
