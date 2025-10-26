import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const RootLayout = () => {
    return (
        <div className="bg-teal-50">
            <Navbar />
            <div className="min-h-[calc(100vh-64px)] max-w-[2520px] mx-auto md:px-10 lg:px-20">
            <Outlet></Outlet>
            </div> 
            <Footer/>
        </div>
    );
};

export default RootLayout;