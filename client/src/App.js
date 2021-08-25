import React,{useEffect,createContext} from "react"
import Navbar  from "./components/Navbar"
import "./App.css"
import Home from "./components/Screens/Home"
import Login from "./components/Screens/Login"
import Profile from "./components/Screens/Profile"
import Signup from "./components/Screens/Signup"
import Createpost from "./components/Screens/Createpost"
import { Route } from "react-router-dom"
const usercontext=createContext()
const App=()=>{
  return (
    <>
      
        <Navbar/>
        <Route exact path="/"><Home/></Route>
        <Route path="/login"><Login/></Route>
        <Route path="/profile"><Profile/></Route>
        <Route path="/signup"><Signup/></Route>
        <Route path="/create"><Createpost/></Route>
         
    </>
  )
}
export default App