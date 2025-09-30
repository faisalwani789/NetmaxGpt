import { createBrowserRouter } from "react-router-dom"
import Body from "../components/Body"
import Browse from "../components/Browse"
import Login from "../components/Login"

export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Login/>
    },
    {
        path:"/browse",
        element:<Browse/>
    }
])