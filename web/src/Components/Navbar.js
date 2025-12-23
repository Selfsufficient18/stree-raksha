import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div className="flex justify-between items-center bg-red-600 text-white px-6 py-4">
      <h1 className="text-xl font-bold">Stree Raksha</h1>

      <div className="flex gap-4 items-center">
        {role === "need" && (
          <Link to="/dashboard" className="hover:underline">
            Dashboard
          </Link>
        )}

        {role === "rakshak" && (
          <Link to="/rakshak" className="hover:underline">
            Alerts
          </Link>
        )}

        <button
          onClick={logout}
          className="bg-white text-red-600 px-3 py-1 rounded hover:bg-gray-100"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
