import React from "react"
import { NavLink } from "react-router-dom"
import "../style/signup.css"
const Signup = () => {
    return (
        <>
            <div className="S-start">

                <div className="S-star">
                    <div className="S-sta">
                        <h2>Instagram</h2>
                        <h8>Sign up to see photos and videos from your friends.</h8>
                        <i className="fa fa-facebook-official" aria-hidden="true"><h7>  <NavLink style={{ color: "white" }} to="/"> Log in with Facebook</NavLink></h7></i>
                        <p></p>
                        <span>OR</span>
                        <div className="S-st">
                            <input type="text" placeholder="  Mobile Number or Email" />
                            <input type="text" placeholder="  Full Name" />
                            <input type="password" placeholder="  Password" />
                        </div>
                        <button value="REGISTER">Sign up</button>
                        <h9>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h9> 
                    </div>
                </div>
                <h5>Have an account?<NavLink to="/login">Login</NavLink></h5>
            </div>
        </>
    )
}
export default Signup