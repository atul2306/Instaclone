import React from 'react'
import { NavLink } from 'react-router-dom'
import "../style/forgotpass.css"
import {toast} from "react-toastify"
const ForgotPassword = () => {
      
    const formforgot=(e)=>{
        e.preventDefault()
        const formdata= new FormData(e.target)
        fetch("http://localhost:5000/forgot",{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify(Object.fromEntries(formdata))
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res)
            console.log(res.ok)
           if(res.ok){
               toast.success(res.message,{position:toast.POSITION.TOP_RIGHT})
           }
           else{
            toast.warn(res.message,{position:toast.POSITION.TOP_RIGHT})
           }
        }).catch((err)=>{
            console.log(err)
            toast.error("Something went wrong, Please try again",{position:toast.POSITION.TOP_RIGHT})
        })
    }
    
    return (
        <>
            <div className="Forg-container">
                <div className="ForgotCss">
                    <form onSubmit={formforgot} className="forforgot">
                        <input style={{
                            display: "flex",
                            marginBottom: "12%",
                            border: "ridge", paddingLeft: "1%"
                        }} type="text" placeholder="Enter Email" name="email"></input>
                        <button className="btn-grad" type="submit" >Send</button>
                        <h5><NavLink to="/login">Login Back</NavLink></h5>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
