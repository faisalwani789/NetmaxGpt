import Movielist from "./Movielist"
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
    const nowPlayingMovies = useSelector(store => store.movies?.nowPlayingMovies)
    const popularMovies = useSelector(store => store.movies?.popularMovies)
    const topRatedMovies = useSelector(store => store.movies?.topRated)
    const trendingMovies = useSelector(store => store.movies?.trendingMovies)
    const upComingMovies = useSelector(store => store.movies?.upcomingMovies)
    return (
        <div className=" bg-black border-2 relative z-12 shadow-lg ">
            <div className="-mt-55  z-12">
                <Movielist title={"Now playing"} movies={nowPlayingMovies} />
                <Movielist title={"Trending"} movies={trendingMovies} />
                <Movielist title={"Top Rated"} movies={topRatedMovies} />
                <Movielist title={"Popular"} movies={popularMovies} />
                <Movielist title={"Upcoming"} movies={upComingMovies} />
                
            </div>
        </div>
    )
}
export default SecondaryContainer