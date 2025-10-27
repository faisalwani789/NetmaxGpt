import React, { useEffect } from 'react'
import { options } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/movieSlice'

const useGetMovieVideos = (movie_id) => {
  const dispatch = useDispatch()


  try {
    useEffect(() => {
      const getMovieVideos = () => {
        fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, options)
          .then((res) => res.json())
          .then((res) => {
            const filterData = res.results.filter((x) => x.type == "Trailer")
            const trailer = filterData.length ? filterData[0] : res[0]
            console.log(trailer + "trailer")
            dispatch(addTrailerVideo(trailer))
          })
          .catch(err => console.error(err));
      }
      getMovieVideos()
    }, [movie_id,dispatch])
  } catch (error) {
    console.log(error)
  }


}

export default useGetMovieVideos