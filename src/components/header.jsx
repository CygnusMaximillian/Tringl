import "./header.css"
import { Link } from "react-router-dom"

export default function header(params) {
  return (
    <header>
      <nav>
       
        <span className="logo">
          <svg width="30" height="28" viewBox="0 0 30 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 0.875C15.7324 0.875 16.4121 1.25 16.8047 1.87109L29.4961 22.1094C29.8242 22.6309 30 23.2344 30 23.8496C30 25.6602 28.5352 27.125 26.7246 27.125H3.27539C1.46484 27.125 0 25.6602 0 23.8496C0 23.2344 0.175781 22.6309 0.503906 22.1094L13.1953 1.87109C13.582 1.25 14.2676 0.875 15 0.875ZM18.8086 12.125L15 6.05469L10.3652 13.4434L11.4375 14.873C11.8125 15.3711 12.5625 15.3711 12.9375 14.873L14.4375 12.875C14.7891 12.4004 15.3457 12.125 15.9375 12.125H18.8086Z" fill="#059669"/>
          </svg>
          <span className="logo-text">Tringl</span>
        </span>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="/destination">Destinations</a>
          <Link to="/packages">Packages</Link>
          <a href="/reviews">Reviews</a>
          <a href="/blog">Blog</a>
          <a href="/contact">Contact</a>
        </div>
        <Link to="/signup" className="signup-button">Sign In</Link>
      </nav>
    </header>
  )
}