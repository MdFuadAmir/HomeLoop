import { Outlet } from "react-router";
import HouseLoop from "../../Components/HouseLoop/HouseLoop";

const AuthLayout = () => {
    return (
        <div className="h-full p-4 bg-linear-to-br from-teal-700 via-teal-900 to-teal-700 max-w-[2520px] mx-auto px-4 md:px-10 lg:px-20">
            <div className="p-2 w-fit bg-teal-200 rounded">
            <HouseLoop/>
            </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;