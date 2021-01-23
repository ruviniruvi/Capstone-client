import React from 'react';
import axios from 'axios'

function Anime() {
  function getData() {
    axios.get('https://capstone-ttp1.herokuapp.com/filters')
    .then(res => console.log(res.data))
}
  return (
    <div className='anime'>
      <h1>ANIME</h1>
      {getData()}
    </div>
  );
}

export default Anime;