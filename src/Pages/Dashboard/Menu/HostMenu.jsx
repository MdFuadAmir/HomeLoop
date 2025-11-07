import {FaList,FaPlus,FaRegCalendarCheck} from "react-icons/fa";
import MenuItems from "./MenuItems";

const HostMenu = ({handleCloseDrawer}) => {
    return (
        <div className="space-y-2">
            <MenuItems
                to="/dashboard/addRoom"
                labal="Add Rooms"
                onClick={handleCloseDrawer}
                icon={FaPlus}
              />
              <MenuItems
                to="/dashboard/my-listings"
                labal="My Listings"
                onClick={handleCloseDrawer}
                icon={FaList}
              />   
              <MenuItems
                to="/dashboard/manage-bookings"
                labal="Manage Bookings"
                onClick={handleCloseDrawer}
                icon={FaRegCalendarCheck}
              />   
        </div>
    );
};

export default HostMenu;