import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  // 라우트객체
  {
    path: '/', // http://localhost:5173/
    element: <h1>Home!</h1>
  },
  {
    path: '/about', // http://localhost:5173/about
    element: <h1>About?</h1>
  }
])

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>
}
