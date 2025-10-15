import Header from "./Header"
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import useUpcomingMoviesMovies from "../hooks/useUpcomingMovies"
import { useEffect } from "react"
import { options } from "../utils/constants"


const Browse = () => {
   
    // useNowPlayingMovies()
    // useEffect(()=>{
    //     const fetchRes=()=>{
    //         fetch("https://api.themoviedb.org/3/account/22360624",options)
    //     .then((res)=>res.json())
    //     .then((res)=>console.log(res))
    //     }
    //     fetchRes()
    // },[])
    useTrendingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpcomingMoviesMovies()

    return (

        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    )
}
export default Browse