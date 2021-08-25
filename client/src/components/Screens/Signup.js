import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"
import "../style/signup.css"
import M from "materialize-css"

const Signup = () => {
    const history = useHistory()
    const [data, setdata] = useState({
        email: "", name: "", password: ""
    })
    const sigregister = (e) => {
        const name1 = e.target.name
        const value = e.target.value
        setdata({ ...data, [name1]: value })
    }

    const postdata = () => {

        const { name, email, password } = data
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#b71c1c red darken-4" })
            return
        }
        fetch("/signup", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        }).then(res => res.json())
            .then(data1 => {
                
                if (data1.error) {
                    M.toast({ html: data.error, classes: "#b71c1c red darken-4" })
                }
                else {
                    M.toast({ html: data1.message, classes: "#2e7d32 green darken-3" })
                    history.push("/login")
                }


            }).catch(err=>{
               console.log(err)
            })
    }
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
                            <input type="text" placeholder="  Mobile Number or Email" name="email" value={data.email} onChange={sigregister} autocomplete="off" />
                            <input type="text" placeholder="  Full Name" name="name" value={data.name} onChange={sigregister} autocomplete="off" />
                            <input type="password" placeholder="  Password" name="password" value={data.password} onChange={sigregister} autocomplete="off" />
                        </div>
                        <button value="REGISTER" onClick={() => postdata()}>Sign up</button>
                        <h9>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h9>
                    </div>
                </div>
                <h5>Have an account?<NavLink to="/login">Login</NavLink></h5>
            </div>
        </>
    )
}
export default Signup