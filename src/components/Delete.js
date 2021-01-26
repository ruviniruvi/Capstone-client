import React from 'react'
import axios from 'axios'

export default function Delete(props) {
    function onDelete(){
        axios.delete(`https://capstone-ttp1.herokuapp.com/listings/${props.id}`)
    }
    return (
        <button onClick={onDelete}>
            Delete
        </button>
    )
}
