import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/Login";
import { Dashboard } from "@mui/icons-material";

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