import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSimilarMovies } from '../utils/movieSlice'
import { useSelector } from 'react-redux'
const useSimilarMovies = (id) => {
    const dispatch = useDispatch()
     const {similarMovies}=useSelector(store=>store.movies)
     const fetchSimilarMovies = () => {           
            fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, options)
                .then((res) => res.json())
                .then((res) =>{ 
                    console.log(res)
                    dispatch(addSimilarMovies(res.results))})
                .catch((err) => {
                    console.log(err)
                })
        }
    useEffect(() => {

        fetchSimilarMovies()
    }, [id,dispatch])
}

export default useSimilarMovies