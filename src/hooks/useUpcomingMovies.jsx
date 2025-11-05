import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMoviesMovies=()=>{
 const dispatch=useDispatch()
 const {upComingMovies}=useSelector(store=>store?.movies)
    const getUpComingMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(addUpcomingMovies(res.results))
            })
            .catch(err => console.error(err));
    }
    useEffect(()=>{
      !upComingMovies &&  getUpComingMovies()
    },[])
}
export default useUpcomingMoviesMovies