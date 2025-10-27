import { createSlice } from "@reduxjs/toolkit";
const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        trailerVideo:null,
        topRated:null,
        trendingMovies:null,
        upcomingMovies:null,
        similarMovies:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addTopRatedMovies:(state,action)=>{
            state.topRated=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        }
        ,
        addSimilarMovies:(state,action)=>{
            state.similarMovies=action.payload
        }
    }
    
})
export const{addNowPlayingMovies,addPopularMovies,addTrailerVideo,addTopRatedMovies,addTrendingMovies,addUpcomingMovies,addSimilarMovies}=movieSlice.actions
export default movieSlice.reducer
