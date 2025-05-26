import { create } from 'zustand'
import { combine } from 'zustand/middleware'

export interface ResponseValue {
  Search: Movie[]
  totalResults: string
  Response: string
}
export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[]
    },
    (set, get) => {
      return {
        setSearchText: (newText: string) => {
          set({
            searchText: newText
          })
        },
        fetchMovies: async () => {
          const { searchText } = get()
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          const { Search } = await res.json()
          set({
            movies: Search
          })
        },
        fetchMovieDetails: async (movieId?: string) => {
          if (!movieId) return
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
          )
          const movie = await res.json()
          console.log(movie)
        }
      }
    }
  )
)
