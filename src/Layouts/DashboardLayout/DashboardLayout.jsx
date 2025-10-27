import { NavLink, Outlet } from "react-router";
import HouseLoop from "../../Components/HouseLoop/HouseLoop";
import { FaSignInAlt, FaSignOutAlt, FaUserCog } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";

const DashboardLayout = () => {
  const { user, logOut } = useAuth();
  const handleCloseDrawer = () => {
    const drawerCheckbox = document.getElementById("my-drawer-2");
    if (drawerCheckbox) drawerCheckbox.checked = false;
  };
  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("Sign Out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-teal-50">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* Drawer content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar for mobile */}
        <div className="navbar bg-teal-700 text-white w-full lg:hidden">
          <div className="flex-none">
            <label
              htmlFor="my-drawer-2"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2">Dashboard</div>
        </div>
        {/* Main content */}
        <div>
          <Outlet />
        </div>
      </div>

      {/* Drawer sidebar */}
      <div className="drawer-side flex justify-between">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu bg-teal-700 text-base-content min-h-full w-80 p-4 flex flex-col justify-between h-full">
          <div>
            <HouseLoop />
            <hr className="my-2 text-teal-400 font-bold border"/>
            <div className="space-y-2">
              <li>
                <NavLink
                  to="/dashboard"
                  end
                  onClick={handleCloseDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-teal-900 bg-teal-600 rounded  font-semibold" : "text-white"
                  }
                >
                  Statistics
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addRoom"
                  onClick={handleCloseDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-teal-900 bg-teal-600 rounded  font-semibold" : "text-white"
                  }
                >
                  Add Rooms
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/my-listings"
                  onClick={handleCloseDrawer}
                  className={({ isActive }) =>
                    isActive ? "text-teal-900 bg-teal-600 rounded  font-semibold" : "text-white"
                  }
                >
                  My Listings
                </NavLink>
              </li>
            </div>
          </div>
          {/* profile and logout section */}
          <div className="bg-teal-800 p-4 rounded-xl shadow-2xl">
            <li>
              <NavLink
                to="/profile"
                onClick={handleCloseDrawer}
                className={({ isActive }) =>
                  isActive ? "text-teal-300 font-semibold" : "text-white"
                }
              >
                <FaUserCog /> Profile
              </NavLink>
            </li>
            <li>
              {user ? (
                <NavLink
                  to="/login"
                  onClick={handleLogout}
                  className="text-red-500 flex items-center gap-2"
                >
                  <FaSignOutAlt /> LogOut
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  onClick={handleCloseDrawer}
                  className="text-green-500 flex items-center gap-2"
                >
                  <FaSignInAlt /> Login
                </NavLink>
              )}
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
