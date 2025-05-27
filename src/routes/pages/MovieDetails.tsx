import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { useMovieStore } from '@/stores/movie'
import Loader from '@/components/Loader'

export default function MovieDetails() {
  const { movieId } = useParams()
  const fetchMovieDetails = useMovieStore(state => state.fetchMovieDetails)
  const currentMovie = useMovieStore(state => state.currentMovie)
  const [isLoading, setIsLoading] = useState(true)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    init()
  }, [movieId])

  async function init() {
    // 함수 실행
    // ...
    // console.log()
    // ...
    await fetchMovieDetails(movieId)
    setIsLoading(false)
  }

  return (
    <>
      {isLoading ? (
        <Loader
          size={100}
          weight={5}
          color="#333"
        />
      ) : (
        currentMovie && (
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
              <MovieInfo title="Ratings">
                {currentMovie.Ratings.map(rating => (
                  <div key={rating.Source}>
                    {rating.Source} - {rating.Value}
                  </div>
                ))}
              </MovieInfo>
              <MovieInfo title="Actors">{currentMovie.Actors}</MovieInfo>
              <MovieInfo title="Director">{currentMovie.Director}</MovieInfo>
              <MovieInfo title="Genre">{currentMovie.Genre}</MovieInfo>
            </div>
          </div>
        )
      )}
    </>
  )
}

function MovieInfo({
  title,
  children
}: {
  title: string
  children?: React.ReactNode
}) {
  return (
    <div className="mt-[20px]">
      <h3 className="text-[20px] font-bold">{title}</h3>
      {children}
    </div>
  )
}

// function fetchMovie() {
//   return new Promise((resolve, reject) => {
//     if (유효하다) {
//       setTimeout(() => {
//         resolve(123)
//       }, 2000)
//       return
//     }
//     reject(new Error('유효하지 않다'))
//     console.log('reject!!')
//   })
// }
// async function fetchMovie() {
//   if (유효하다) {
//     return 123
//   }
//   throw new Error('유효하지 않다')
// }

// try {
//   const res = await fetchMovie()
//   console.log(res) // 123
// } catch (error) {
//   console.error(error)
// }
