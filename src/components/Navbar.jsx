import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logos/IPAC-1-2.png'
import './Navbar.css'

const links = [
  { to: '/', label: 'About' },
  { to: '/philosophy', label: 'Philosophy' },
  { to: '/events', label: 'Events' },
  { to: '/students', label: 'Students' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          <div
            className="navbar-logo"
            role="img"
            aria-label="Indian Percussive Arts Center"
            style={{ backgroundImage: `url(${logo})` }}
          />
        </NavLink>

        <button
          className={`hamburger ${open ? 'open' : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`nav-links ${open ? 'open' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
