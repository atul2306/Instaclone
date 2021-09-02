import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../reducer/UserContext"

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(UserContext)
  const Nav = () => {
    if (isLoggedIn) {
      return (
        <>
        
          <li><NavLink to="/profile">Profile</NavLink></li>
          <li><NavLink to="/create">Add Post</NavLink></li>
          <li><NavLink to="/login" onClick={logout}>Log Out</NavLink></li>
        </>
      )
    }
    else {
      return (
        <>

          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Register</NavLink></li>

        </>
      )
    }





  }
  return (
    <>
      <nav>
        <div className="nav-wrapper white">
        <NavLink to="/" className="brand-logo left">Instagram</NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Nav />



          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar