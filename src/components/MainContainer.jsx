import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"
const MainContainer=()=>{
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(!movies)return //if movies is null till movies is fetched from the store
    // console.log("movies fetched"+JSON.stringify(movies[0]))
    const mainMovie=movies[0]
    
    return(
        <div className="" >  
            <VideoTitle  title={mainMovie.original_title} overview={mainMovie.overview} movieId={mainMovie.id} poster={mainMovie.poster_path}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
      
    )
}
export default MainContainer