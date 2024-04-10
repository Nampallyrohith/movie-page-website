import MovieCard from '../MovieCard'
import './index.css'

const CommonList = props => {
    const {moviesList} = props
    return(
        <ul className='movies-list'>
            {
                moviesList.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </ul>
    )
}

export default CommonList