import Header from "./Header"
import { useSelector } from 'react-redux'
import Movielist from './Movielist'
import { FiArrowUp } from 'react-icons/fi'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { options } from '../utils/constants'
import { addMovieList, changeAiMode } from '../utils/gptSlice'

const SearchResults = () => {
 
  const inputRef = useRef(null)
  const dispatch = useDispatch()
  const { movieNames, movieList , aiMode } = useSelector(store => store.ai)
  const { searched } = useSelector(store => store.movieSearch)

  const searchMovies = (name) => {
    return fetch("https://api.themoviedb.org/3/search/movie?query=" + name, options)
      .then((res) => res.json())
      .then(res => { return res.results })

  }



  const getAiResults = () => {
    dispatch(changeAiMode(true))
    const prompt = inputRef.current.value
    fetch(import.meta.env.VITE_AI_URI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }), // sending user input
    }).then((res) => res.json())
      .then((res) => {
        const { aiResults } = res
        const movieListPromises = aiResults.map(movie => searchMovies(movie))
        Promise.all(movieListPromises).then((res) => {
          // console.log(res)
          dispatch(addMovieList({ movieList: res, movieNames: aiResults })) //passing object to reducer func containing both movienames from ai result and movieList(movie data from tmdb apis)
        })
        //promise.all takes n promise => gives one promise ,then() registers a callback , also receives the resolved value and returns another promise if available
        //in above we understood promises , promise chaining and use of then()

      });


  }
  return (
    <div className='bg-black'>
      <Header defaultBackground={"bg-black"} />
      <div className='min-h-[100dvh]  pt-25  '>
        <div className='bg-white md:w-200 w-full  flex px-4 py-2  md:mx-auto' >
          <input className='outline-0 w-full  ' type='text' ref={inputRef} placeholder='wanna try out movie suggestions/searches using Ai Capabliites'></input>
          <FiArrowUp className='text-black text-2xl' onClick={getAiResults} />
        </div>

        <h1>{movieNames}</h1>

        {/* {movieList?.map((movies,i)=><Movielist movies={movies} title={movies[i].title} />)} */}
        {aiMode && movieNames?.map((movieName, i) => <Movielist key={movieName} movies={movieList[i]} title={movieName} />)}
        <div  className='flex flex-wrap gap-x-2 gap-y-5 md:pt-20 md:mt-15 md:px-14 px-2'>
          {/* {movieSearch?.map((movieArray)=>movieArray.map((movie)=><MovieCard img={movie.poster_path}  />))} */}
          {!aiMode &&  <Movielist movies={searched}/>}

        </div>

      </div>

    </div>
  )
}

export default SearchResults