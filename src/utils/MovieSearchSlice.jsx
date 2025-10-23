import { createSlice } from "@reduxjs/toolkit";


const MovieSearch=createSlice({
    name:'movieSearch',
    initialState:{
        searched:[]
    },
    reducers:{
        addMoviesTo:(state,action)=>{
            state.searched= action.payload
        }
    }

})
export const {addMoviesTo}=MovieSearch.actions
export default MovieSearch.reducer