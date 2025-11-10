import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Forbidden from "../Components/Forbidden/Forbidden";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Statistics from "../Pages/Dashboard/Common/Statistics/Statistics";
import AddRoom from "../Pages/Dashboard/Host/AddRoom/AddRoom";
import MyListings from "../Pages/Dashboard/Host/MyListings/MyListings";
import Profile from "../Pages/Dashboard/Common/Profile/Profile";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import HostRoutes from "../Routes/HostRoutes";
import AdminRoutes from "../Routes/AdminRoutes";
import MyBookings from "../Pages/Dashboard/Guest/MyBookings/MyBookings";
import Payments from "../Pages/Payments/Payments";
import ManageBookings from "../Pages/Dashboard/Host/ManageBookings/ManageBookings";
import UpdateRoom from "../Pages/Dashboard/Host/MyListings/UpdateRoom";
import AboutUs from "../Pages/Home/AboutUs/AboutUs";
import ContactUs from "../Pages/Home/ContactUs/ContactUs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Houses from "../Pages/Houses/Houses";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        errorElement: ErrorPage,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/rooms',
                element:<Houses />
            },
            {
                path:'/about-us',
                element:<AboutUs />
            },
            {
                path:'/contact-us',
                element:<ContactUs/>
            },
            {
                path:'/rooms/:id',
                element:<PrivateRoutes><RoomDetails /></PrivateRoutes>
            },
            {
                path:'/forbidden',
                element:<Forbidden />
            },
            {
                path:'/payments',
                element:<PrivateRoutes><Payments/></PrivateRoutes>
            },
        ]
    },
    {
        path:'/',
        Component: AuthLayout,
        errorElement: ErrorPage,
        children:[
            {
                path:'login',
                Component: Login
            },
            {
                path:'signup',
                Component: SignUp
            },
        ]
    },
    {
        path:'/dashboard',
        element: <PrivateRoutes><DashboardLayout/></PrivateRoutes>,
        errorElement: ErrorPage,
        children:[
            // common
            {
                index:true,
                element: <Statistics/>
            },
            {
                path:'profile',
                element: <Profile/>
            },
            // guest
            {
                path:'my-bookings',
                element: <MyBookings/>
            },
            // host assess
            {
                path:'addRoom',
                element: <HostRoutes><AddRoom/></HostRoutes>
            },
            {
                path:'my-listings',
                element: <HostRoutes><MyListings/></HostRoutes>
            },
            {
                path:'manage-bookings',
                element: <HostRoutes><ManageBookings/></HostRoutes>
            },
            {
                path:'update-room',
                element: <HostRoutes><UpdateRoom/></HostRoutes>
            },
            // admin access
            {
                path:'manage-users',
                element: <AdminRoutes><ManageUsers/></AdminRoutes>
            },
            
        ]

    }
]);
