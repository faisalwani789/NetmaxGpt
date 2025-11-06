import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
import useGetMovieVideos from "../hooks/useGetMovieVideos"
import { addTrailerVideo } from "../utils/movieSlice"
import YouTubePlayer from "./YoutubePlayer"
import { setMainPlayingId } from "../utils/configurationSlice"
import { useDispatch } from "react-redux"
const MainContainer = () => {
const dispatch=useDispatch()
    const { nowPlayingMovies} = useSelector(store => store.movies)
    useGetMovieVideos(nowPlayingMovies?.[6]?.id,addTrailerVideo)
    const{trailerVideo}=useSelector(store=>store?.movies)
    // useGetMovieVideos(mainMovie.id, addTrailerVideo)
    if (!nowPlayingMovies) return //if movies is null till movies is fetched from the store
    // console.log("movies fetched"+JSON.stringify(movies[0]))
    const mainMovie = nowPlayingMovies[2]
    dispatch(setMainPlayingId(trailerVideo?.key))
    // const youtube_key=
    return (
        <div className="relative" >
            <VideoTitle title={mainMovie.original_title} overview={mainMovie.overview} movieId={mainMovie.id} poster={mainMovie.poster_path} />
            {/* <VideoBackground movieId={mainMovie.id} youtube_key={trailerVideo?.key} /> */}

            <YouTubePlayer videoId={trailerVideo?.key}/>
             <div className='absolute z-5 inset-0 bg-gradient-to-t from-black/100 to-transparent'></div>
        </div>

    )
}
export default MainContainer