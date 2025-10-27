import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addSimilarMovies } from '../utils/movieSlice'
const useSimilarMovies = (id) => {
    const dispatch = useDispatch()
    useEffect(() => {
        const fetchSimilarMovies = () => {           
            fetch(`https://api.themoviedb.org/3/movie/${id}/similar`, options)
                .then((res) => res.json())
                .then((res) => dispatch(addSimilarMovies(res.results)))
                .catch((err) => {
                    console.log(err)
                })
        }
        fetchSimilarMovies()
    }, [id,dispatch])
}

export default useSimilarMovies