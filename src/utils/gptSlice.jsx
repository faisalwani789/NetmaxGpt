import { createSlice } from "@reduxjs/toolkit";

const aiSlice=createSlice({
    name:'ai',
    initialState:{
        movieNames:null,
        movieList:null,
        aiMode:false,
    },
    reducers:{
        addMovieList:(state,action)=>{
            const{movieNames,movieList}=action.payload
            state.movieList=movieList
            state.movieNames=movieNames
        }
        ,
        changeAiMode:(state,action)=>{
            state.aiMode=action.payload
        }
    }
})

export const {addMovieList,changeAiMode}=aiSlice.actions
export default aiSlice.reducer