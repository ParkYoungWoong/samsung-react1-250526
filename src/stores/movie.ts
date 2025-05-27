import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { delay } from '@/utils'

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
// https://transform.tools/json-to-typescript
export interface MovieDetails {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}
export interface Rating {
  Source: string
  Value: string
}

export const useMovieStore = create(
  combine(
    {
      searchText: '',
      movies: [] as Movie[],
      currentMovie: null as MovieDetails | null,
      isLoading: false
    },
    (set, get) => {
      return {
        setSearchText: (newText: string) => {
          set({
            searchText: newText
          })
        },
        fetchMovies: async () => {
          const { searchText, isLoading } = get()
          if (isLoading) return
          set({
            isLoading: true
          })
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&s=${searchText}`
          )
          const { Search } = await res.json()
          set({
            movies: Search || [],
            isLoading: false
          })
        },
        fetchMovieDetails: async (movieId?: string) => {
          if (!movieId) return
          await delay(5000)
          const res = await fetch(
            `https://omdbapi.com?apikey=7035c60c&i=${movieId}`
          )
          const movie = await res.json()
          set({
            currentMovie: movie
          })
        }
      }
    }
  )
)
