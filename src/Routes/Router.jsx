import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root";

import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path: "/",
                element:<HomePage/>
            }
        ]
    }
]);

export default router;