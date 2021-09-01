import React from 'react'
import "../style/forgotpass.css"
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
        }).catch((err)=>{
            console.log(err)
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
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword
