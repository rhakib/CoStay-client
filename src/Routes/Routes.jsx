
import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout/Layout";
import Home from "../Pages/Home";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/Rooms/RoomDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
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
                loader: ()=> fetch('http://localhost:5000/rooms')
            }
        ]
    },
]);

export default router;