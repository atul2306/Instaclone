import React, { useState, useEffect } from 'react'
import "../style/create.css"
import { useHistory } from 'react-router-dom'
import M from "materialize-css"

const Createpost = () => {
    const history = useHistory()
    const [create, setcreate] = useState({
        title: "", body: ""
    })
    const [image, addimage] = useState()
    const [url, addurl] = useState()
    const setphotos = (e) => {
        setcreate({ ...create, [e.target.name]: e.target.value })
    }
    const postDetails = () => {
        const { title, body } = create
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "Insta-clone")
        data.append("cloud_name", "atul2306")
        fetch("https://api.cloudinary.com/v1_1/atul2306/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => {
                addurl(data.url)
            }).catch(err => {
                console.log(err);
            })

        fetch("/createpost", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")

            },
            body: JSON.stringify({
                title, body, urlpic: url
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    M.toast({ html: data.error, classes: "#b71c1c red darken-4" })
                }
                else {
                    M.toast({ html: "image inserted successfully", classes: "#2e7d32 green darken-3" })
                    history.push("/")
                }
            })




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
                    <div className="C-creat">
                        <input type="text"
                            placeholder="Title"
                            name="title"
                            value={create.title}
                            onChange={setphotos} />
                        <input type="text"
                            placeholder="Body"
                            name="body"
                            value={create.body}
                            onChange={setphotos} />
                        <div className="file-field input-field">
                            <div className="btn">
                                <span>Add Photos</span>
                                <input type="file"
                                    onChange={(e) => addimage(e.target.files[0])}
                                />
                            </div>
                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" />
                            </div>
                        </div>
                        <button onClick={() => postDetails()} value="REGISTER">SUBMIT POST</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Createpost
