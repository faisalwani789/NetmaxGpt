import Movielist from "./Movielist"
import { useSelector } from "react-redux"
import lang from "../utils/languageConstants"
const SecondaryContainer = () => {
    const Movies = useSelector(store => store.movies)
    const langKey = useSelector((store) => store.config?.langKey)
    return (
        <div className=" bg-black border-2 relative z-12 shadow-lg ">
            <div className="-mt-55">
                <Movielist title={lang[langKey]["Now Playing"]} movies={Movies?.nowPlayingMovies} />
                <Movielist title={lang[langKey]["Trending"]} movies={Movies?.trendingMovies} />
                <Movielist title={lang[langKey]["Top Rated"]} movies={Movies?.topRated} />
                <Movielist title={lang[langKey]["Popular"]} movies={Movies?.popularMovies} />
                <Movielist title={lang[langKey]["Upcoming"]} movies={Movies?.upcomingMovies} />
  
            </div>
        </div>
    )
}
export default SecondaryContainer