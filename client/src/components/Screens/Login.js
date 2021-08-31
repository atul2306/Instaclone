import React, { useState, useContext } from "react"
import { NavLink, useHistory } from "react-router-dom"

import "../style/login.css"
import img from "../images/atul.jpeg"

import { UserContext } from "../../reducer/UserContext"
import { toast } from "react-toastify"
const Login = () => {
    const history = useHistory()
    const { login } = useContext(UserContext)
    const loginsubmit = ((e) => {
        e.preventDefault()
        const formdata = new FormData(e.target)
        // console.log(formdata.get())
        fetch("http://localhost:5000/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Object.fromEntries(formdata))
        }).then((res) => res.json())
            .then((res) => {
                console.log(res)
                if (res.ok) {


                    toast.success(res.message, { position: toast.POSITION.TOP_RIGHT })
                    login(res.userDetails, res.token)

                    history.push("/")
                }
                else {
                    toast.warn(res.message, { position: toast.POSITION.TOP_RIGHT })
                }

            })
            .catch((err) => {

                console.log(err)
                toast.error("Something went wrong, Please try again", { position: toast.POSITION.TOP_RIGHT })
            })

    })

    return (


        <>


            <div className="L-start">

                <div className="L-star">
                    <div className="L-sta">
                        <h2>Instagram</h2>
                        <form onSubmit={loginsubmit} className="L-st">
                            <input type="text" placeholder="  Phone no,username ,or email" name="email" />
                            <input type="text" placeholder="  Password" name="password" />

                            <button type="submit">Log In</button>
                        </form>
                        <p></p>
                        <span>OR</span>
                        <i style={{ color: "blue" }} className="fa fa-facebook-official" aria-hidden="true"><h7>  <NavLink to="/"> Log in with Facebook</NavLink></h7></i>
                        <h9><NavLink to="/">Forgot password?</NavLink></h9>
                    </div>
                </div>
                <h5>Don't have an account?<NavLink to="/signup">Signup</NavLink></h5>
                <img src={img} alt="no" />

            </div>
        </>
    )
}
export default Login