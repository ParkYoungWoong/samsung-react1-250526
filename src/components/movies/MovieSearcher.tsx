import { useMovieStore } from '@/stores/movie'

export default function MovieSearcher() {
  const fetchMovies = useMovieStore(state => state.fetchMovies)
  const searchText = useMovieStore(state => state.searchText)
  const setSearchText = useMovieStore(state => state.setSearchText)

  return (
    <div>
      <input
        value={searchText}
        onChange={event => setSearchText(event.target.value)}
        onKeyDown={event => {
          if (event.nativeEvent.isComposing) return
          if (event.key === 'Enter') {
            fetchMovies()
          }
        }}
      />
      <button onClick={() => fetchMovies()}>검색!</button>
    </div>
  )
}
