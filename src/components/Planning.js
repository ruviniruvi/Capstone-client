import React from "react";
import "../App.css";
import Item from "./Item";

export default function Planning(props) {
  let planning = props.planning;
  if (planning.length >= 1) {
    return (
      <div className="planning-container">
        <h1>Planning</h1>
        <div className="display-list">
          {planning.map((item) => (
            <Item item={item} />
          ))}
        </div>
      </div>
    );
  } else {
    return <h1>NOTHING PLANNING</h1>;
  }
}
