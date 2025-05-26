import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '@/stores/movie'

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    fetchMovieDetails(movieId)
  }, [movieId])

  return <></>
}
