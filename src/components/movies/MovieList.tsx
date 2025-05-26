import { useMovieStore } from '@/stores/movie'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </div>
  )
}

// const abc = () => ({ a: 1 })
