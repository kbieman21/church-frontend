import { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import logo from "../assets/stMichaelPicture1.jpg";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-[#0f172a] text-white shadow-md fixed w-full top-0 z-50 border-4 border-red-500">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* ---------- LOGO ---------- */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="Church Logo"
            className="w-9 h-9 object-contain"
          />
          <span className="text-xl font-semibold tracking-wide">
            St. Michael
          </span>
        </div>

        {/* ---------- DESKTOP MENU ---------- */}
        <div className="hidden md:flex gap-6 text-lg items-center">
          <NavLink className="hover:text-blue-400" to="/">
            Home
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/about">
            About
          </NavLink>
          {/* <NavLink className="hover:text-blue-400" to="/ministries">Ministries</NavLink> */}
          <NavLink className="hover:text-blue-400" to="/events">
            Events
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/sermons">
            Sermons
          </NavLink>
          <NavLink className="hover:text-blue-400" to="/contact">
            Contact
          </NavLink>

          {/* Admin Link (Only for Admins) */}
          {/* {isAuthenticated && user?.role === "admin" && ( */}
           {isAuthenticated && (
            <NavLink
              className="text-orange-400 hover:text-orange-300"
              to="/admin/profile"
            >
              Admin
            </NavLink>
          )}
          {/* {isAuthenticated && user?.role === "admin" && (
            <NavLink to="/admin/profile" className="text-orange-400">
              Admin
            </NavLink>
          )} */}
        </div>

        {/* ---------- AUTH BUTTONS (Desktop) ---------- */}
        <div className="hidden md:flex items-center gap-4">
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            >
              Logout
            </button>
          )}
        </div>
        {isAuthenticated && (
          <NavLink className="hover:text-blue-400" to="/profile">
            Profile
          </NavLink>
        )}

        {/* ---------- MOBILE MENU BUTTON ---------- */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* ---------- MOBILE DROPDOWN MENU ---------- */}
      {open && (
        <div className="md:hidden bg-[#1e293b] text-white px-6 py-4 flex flex-col gap-4">
          <NavLink onClick={() => setOpen(false)} to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">
            About
          </NavLink>
          {/* <NavLink onClick={() => setOpen(false)} to="/ministries">Ministries</NavLink> */}
          <NavLink onClick={() => setOpen(false)} to="/events">
            Events
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/sermons">
            Sermons
          </NavLink>
          <NavLink onClick={() => setOpen(false)} to="/contact">
            Contact
          </NavLink>

          {/* Admin */}
          {isAuthenticated && user?.role === "admin" && (
            // {isAuthenticated && (
            <NavLink
              className="text-orange-400"
              onClick={() => setOpen(false)}
              to="/admin"
            >
              Admin
            </NavLink>
          )}

          {/* Auth Buttons Mobile */}
          {/* Auth Buttons Mobile */}
          {!isAuthenticated ? (
            <>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
              >
                Login
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/register");
                }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded"
              >
                Register
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded"
            >
              Logout
            </button>
          )}
          {isAuthenticated && (
            <NavLink onClick={() => setOpen(false)} to="/profile">
              Profile
            </NavLink>
          )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
