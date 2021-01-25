import React from 'react'
import '../App.css'

export default function Item(props) {
    let item = props.item
    if(item.length === 1){
        return(
            <div className="listing" key={item.id}>
            <img src={item[0].Image.name} height="400" />
        </div>
        )
    } else {
        return (
            <div className="listing" key={item.id}>
                <img src={item.Image.name} height="400" />
            </div>
        )
    }
}
