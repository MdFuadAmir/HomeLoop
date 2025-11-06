import { Outlet } from "react-router";
import HouseLoop from "../../Components/HouseLoop/HouseLoop";

const AuthLayout = () => {
    return (
        <div className="h-full p-4 bg-linear-to-tl from-teal-900 via-teal-800 to-teal-900 max-w-[2520px] mx-auto px-4 md:px-10 lg:px-20">
            <div className="p-2 w-fit bg-teal-200 rounded">
            <HouseLoop/>
            </div>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;