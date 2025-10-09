import { options } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
const useNowPlayingMovies=()=>{
 const dispatch=useDispatch()
    const nowPlaying = () => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', options)
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                dispatch(addNowPlayingMovies(res.results))
            })
            .catch(err => console.error(err));
    }
    useEffect(()=>{
        nowPlaying()
    },[])
}
export default useNowPlayingMovies