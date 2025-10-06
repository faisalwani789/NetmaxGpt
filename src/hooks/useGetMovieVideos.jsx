import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const useGetMovieVideos = (movie_id) => {
  console.log(movie_id)
  const dispatch = useDispatch()
  const getMovieVideos = () => {
    fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(JSON.stringify(res,null,2)+"movieVideos")
        const filterData = res.results.filter((x) => x.type == "Trailer")
        const trailer = filterData.length ? filterData[0] : res[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {
    getMovieVideos()
  }, [])

}

export default useGetMovieVideos