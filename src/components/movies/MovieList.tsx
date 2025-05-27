import { Link } from 'react-router'
import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  const isLoading = useMovieStore(state => state.isLoading)
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <ul>
          {movies.map(movie => (
            <li key={movie.imdbID}>
              <Link to={`/movies/${movie.imdbID}`}>
                {movie.Title} ({movie.Year})
              </Link>
              <img
                src={movie.Poster}
                alt={movie.Title}
                width={100}
                height={150}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

// const abc = () => ({ a: 1 })
