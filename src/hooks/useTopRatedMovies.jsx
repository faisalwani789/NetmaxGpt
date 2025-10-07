import {useEffect} from 'react'
import { options } from '../utils/constants';
import { addTopRatedMovies } from '../utils/movieSlice';
import { useDispatch } from 'react-redux';
const useTopRatedMovies = () => {
    const dispatch=useDispatch()
  const popularMovies=()=>{
          fetch(`https://api.themoviedb.org/3/movie/top_rated`,options)
          .then((res)=>res.json())
          .then((res)=>{
              dispatch(addTopRatedMovies(res.results))
          })
          .catch(err => console.error(err));
      }
      useEffect(()=>{
          popularMovies()
      },[])
}

export default useTopRatedMovies