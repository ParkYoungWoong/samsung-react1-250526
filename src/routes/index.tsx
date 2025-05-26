import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from '@/routes/pages/Home'
import About from '@/routes/pages/About'
import Movies from '@/routes/pages/Movies'
import MovieDetails from '@/routes/pages/MovieDetails'
import DefaultLayout from '@/routes/layouts/Default'

const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      {
        path: '/', // http://localhost:5173/
        element: <Home />
      },
      {
        path: '/about', // http://localhost:5173/about/index.html
        element: <About />
      },
      {
        path: '/movies', // http://localhost:5173/movies/index.html
        element: <Movies />
      },
      {
        path: '/movies/:movieId',
        element: <MovieDetails /> // http://localhost:5173/movies/tt1234567
      }
    ]
  }
])

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>
}
