import { Outlet } from "react-router";
import HouseLoop from "../../Components/HouseLoop/HouseLoop";

const AuthLayout = () => {
    return (
        <div className="h-full p-4 bg-teal-700">
            <div className="p-2 w-fit bg-teal-200 rounded">
            <HouseLoop/>
            </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;