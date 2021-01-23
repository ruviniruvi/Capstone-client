import React from 'react';
import axios from 'axios'

function Games() {
  function getData() {
    axios.get('https://capstone-ttp1.herokuapp.com/filters')
    .then(res => console.log(res.data))
}
  return (
    <div className='games'>
      <h1>GAMES</h1>
      {getData()}
    </div>
  );
}

export default Games;