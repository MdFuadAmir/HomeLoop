import { FaPlus } from "react-icons/fa";
import MenuItems from "./MenuItems";

const GuestMenu = ({handleCloseDrawer}) => {
    return (
        <div className="space-y-2">
            <MenuItems
                to={"/dashboard/my-bookings"}
                labal={"My Bookings"}
                onClick={handleCloseDrawer}
                icon={FaPlus}
              />
            
        </div>
    );
};

export default GuestMenu;