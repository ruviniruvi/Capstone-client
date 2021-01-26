import React from "react";
import Item from './Item'
import "../App.css";

export default function Completed(props) {
  let completed = props.completed;
  if (completed.length > 1) {
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
  } else if (completed.length === 1) {
    return (
      <div className="completed-container">
        <h1>Completed</h1>
        <div className="display-list">
        <Item item={completed} />
      </div>
      </div>
    );
  } else {
    return <div>NOTHING COMPLETED</div>;
  }
}
