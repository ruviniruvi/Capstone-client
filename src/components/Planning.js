import React from "react";
import "../App.css";

export default function Planning(props) {
  let planning = props.planning;
  if (planning.length > 1) {
    return (
      <div className="planning-container">
        <h1>Planning</h1>
        <div className="display-list">
          {planning.map((item) => (
            <div key={item.id}>
              <img src={item.Image.name} height="400"></img>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (planning.length === 1) {
    return (
      <div key={planning.id}>
        <img src={planning.Image.name} width="300"></img>
      </div>
    );
  } else {
    return <div>NOTHING CURRENTLY</div>;
  }
}
