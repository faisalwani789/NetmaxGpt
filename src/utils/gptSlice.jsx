import { createSlice } from "@reduxjs/toolkit";

const aiSlice=createSlice({
    name:'ai',
    initialState:{
        movieNames:null,
        moveieList:null,
    },
    reducers:{
        addMovieList:(state,action)=>{
            const{movieNames,movieList}=action.payload
            state.moveieList=movieList
            state.movieNames=movieNames
        }
    }
})

export const {addMovieList}=aiSlice.actions
export default aiSlice.reducer