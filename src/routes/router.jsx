import { createBrowserRouter } from "react-router-dom"
import Browse from "../components/Browse"
import App from "../App"
import Body from "../components/Body"

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
            }
        ]
    },
    // {
    //     path:"/browse",
    //     element:<Browse/>
    // }
])