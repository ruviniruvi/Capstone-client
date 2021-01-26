import React from "react";
import "../App.css";
import Item from "./Item";

export default function Current(props) {
  let current = props.current;
  if (current.length > 1) {
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
  } else if (current.length === 1) {
    return (
      <div className="current-container">
        <h1>Current</h1>
        <div className="display-list">
        <Item item={current} />
      </div>
      </div>
    );
  } else {
    return <div>NOTHING CURRENTLY</div>;
  }
}
