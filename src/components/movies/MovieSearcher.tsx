import { useMovieStore } from '@/stores/movie'

// 훅(Hook) 함수, 컴포넌트 함수 안에서 사용!

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  return (
    <div>
      <input
        onKeyDown={event => {
          if (event.key === 'Enter') {
            fetchMovies()
          }
        }}
      />
      <button onClick={() => fetchMovies()}>검색!</button>
    </div>
  )
}
