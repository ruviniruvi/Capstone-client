import React from "react";
import "../App.css";
import Item from "./Item";

export default function Current(props) {
  let current = [];
    props.current.map(item => {
        if(item.Status === "Current"){
            current.push(item)
        }
        console.log("current")
        console.log(current)
    })

  
  console.log(current)
  if (current.length >= 1) {
    return (
      <div className="current-container">
        <h1>Current</h1>
        <div className="display-list">
          {current.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    );
} else {
    return <h1>NOTHING CURRENTLY</h1>;
  }
}
