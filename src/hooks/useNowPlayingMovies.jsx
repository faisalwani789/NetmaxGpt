import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useSelector } from "react-redux";
const useNowPlayingMovies=()=>{
 const dispatch=useDispatch()
    const {nowPlayingMovies}=useSelector(store=>store.movies)
    useEffect(()=>{
         const nowPlaying = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
            .then(res => res.json())
            .then(res => {
                dispatch(addNowPlayingMovies(res.results))
            })
            .catch(err => console.error(err));
    }
        !nowPlayingMovies && nowPlaying()
    },[])
}
export default useNowPlayingMovies