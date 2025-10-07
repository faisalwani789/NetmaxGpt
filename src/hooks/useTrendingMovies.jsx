import {useEffect} from 'react'
import { options } from '../utils/constants';
import { addTrendingMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
const useTrendingMovies = () => {
    const dispatch=useDispatch()
  const trendingMovies=()=>{
          fetch(`https://api.themoviedb.org/3/trending/movie/week`,options)
          .then((res)=>res.json())
          .then((res)=>{
              dispatch(addTrendingMovies(res.results))
          })
          .catch(err => console.error(err));
      }
      useEffect(()=>{
          trendingMovies()
      },[])
}

export default useTrendingMovies