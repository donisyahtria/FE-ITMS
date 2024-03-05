import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/Login";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <SignIn/>
    },
    {
        path: "dashboard",
        element: <Dashboard/>,
    }
])

export default router