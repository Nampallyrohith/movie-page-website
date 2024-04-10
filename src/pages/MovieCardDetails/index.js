import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css'

const MovieCardDetails = () => {
    const [movieDetails, setMovieDetails] = useState('');
    const [genres, setGenres] = useState([])
    const [castDetails, setCastDetails] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const getMovieDetails = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}?api_key=c95584a34ca2f6b53f8a88c1d9cbb28c&language=en-US`;
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU1ODRhMzRjYTJmNmI1M2Y4YTg4YzFkOWNiYjI4YyIsInN1YiI6IjY2MTU1MzkxMTVhNGExMDE3ZGY4OGQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GeCia3NWkTXMgr6ALg7PMJeTCpuvt-emT7pbVDOlVQU';
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                method: 'GET'
            };
            const response = await fetch(url, options);
            if (response.ok) {
                const data = await response.json();
                const updatedData = { ...data };
                setMovieDetails(updatedData);
                setGenres(updatedData.genres)
                
            }
        };

        const getMovieCast = async () => {
            const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c95584a34ca2f6b53f8a88c1d9cbb28c&language=en-US`;
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTU1ODRhMzRjYTJmNmI1M2Y4YTg4YzFkOWNiYjI4YyIsInN1YiI6IjY2MTU1MzkxMTVhNGExMDE3ZGY4OGQxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GeCia3NWkTXMgr6ALg7PMJeTCpuvt-emT7pbVDOlVQU';
            const options = {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                method: "GET",
            };

            const response = await fetch(url, options);
            const data = await response.json();
            setCastDetails(data.cast)
        };

        getMovieCast();
        getMovieDetails();
    }, [id]);

    return (
        <div>
            {/* movie details */}
            <div className='movie-details'>
                <div>
                    <div className='details'>
                        <img className='poster' src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt='poster' />
                        <div className='info'>
                            <h1>{movieDetails.title}</h1>
                            <h4>Rating: {movieDetails.vote_average}</h4>
                            <div>
                                <p>{movieDetails.runtime} min</p>
                                <ul>
                                    {genres.map(genre => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))}
                                </ul>
                                
                            </div>
                            <p>Release Date: {movieDetails.release_date}</p>
                        </div>
                    </div>
                    <h2>Overview</h2>
                    <p>{movieDetails.overview}</p>
                </div>
                <img className='backdrop' src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.title} />
            </div>

            {/* movie cast details */}
            <h2 className='heading'>Cast</h2>
            <ul className='cast-container'>
                {
                    castDetails.map(each => (
                        <li key={each.id}>
                            <div className='cast-card'>
                                <img src={`https://image.tmdb.org/t/p/w500${each.profile_path}`} alt="profile" />
                                <h5>{each.original_name}</h5>
                                {/* <p>{each.character}</p> */}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default MovieCardDetails;
