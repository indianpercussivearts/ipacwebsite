import { NavLink } from 'react-router-dom'
import logo from '/logos/IPAC-1-2.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img src={logo} alt="Indian Percussive Arts Center" className="footer-logo" />
          <p className="footer-tagline">A lifelong journey in rhythm, shared together.</p>
        </div>

        <nav className="footer-nav">
          <NavLink to="/">About</NavLink>
          <NavLink to="/philosophy">Philosophy</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/students">Students</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <a
          href="https://www.instagram.com/jjmridangam"
          target="_blank"
          rel="noreferrer"
          className="footer-insta"
        >
          @jjmridangam
        </a>

        <p className="footer-copy">&copy; {new Date().getFullYear()} Indian Percussive Arts Center. All rights reserved.</p>
      </div>
    </footer>
  )
}
