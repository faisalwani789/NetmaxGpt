import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
const useUpcomingMoviesMovies=()=>{
 const dispatch=useDispatch()
    const upComingMovies = () => {
        fetch('https://api.themoviedb.org/3/movie/upcoming', options)
            .then(res => res.json())
            .then(res => {
                console.log(res)
                dispatch(addUpcomingMovies(res.results))
            })
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        upComingMovies()
    },[])
}
export default useUpcomingMoviesMovies