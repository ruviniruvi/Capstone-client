import React from "react";
import Item from "./Item";
import "../App.css";

export default function Completed(props) {
  let completed = props.completed;
  if (completed.length >= 1) {
    return (
      <div className="completed-container">
        <h1>Completed</h1>
        <div className="display-list">
          {completed.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
        <h1>NOTHING COMPLETED</h1>
    );
  }
}
