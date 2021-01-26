import React from 'react'
import axios from 'axios'
import { Button } from 'react-bootstrap'

export default function Delete(props) {
    function onDelete(){
        axios.delete(`https://capstone-ttp1.herokuapp.com/listings/${props.id}`)
    }
    return (
        <Button onClick={onDelete}>
            Delete
        </Button>
    )
}
