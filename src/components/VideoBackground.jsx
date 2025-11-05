const VideoBackground = ({movieId, youtube_key }) => {
  
  // useGetMovieVideos(movieId, addTrailerVideo)
  // const{trailerVideo}=useSelector(store=>store.movies)
  // const currentVideoTrailer=useSelector(store=>store.movies?.trailerVideo)
  // console.log(currentVideoTrailer)
  // const youtube_key=currentVideoTrailer?.key
  return (
    <div className=' relative w-[100%] h-0 pb-[56.25%] overflow-hidden brightness-110  bg-gradient-to-t from-black'>
      <iframe className='absolute w-full h-[100%] scale-135  ' src={`https://www.youtube.com/embed/${youtube_key}?rel=0&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&playlist=${youtube_key}&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
      <div className='absolute inset-0 bg-gradient-to-t from-black/100 to-transparent'></div>
    </div >
  )
}

export default VideoBackground