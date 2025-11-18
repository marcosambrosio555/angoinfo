import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import { Home } from './pages/Home'
import { History } from './pages/History'
import { Data } from './pages/Data'
import { Articles } from './pages/Articles'
import { Weather } from './pages/Weather'
import { Provinces } from './pages/Provinces'
import { Rankings } from './pages/Rankings'
import { Curiosities } from './pages/Curiosities'
import { News } from './pages/News'
import { Quiz } from './pages/Quiz'
import { IdentityCard } from './pages/Identity-card'
import { ElementError } from './pages/ElementError'
import { About } from './pages/About'
import { Conveter } from './pages/Converter'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ElementError />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Navigate to={"/"} /> },
      { path: "/history", element: <History /> },
      { path: "/data", element: <Data /> },
      { path: "/articles", element: <Articles /> },
      { path: "/weather", element: <Weather /> },
      { path: "/provinces", element: <Provinces /> },
      { path: "/rankings", element: <Rankings /> },
      { path: "/curiosities", element: <Curiosities /> },
      { path: "/news", element: <News /> },
      { path: "/quiz", element: <Quiz /> },
      { path: "/about", element: <About /> },
      { path: "/converter", element: <Conveter /> },
      { path: "/identity-card", element: <IdentityCard /> },
    ]
  }
])

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )