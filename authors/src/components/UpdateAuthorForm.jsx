import React, { useState,useEffect } from "react"
import axios from "axios"
import { navigate, Link } from "@reach/router"
import 'bootstrap/dist/css/bootstrap.min.css';
import Delete from "./Delete";


const UpdateAuthorForm = (props) => {

    const [errors, setErrors] = useState([])
    const [name, setName] = useState('')
    const [idError, setIdError] = useState("");

    useEffect( () => {
        axios.get("http://localhost:8000/api/authors/"+props.id)
            .then(response => {setName((response.data.name));setIdError("")})
            .catch(error => setIdError("We're sorry, but we could not find the author you are looking for. Would you like to add this author to our database?"))
    },[])
    const onSubmit = e => {
        e.preventDefault()
        axios.put("http://localhost:8000/api/"+props.id+"/edit", {
            name: name,
        })
            .then(() => navigate("/"))
            .catch(err =>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p><Link to="/">Home</Link></p>
                    <p>Update Author: &nbsp;
                        {
                            errors.map((err, index) => <small key={index} style={{color:"red"}}>{err}</small>)
                        }
                    </p>
                </div>
            </div>
            {idError?
            <div>
            <h3 style={{color:"red"}}>{idError}</h3>
            <button onClick={()=>navigate("/new")} type="button" className="btn btn-primary btn-sm" style={{marginRight: "10px"}}>Create</button></div>:
            <div className="row">
                <div className="col-6">
                    <form onSubmit={ onSubmit }>
                        <div className="form-group">
                            <label>Name:</label>
                            <input  type="text" className="form-control" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className="form-group text-right">
                            <button onClick={()=>navigate("/")} type="button" className="btn btn-secondary btn-sm" style={{marginRight: "10px"}}>Cancel</button>
                            <Delete id={props.id}/>
                            <button className="btn btn-primary btn-sm" style={{marginLeft: "10px"}}>Update</button>
                        </div>
                    </form>
                </div>
            </div>}
        </div>
    )
}
export default UpdateAuthorForm
