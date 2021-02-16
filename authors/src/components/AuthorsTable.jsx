import React, {useState, useEffect} from "react"
import axios from "axios"
import { Link, navigate } from "@reach/router"
import Delete from "./Delete"

const AuthorsTable = props => {
    const [authors, setAuthors] = useState([])
    useEffect( () => {
        axios.get("http://localhost:8000/api/authors")
            .then(response => setAuthors((response.data)))
            .catch(error => console.log("There was an issue: ", error))
    },[authors])
    return(
        <>
        <button className="btn btn-primary btn-sm" onClick={()=>navigate("/new")}>New Author</button>
        <div className="container">
        <table><thead><tr><th>Author</th><th>Actions available</th></tr></thead><tbody>{
                authors.map((author,index)=><tr key={index}><td>{author.name}</td><button className="btn btn-primary btn-sm" onClick={()=>navigate(`/${author._id}/edit`)}>Edit</button> | <Delete id={author._id}/><td></td></tr>)
                }</tbody></table>
        </div>
        </>
    )
}
export default AuthorsTable