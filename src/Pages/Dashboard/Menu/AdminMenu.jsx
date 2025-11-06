import { FaUsersCog } from "react-icons/fa";
import MenuItems from "./MenuItems";


const AdminMenu = ({handleCloseDrawer}) => {
    return (
        <div className="space-y-2">
            <MenuItems
                to="/dashboard/manage-users"
                labal="Manage Users"
                icon={FaUsersCog}
                onClick={handleCloseDrawer}
              />
        </div>
    );
};

export default AdminMenu;