import { Link, NavLink } from "react-router";
import HouseLoop from "../HouseLoop/HouseLoop";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
const Navbar = () => {
  const {user,logOut} = useAuth();

  const handleLogout = ()=>{
    logOut()
    .then(() => {
        console.log("Sign Out");
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* navber start */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <HouseLoop />
      </div>
      {/* navbar center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {/* navbar end */}
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-blue-950">
              pro
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-blue-950"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            {
              user ? <li>
                <Link onClick={handleLogout} className="text-red-500">
                  <FaSignOutAlt /> LogOut
                </Link>
              </li> : 
            <Link to="/login" className="text-green-500 flex items-center gap-2">
              <FaSignInAlt /> Login
            </Link>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
