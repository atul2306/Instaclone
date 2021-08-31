import React, { useState } from "react"
import Navbar from "./components/Navbar"
import "./App.css"
import Home from "./components/Screens/Home"
import Login from "./components/Screens/Login"
import Profile from "./components/Screens/Profile"
import Signup from "./components/Screens/Signup"
//import Logout from "./components/Screens/Logout"
import Createpost from "./components/Screens/Createpost"
import { Route, Switch, useHistory } from "react-router-dom"
import { UserContext } from "./reducer/UserContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "./customHooks/authHook"


const App = () => {
  // const [userDetails, setUserdetails] = useState({});
  // const setUserdetailsHandler = (data) => {
  //   setUserdetails(data)
  // }

  const auth = useAuth()
  const authContextValue = {
    userDetails: auth.userDetails,
    isLoggedIn: !!auth.token,  // return boolean
    token: auth.token,
    login: auth.login,
    logout: auth.logout,
    googleLogin: auth.googleLogin
    

  }
  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={ authContextValue}>
        <Navbar />

        <Switch>
          <Route exact path="/"><Home /></Route>  // component equal to { } kr ke b kr skta
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/profile"><Profile /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/create"><Createpost /></Route>
         
        </Switch>
      </UserContext.Provider>
    </>
  )
}
export default App