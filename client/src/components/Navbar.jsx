import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../store/auth'
import './Navbar.css'

export default function Navbar() {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <header>
        <div className="container">
          <div className="logo-brand">
            <Link to="/">Prateek's Corner</Link>
          </div>

          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/service">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <>
                { isLoggedIn ? <li><Link to="/logout">Logout</Link></li> : <><li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li></> }
              </>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
