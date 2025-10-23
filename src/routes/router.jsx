import { createBrowserRouter } from "react-router-dom"
import Browse from "../components/Browse"
import App from "../App"
import Body from "../components/Body"
import SearchResults from "../components/SearchResults"
import PrivateRoute from "../components/PrivateRoute"


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
                 element:<PrivateRoute><Browse/></PrivateRoute>
            },
            {
                path:"/search",
                element:<PrivateRoute><SearchResults/></PrivateRoute>
            }
        ]
    },
    // {
    //     path:"/browse",
    //     element:<Browse/>
    // }
])