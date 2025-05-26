import { useMovieStore } from '@/stores/movie'

export default function MovieList() {
  const movies = useMovieStore(state => state.movies)
  return (
    <div>
      <ul>
        {movies.map(movie => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <img
              src={movie.Poster}
              alt={movie.Title}
              width={100}
              height={150}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

// const abc = () => ({ a: 1 })
