import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout/RootLayout";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path:'/',
        Component: RootLayout,
        errorElement: ErrorPage,
        children:[
            {
                path:'/',
                element: <Home/>
            }
        ]

    }
]);
