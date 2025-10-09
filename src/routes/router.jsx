import { createBrowserRouter } from "react-router-dom"
import Browse from "../components/Browse"
import App from "../App"
import Body from "../components/Body"
import Search from "../components/Search"


export const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                index:true, 
                element:<Body/>,
            
            },
            {
                path:"/browse",
                 element:<Browse/>
            },
            {
                path:"/search",
                element:<Search/>
            }
        ]
    },
    // {
    //     path:"/browse",
    //     element:<Browse/>
    // }
])