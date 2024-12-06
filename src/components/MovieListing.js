import { Box } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux';

const MovieListing = () => {
  const  movies = useSelector((state) => state.movies);
  const uniqueMovies = [...new Map(movies.map(movie => [movie.imdbID, movie])).values()];
  return (
    <Box>
      {movies && movies.length > 0 ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No movies found.</p>
      )}
    </Box>
  )
}

export default MovieListing