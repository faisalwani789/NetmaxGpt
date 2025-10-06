import React, { useEffect } from 'react'
import {options} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addMovieDetails } from '../utils/movieSlice'
const useMovieDetails = (id) => {
    // console.log(id+"id")
    const dispatch=useDispatch()
    const movieDetails=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(addMovieDetails(res))
        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        movieDetails()
    },[])
 
}

export default useMovieDetails