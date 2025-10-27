import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Forbidden from "../Components/Forbidden/Forbidden";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import PrivateRoutes from "../Routes/PrivateRoutes";
import DashboardLayout from "../Layouts/DashboardLayout/DashboardLayout";
import Loading from "../Components/Loading/Loading";
import Statistics from "../Pages/Dashboard/Common/Statistics/Statistics";
import AddRoom from "../Pages/Dashboard/Host/AddRoom/AddRoom";
import MyListings from "../Pages/Dashboard/Host/MyListings/MyListings";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        // errorElement: ErrorPage,
        children:[
            {
                path:'/',
                element:<Home />
            },
            {
                path:'/rooms/:id',
                element:<PrivateRoutes><RoomDetails /></PrivateRoutes>
            },
            {
                path:'/forbidden',
                element:<Forbidden />
            },
        ]

    },
    {
        path:'/',
        Component: AuthLayout,
        // errorElement: ErrorPage,
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
        children:[
            {
                index:true,
                element: <Statistics/>
            },
            {
                path:'addRoom',
                element: <AddRoom/>
            },
            {
                path:'my-listings',
                element: <MyListings/>
            },
        ]

    }
]);
