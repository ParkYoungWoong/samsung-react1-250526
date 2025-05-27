import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const currentMovie = useMovieStore(state => state.currentMovie)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [movieId])

  return (
    <>
      {currentMovie && (
        <div className="mx-auto flex max-w-[1000px] gap-[30px]">
          <div className="w-[500px] shrink-0">
            <img
              src={currentMovie.Poster.replace('SX300', 'SX1000')}
              alt={currentMovie.Title}
              width={500}
            />
          </div>
          <div>
            <h1 className="text-[60px] font-bold">{currentMovie.Title}</h1>
            <p>{currentMovie.Plot}</p>
            MovieInfo
          </div>
        </div>
      )}
    </>
  )
}

function MovieInfo({ title, children }) {
  return <></>
}
