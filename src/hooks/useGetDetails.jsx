import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieDetails } from '../utils/movieSlice'
import { useSelector } from 'react-redux'
const useGetDetails = (id) => {
    const dispatch=useDispatch()
     const {movieDetails}=useSelector(store=>store.movies)
    const fetchMovieInfo=()=>{
         fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then((res) => res.json())
            .then((res) =>{
                dispatch(addMovieDetails(res))
                // console.log(res)
            }) 
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        !movieDetails && fetchMovieInfo(id)
    }, [id])
}

export default useGetDetails