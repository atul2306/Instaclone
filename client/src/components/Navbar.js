import React from "react"
import { NavLink } from "react-router-dom"
const Navbar=()=>{
  return (
    <>
        <nav>
    <div className="nav-wrapper white">
      <NavLink to="/" className="brand-logo left">Instagram</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
    
      
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/signup">Register</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        <li><NavLink to="/create">Add Post</NavLink></li>

      </ul>
    </div>
  </nav>
    </>
  )
}
export default Navbar