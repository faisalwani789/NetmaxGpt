import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import configReducer from "./configurationSlice"
import aiReducer from "./gptSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        config:configReducer,
        ai:aiReducer
    }
})
export default appStore