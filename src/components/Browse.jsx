import Header from "./Header"
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import useTrendingMovies from "../hooks/useTrendingMovies"
import useUpcomingMoviesMovies from "../hooks/useUpcomingMovies"


const Browse = () => {
   
    useNowPlayingMovies()
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