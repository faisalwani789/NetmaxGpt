import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addMovieCast } from '../utils/movieSlice'
import { useSelector } from 'react-redux'
const useGetCast = (id) => {
    const dispatch=useDispatch()
    const {movieCast}=useSelector(store=>store.movies)
    const fetchCast=()=>{
         fetch(`https://api.themoviedb.org/3/movie/${id}/credits`, options)
            .then((res) => res.json())
            .then((res) =>{
                dispatch(addMovieCast(res))
                // console.log(res)
                // console.log(res.crew?.find(x=>x.job=='Director'))
            }) 
            .catch((err) => {
                console.log(err)
            })
    }
    useEffect(() => {
        !movieCast && fetchCast(id) //memoization
    }, [id])
}

export default useGetCast