import React,{useContext} from "react"
import "../style/home.css"
import { UserContext } from "../../reducer/UserContext"

const Home=()=>{
   const {userDetails} =useContext(UserContext)
   console.log(userDetails)
    return (
        <>
        <div className=" H-start">
          <div className="H-star">
           <h4 style={{display:"contents"}}>{userDetails.email}</h4>
           <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no"/>
           <i style={{color:"red",fontSize:"2rem",marginLeft:"2%",marginTop:"1%"}} className="fa fa-heart" aria-hidden="true"></i>
           <p style={{marginLeft:"1%",width:"80%"}}>title</p>
           <h7 style={{display: "flex", marginLeft:"1%",width:"90%"}}>This is amazing post</h7>
           <input style={{display: "flex",borderBottom: "double",marginLeft:"1%",width:"95%"}} type="text" placeholder="Add a comment"/>
          </div>
          <div className="H-star">
          <h4 style={{display:"contents"}}>Atul</h4>
           <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no"/>
           <i style={{color:"red",fontSize:"2rem",marginLeft:"2%",marginTop:"1%"}} className="fa fa-heart" aria-hidden="true"></i>
           <p style={{marginLeft:"1%",width:"80%"}}>title</p>
           <h7 style={{display: "flex", marginLeft:"1%",width:"90%"}}>This is amazing post</h7>
           <input style={{display: "flex",borderBottom: "double",marginLeft:"1%",width:"95%"}} type="text" placeholder="Add a comment"/>
          </div>
          <div className="H-star">
          <h4 style={{display:"contents"}}>Atul</h4>
           <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no"/>
           <i style={{color:"red",fontSize:"2rem",marginLeft:"2%",marginTop:"1%"}} className="fa fa-heart" aria-hidden="true"></i>
           <p style={{marginLeft:"1%",width:"80%"}}>title</p>
           <h7 style={{display: "flex", marginLeft:"1%",width:"90%"}}>This is amazing post</h7>
           <input style={{display: "flex",borderBottom: "double",marginLeft:"1%",width:"95%"}} type="text" placeholder="Add a comment"/>
          </div>
          <div className="H-star">
          <h4 style={{display:"contents"}}>Atul</h4>
           <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no"/>
           <i style={{color:"red",fontSize:"2rem",marginLeft:"2%",marginTop:"1%"}} className="fa fa-heart" aria-hidden="true"></i>
           <p style={{marginLeft:"1%",width:"80%"}}>title</p>
           <h7 style={{display: "flex", marginLeft:"1%",width:"90%"}}>This is amazing post</h7>
           <input style={{display: "flex",borderBottom: "double",marginLeft:"1%",width:"95%"}} type="text" placeholder="Add a comment"/>
          </div>
          <div className="H-star">
          <h4 style={{display:"contents"}}>Atul</h4>
           <img src="https://images.unsplash.com/photo-1476820865390-c52aeebb9891?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" alt="no"/>
           <i style={{color:"red",fontSize:"2rem",marginLeft:"2%",marginTop:"1%"}} className="fa fa-heart" aria-hidden="true"></i>
           <p style={{marginLeft:"1%",width:"80%"}}>title</p>
           <h7 style={{display: "flex", marginLeft:"1%",width:"90%"}}>This is amazing post</h7>
           <input style={{display: "flex",borderBottom: "double",marginLeft:"1%",width:"95%"}} type="text" placeholder="Add a comment"/>
          </div>
        </div>
        
        </>
    )
}
export default Home