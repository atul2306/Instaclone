import React,{useState} from "react"
import { NavLink ,useHistory} from "react-router-dom"
import "../style/login.css"
import img from "../images/atul.jpeg"
 import M from "materialize-css"
const Login = () => {
    const history=useHistory()
      const [loginned,setloginned]=useState({
          phone:"",password:""
      })
     const changelogin=(e)=>{
         setloginned({...loginned,[e.target.name]:e.target.value})
     }
     const postdata =()=>{
         const {email,password}=loginned
         if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) {
            M.toast({ html: "Invalid Email", classes: "#b71c1c red darken-4" })
            return
        }
         fetch("/signin",{
             method:"post",
             headers:{
                 "Content-Type":"application/json"
             },
             body:JSON.stringify({
                 email,password
             })
         }).then(res=>res.json())
          .then(data=>{
            console.log(data)
              if(data.error){
                  M.toast({html:data.error,classes:"#b71c1c red darken-4"})
              }
              else{
                  localStorage.setItem("jwt",data.token)
                  localStorage.setItem("user",JSON.stringify(data.user))
                M.toast({html:"signedin successfully",classes:"#2e7d32 green darken-3"})
                history.push("/")
              }
          })
     }
    return (
        <>
            <div className="L-start">
            
                <div className="L-star">
                    <div className="L-sta">
                        <h2>Instagram</h2>
                        <div className="L-st">
                            <input type="text" placeholder="  Phone no,username ,or email" name="email" value={loginned.email} onChange={changelogin} />
                            <input type="text" placeholder="  Password" name="password" value={loginned.password} onChange={changelogin} />
                        </div>
                        <button onClick={()=>postdata()} value="REGISTER">Log In</button>
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