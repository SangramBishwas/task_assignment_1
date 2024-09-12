import {
    createBrowserRouter
} from "react-router-dom";
import Root from "./Root";
import Navbar from "./Nav";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Navbar></Navbar>
            }
        ]
    },
]);

export default router