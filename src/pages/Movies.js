import React from 'react';
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'

function Movies() {
  const { loading, error, data } = useQuery(GET_POSTS);
  let arr = []
  data.listings.map(list => {
    if(list.filter.name === "Movies"){
      arr.push(list)
    }
  })
  console.log(arr)  

  return (
    <div className='movies'>
      <h1>MOVIES</h1>
    </div>
  );
}

export default Movies;