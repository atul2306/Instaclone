import React from "react"
import Navbar  from "./components/Navbar"
import "./App.css"
import Home from "./components/Screens/Home"
import Login from "./components/Screens/Login"
import Profile from "./components/Screens/Profile"
import Signup from "./components/Screens/Signup"
import { Route } from "react-router-dom"
const App=()=>{
  return (
    <>
      
        <Navbar/>
        <Route exact path="/"><Home/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/signup"><Signup/></Route>
         
    </>
  )
}
export default App