import { NavLink } from 'react-router'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  return (
    <header className="flex gap-[10px]">
      {navigations.map(nav => (
        <NavLink
          key={nav.to}
          to={nav.to}
          className={({ isActive }) => (isActive ? 'text-red-500' : '')}>
          {nav.label}
        </NavLink>
      ))}
    </header>
  )
}
