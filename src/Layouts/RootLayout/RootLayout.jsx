import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const RootLayout = () => {
    return (
        <div className="bg-linear-to-br from-teal-200 via-teal-50 to-teal-200">
            <Navbar />
            <div className="min-h-[calc(100vh-64px)] max-w-[2520px] mx-auto md:px-10 lg:px-20">
            <Outlet></Outlet>
            </div> 
            <Footer/>
        </div>
    );
};

export default RootLayout;