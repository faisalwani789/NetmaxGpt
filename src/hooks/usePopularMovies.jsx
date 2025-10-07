import React, { useEffect } from 'react'
import {options} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
const usePopularMovies = () => {
    const dispatch=useDispatch()
    const popularMovies=()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular`,options)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(addPopularMovies(res.results))
        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
        popularMovies()
    },[])
 
}

export default usePopularMovies