import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieDetail:null,
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addMovieDetails:(state,action)=>{
            state.movieDetail=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
    
})
export const{addNowPlayingMovies,addMovieDetails,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer
