import { Outlet } from "react-router";
import HouseLoop from "../../Components/HouseLoop/HouseLoop";

const AuthLayout = () => {
    return (
        <div>
            <HouseLoop/>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;