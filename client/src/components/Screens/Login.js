import React from "react"
import { NavLink } from "react-router-dom"
import "../style/login.css"
import img from "../images/atul.jpeg"
 
const Login = () => {
    return (
        <>
            <div className="L-start">
            
                <div className="L-star">
                    <div className="L-sta">
                        <h2>Instagram</h2>
                        <div className="L-st">
                            <input type="text" placeholder="  Phone no,username ,or email" />
                            <input type="text" placeholder="  Password" />
                        </div>
                        <button value="REGISTER">Log In</button>
                        <p></p>
                        <span>OR</span>
                        <i style={{color:"blue"}} className="fa fa-facebook-official" aria-hidden="true"><h7>  <NavLink   to="/"> Log in with Facebook</NavLink></h7></i>
                        <h9><NavLink  to="/">Forgot password?</NavLink></h9>
                    </div>
                </div>
               <h5>Don't have an account?<NavLink to="/signup">Signup</NavLink></h5>
               <img src={img} alt="no"/>
                
            </div>
        </>
    )
}
export default Login