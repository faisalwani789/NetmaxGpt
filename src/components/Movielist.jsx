import MovieCard from './MovieCard'

const Movielist = ({title,movies}) => {
    
  return (
    <div className='ml-15 py-8'>   
        <h4 className='text-2xl text-white '>{title}</h4>
        <div className='flex gap-3 overflow-x-scroll overflow-y-visible hide-scrollbar  '>
        {movies?.map((movie)=><MovieCard key={movie.id}  img={movie.backdrop_path} id={movie.id} popularity={movie.popularity} title={movie.title} />)}
        </div>
    </div>
  )
}

export default Movielist