import { TMDB_BASE_URL } from '../utils/constants'
const MovieCard = ({img}) => {
    return (
        <div className='w-60 h-40 shrink-0 rounded-lg'>
            <img className='w-full h-full object-cover object-center rounded-lg' src={TMDB_BASE_URL + img}/>
        </div>
    )
}

export default MovieCard