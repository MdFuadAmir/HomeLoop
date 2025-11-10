import { Link, NavLink } from "react-router";
import HouseLoop from "../HouseLoop/HouseLoop";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import useHostRequest from "../../Hooks/useHostRequest";
import Loading from "../Loading/Loading";
import toast from "react-hot-toast";
import { useState } from "react";

const Navbar = () => {
  const { user, logOut, loading } = useAuth();
  const { requestHost } = useHostRequest();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        setProfileOpen(false); 
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (loading) return <Loading />;

  const navLinks = (
    <>
      <li>
        <NavLink to="/" onClick={() => setMobileOpen(false)}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/rooms" onClick={() => setMobileOpen(false)}>
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink to="/about-us" onClick={() => setMobileOpen(false)}>
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact-us" onClick={() => setMobileOpen(false)}>
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-teal-800 px-4 md:px-10 lg:px-20">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown" onClick={() => setMobileOpen(!mobileOpen)}>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {mobileOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
              {navLinks}
            </ul>
          )}
        </div>
        <HouseLoop />
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{navLinks}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end gap-4">
        <button
          onClick={requestHost}
          disabled={!user?.email}
          className="btn btn-sm bg-teal-500 border-none"
        >
          I want to Host
        </button>
        {/* Profile dropdown */}
        <div
          className="dropdown dropdown-end"
          onClick={() => setProfileOpen(!profileOpen)}
        >
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            {user ? (
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-teal-500">
                <img
                  src={user.photoURL || "/profile.png"}
                  alt="user"
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full flex items-center justify-center text-blue-950 bg-teal-500">
                <FaUser className="w-10 h-10" />
              </div>
            )}
          </label>
          {profileOpen && (
            <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-950">
              <li>
                <NavLink to="/" onClick={() => setProfileOpen(false)}>
                  Home
                </NavLink>
              </li>
              <li>
                <Link to="/dashboard" onClick={() => setProfileOpen(false)}>
                  Dashboard
                </Link>
              </li>
              {user ? (
                <li>
                  <Link
                    onClick={handleLogout}
                    className="text-red-500 flex items-center gap-2"
                  >
                    <FaSignOutAlt /> LogOut
                  </Link>
                </li>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setProfileOpen(false)}
                  className="text-green-500 flex items-center gap-2"
                >
                  <FaSignInAlt /> Login
                </Link>
              )}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
