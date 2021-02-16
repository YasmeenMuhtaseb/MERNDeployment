import React from 'react'
import axios from "axios"
import { navigate } from "@reach/router"

const Delete = (props) => {
    const deleteHandler = (id) => {
        axios.delete('http://localhost:8000/api/delete/'+ id)
        .then(response => navigate('/'))
        .catch(error => console.log("There was an issue: ", error))
    }
    return (
        <button className="btn btn-danger btn-sm" onClick={(e)=>deleteHandler(props.id)}>Delete</button>
    )
}

export default Delete
