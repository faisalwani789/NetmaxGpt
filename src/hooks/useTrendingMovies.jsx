import {useEffect} from 'react'
import { options } from '../utils/constants';
import { addTrendingMovies } from '../utils/movieSlice';
import { useDispatch ,useSelector} from 'react-redux';
const useTrendingMovies = () => {
    const dispatch=useDispatch()
     const {trendingMovies}=useSelector(store=>store?.movies)
  const getTrendingMovies=()=>{
          fetch(`https://api.themoviedb.org/3/trending/movie/week`,options)
          .then((res)=>res.json())
          .then((res)=>{
              dispatch(addTrendingMovies(res.results))
          })
          .catch(err => console.error(err));
      }
      useEffect(()=>{
        !trendingMovies &&  getTrendingMovies()
      },[])
}

export default useTrendingMovies