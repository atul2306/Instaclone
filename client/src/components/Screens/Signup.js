import React,{useContext} from "react"
import { NavLink, useHistory } from "react-router-dom"
import "../style/signup.css"
import {toast} from "react-toastify"
import {UserContext } from "../../reducer/UserContext"
import { CircularProgress } from "@material-ui/core";
const Signup = () => {
    const history =useHistory()
    const {userDetails,setUserdetailsHandler}= useContext(UserContext)
  
    const submitSign=(e)=>{
        e.preventDefault()
        const formdata= new FormData(e.target)
       // console.log(formdata.get("name"))
        fetch("http://localhost:5000/signup",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json',
              },

           body:JSON.stringify(Object.fromEntries(formdata))
         
           
        }).then((res)=>res.json())
         .then((res)=> {
             console.log(res)
             if(res.ok){
               
              toast.success(res.message,{position:toast.POSITION.TOP_RIGHT})
              setUserdetailsHandler(res)
             history.push("/login")
            } 
            else{
                toast.warn(res.message,{position:toast.POSITION.TOP_RIGHT})
            }
                                
                               
             
             
         })
         .catch((err)=>{
            console.log(err)
            toast.error("Something went wrong, Please try again")
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
                            <form onSubmit={submitSign} className="S-st">
                                <input type="text" placeholder="Email or Password" name="email"  autocomplete="off" />
                                <input type="text" placeholder="  Full Name" name="name" autocomplete="off" />
                                <input type="password" placeholder="  Password" name="password" autocomplete="off" />
                            
                            <button type="submit">Sign up</button>
                            </form>
                            <h9>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</h9>
                        </div>
                    </div>
                    <h5>Have an account?<NavLink to="/login">Login</NavLink></h5>
                </div>
            </>
        )
    
}
export default Signup