import { Outlet } from "react-router";

const RootLayout = () => {
    return (
        <div>
            <div className="min-h-[calc(100vh-64px)]">
            <Outlet></Outlet>
            </div> 
        </div>
    );
};

export default RootLayout;