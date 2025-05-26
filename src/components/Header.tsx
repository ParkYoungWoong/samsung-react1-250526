import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header>
      {navigations.map(nav => (
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
          Home
        </NavLink>
      ))}
    </header>
  )
}
