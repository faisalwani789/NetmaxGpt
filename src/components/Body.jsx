import Login from "./Login"
import { appRouter } from "../routes/router"
import { RouterProvider } from "react-router-dom"
const Body=()=>{
    return(
        <div>
           <RouterProvider router={appRouter} />
        </div>
    )
}
export default Body