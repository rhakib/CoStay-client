
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails";
import MyBookings from "../Pages/Bookings/MyBookings";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";
import About from "../Pages/About";
import FaqPage from "../Pages/FaqPage";
import Privacy from "../Pages/Privacy";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/rooms',
                element: <Rooms></Rooms>

            },
            {
                path: '/rooms/:id',
                element: <RoomDetails></RoomDetails>,
                
            },
            {
                path: '/bookings',
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/about',
                element: <About></About>
            }
            ,
            {
                path: '/faq',
                element: <FaqPage></FaqPage>
            },
            {
                path: '/privacy',
                element: <Privacy></Privacy>
            }
        ]
    },
]);

export default router;