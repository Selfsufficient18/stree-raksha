import { useState } from "react";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("need");
  const [message, setMessage] = useState("");

  const handleRegister = async e => {
    e.preventDefault();
    try {
      await axios.post(
        "http://stree-raksha-backend.onrender.com/api/auth/register",
        {
          name,
          email,
          password,
          role,
        }
      );
      setMessage("Registration successful. You can login now.");
    } catch (err) {
      setMessage("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Stree Raksha Registration
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <select
            value={role}
            onChange={e => setRole(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
          >
            <option value="need">Need Raksha</option>
            <option value="rakshak">Rakshak</option>
          </select>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-green-600 mt-4">{message}</p>
      </div>
    </div>
  );
}

export default Register;
