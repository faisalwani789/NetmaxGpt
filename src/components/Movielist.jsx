import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
    
  return (
    <div className='ml-15'>   
        <h4 className='text-2xl text-white py-4'>{title}</h4>
        <div className='flex gap-3 overflow-x-scroll hide-scrollbar  mb-10 '>
        {movies?.map((movie)=><MovieCard key={movie.id}  img={movie.backdrop_path}/>)}
        </div>
    </div>
  )
}

export default Movielist