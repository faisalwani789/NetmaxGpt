import Movielist from "./Movielist"
import { useSelector } from "react-redux"
const SecondaryContainer = () => {
    const Movies = useSelector(store => store.movies)
    
    return (
        <div className=" bg-black border-2 relative z-12 shadow-lg ">
            <div className="-mt-55  z-12">
                <Movielist title={"Now playing"} movies={Movies?.nowPlayingMovies} />
                <Movielist title={"Trending"} movies={Movies?.trendingMovies} />
                <Movielist title={"Top Rated"} movies={Movies?.topRated} />
                <Movielist title={"Popular"} movies={Movies?.popularMovies} />
                <Movielist title={"Upcoming"} movies={Movies?.upcomingMovies} />
  
            </div>
        </div>
    )
}
export default SecondaryContainer