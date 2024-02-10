import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";

import HomePage from "../Pages/Home/HomePage";
import BlogDetails from "../Pages/Home/Blogs/BlogDetails/BlogDetails";
import Events from "../Pages/Events/Events";

import Gallery from "../Pages/Gallery/Gallery";
import BookedHotels from "../Pages/Home/BookedHotels/BookedHotels";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element:<HomePage/>
            },
            {
                path: "/events",
                element: <Events/>

            },
            {
                path: "/Gallery",
                element: <Gallery/>

            },
            {
                path: "/blogs/:id",
                element: <BlogDetails/>,
                loader: ()=>fetch('/blog.json')

            },
            {
                path: "/bookedHotels/:id",
                element: <BookedHotels/>
            },
            {
                path: "/login",
                element: <Login/>

            },
            {
                path: "/register",
                element: <Register/>
            }
            
        ]
    }
]);

export default router;