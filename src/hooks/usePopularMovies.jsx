import React, { useEffect } from 'react'
import {options} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux'
const usePopularMovies = () => {
    const dispatch=useDispatch()
     const {popularMovies}=useSelector(store=>store.movies)
    const getPopularMovies=()=>{
        fetch(`https://api.themoviedb.org/3/movie/popular`,options)
        .then((res)=>res.json())
        .then((res)=>{
            dispatch(addPopularMovies(res.results))
        })
        .catch(err => console.error(err));
    }
    useEffect(()=>{
       !popularMovies && getPopularMovies()
    },[])
 
}

export default usePopularMovies