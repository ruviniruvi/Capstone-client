import React from 'react';
import axios from 'axios'
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'

function Games() {
  const { loading, error, data } = useQuery(GET_POSTS);
  let arr = []
  data.listings.map(list => {
    if(list.filter.name === "Video Games"){
      arr.push(list)
    }
  })
  console.log(arr)  

  return (
    <div className='games'>
      <h1>GAMES</h1>
    </div>
  );
}

export default Games;