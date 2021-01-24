import React from 'react'
import '../App.css'

export default function Current(props) {
    let current = props.current;
    if (current.length > 1) {
      return (
        <div className="current-container">
          <h1>Current</h1>
          <div className="display-list">
            {current.map((item) => (
              <div key={item.id}>
                <img src={item.Image.name} height="400"></img>
              </div>
            ))}
          </div>
        </div>
      );
    } else if (current.length === 1) {
      return (
        <div key={current.id}>
          <img src={current.Image.name} width="300"></img>
        </div>
      );
    } else {
      return <div>NOTHING CURRENTLY</div>;
    }


}
