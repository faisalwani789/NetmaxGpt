import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./userSlice"
import movieReducer from "./movieSlice"
import configReducer from "./configurationSlice"
import aiReducer from "./gptSlice"
import movieSearchReducer from "./MovieSearchSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:movieReducer,
        config:configReducer,
        ai:aiReducer,
        movieSearch:movieSearchReducer
    }
})
export default appStore