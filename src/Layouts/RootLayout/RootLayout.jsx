import { Outlet } from "react-router";

import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-[calc(100vh-64px)]">
            <Outlet></Outlet>
            </div> 
            <Footer/>
        </div>
    );
};

export default RootLayout;