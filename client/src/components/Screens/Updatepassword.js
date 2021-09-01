import React from 'react'
import "../style/forgotpass.css"
import { useParams } from 'react-router-dom'
const Updatepassword = () => {
   const {token}=useParams()
   console.log(token)
    const formreset=(e)=>{
        
        e.preventDefault()
        const formdata= new FormData(e.target)
        fetch("http://localhost:5000/reset/"+token,{
           method:"POST",
           headers:{
               "Content-Type":"application/json"
           },
           body:JSON.stringify(Object.fromEntries(formdata))
        }).then(res=>res.json())
        .then((res)=>{
            console.log(res)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    return (
        <>
         <div className="Forg-container">
                <div className="ForgotCss">
                    <form onSubmit={formreset} className="forforgot">
                        <input style={{
                            display: "flex",
                            marginBottom: "12%",
                            border: "ridge", paddingLeft: "1%"
                        }} type="text" placeholder="Enter New Password" name="password"></input>
                         <input style={{
                            display: "flex",
                            marginBottom: "12%",
                            border: "ridge", paddingLeft: "1%"
                        }} type="text" placeholder="Retype New Password" name="confirmPassword"></input>
                        <button className="btn-grad" type="submit" >UPDATE</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Updatepassword
