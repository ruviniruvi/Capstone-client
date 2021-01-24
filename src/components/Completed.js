import React from "react";
import "../App.css";

export default function Completed(props) {
  let completed = props.completed;
  if (completed.length > 1) {
    return (
      <div className="completed-container">
        <h1>Completed</h1>
        <div className="display-list">
          {completed.map((item) => (
            <div key={item.id}>
              <img src={item.Image.name} height="400"></img>
            </div>
          ))}
        </div>
      </div>
    );
  } else if (completed.length === 1) {
    return (
      <div className="completed-container">
        <h1>Completed</h1>
        <div key={completed.id}>
          <img src={completed[0].Image.name} width="300"></img>
        </div>
      </div>
    );
  } else {
    return <div>NOTHING CURRENTLY</div>;
  }
}
