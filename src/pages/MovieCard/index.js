import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";

import './index.css'


const MovieCard = props => {
    const {movie} = props
    return (
        <li>
            <Link className='nav-link' to={`/movies/${movie.id}`}>
                <div className='movie-card nav-text-link-3'>
                    <img src= {`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={movie.title} />
                    <div className='movie-info'>
                        <h3>{movie.title}</h3>
                        <div className='rating-container'>
                            <FaStar />
                            <p className='rating'>{movie.voteAverage}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

export default MovieCard