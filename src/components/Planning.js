import React from "react";
import "../App.css";
import Item from './Item'

export default function Planning(props) {
  let planning = props.planning;
  if (planning.length > 1) {
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
  } else if (planning.length === 1) {
    return (
      <div className="planning-container">
        <h1>Planning</h1>
        <Item item={planning} />
      </div>
    );
  } else {
    return <div>NOTHING PLANNING</div>;
  }
}
