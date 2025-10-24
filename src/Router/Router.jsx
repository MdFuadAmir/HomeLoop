import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import Login from "../Authentication/Login/Login";
import SignUp from "../Authentication/SignUp/SignUp";
import Forbidden from "../Components/Forbidden/Forbidden";

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
                path:'/forbidden',
                element:<Forbidden />
            },
        ]

    },
    {
        path:'/',
        Component: AuthLayout,
        errorElement: ErrorPage,
        children:[
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/login',
                Component: SignUp
            },
        ]
    }
]);
