import React, { useState, useEffect } from 'react'
import "../style/create.css"
import { useHistory } from 'react-router-dom'
import M from "materialize-css"

const Createpost = () => {
      const createsubmit=(e)=>{
        e.preventDefault()
          const formdata= new FormData(e.target)
         fetch("http://localhost:5000/createpost",{
             method:"POST",
             headers:{
             "Content-Type":"application.json"
             },
             body:JSON.stringify(Object.fromEntries(formdata))
         }).then((res)=>res.json())
          .then((res)=>"")
          .catch((err)=> console.log(err))
      }

    return (

        <>
            <div className="C-create">
                <div style={{
                    display: "flex", width: "50%", alignContent: "center", justifyContent: "center",
                    border: "outset",
                    borderRadius: "1rem",
                    borderStyle: "groove", height: "50%"
                }}>
                    <form onSubmit={createsubmit} className="C-creat">
                        <input type="text"
                            placeholder="Title"
                            name="title"

                        />
                        <input type="text"
                            placeholder="Body"
                            name="body"
                        />
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Add Photos</span>
                                <input type="file"
                                    name="file"
                                />
                            </div>

                        </div>
                        <button value="REGISTER">SUBMIT POST</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Createpost
