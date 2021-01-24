import React from 'react';
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'
import Listings from '../components/Listings'

function Anime() {
  const { loading, error, data } = useQuery(GET_POSTS);
  let arr = []
  data.listings.map(list => {
    if(list.filter.name === "Anime"){
      arr.push(list)
    }
  })
  console.log(arr)


  return (
    <div className='anime'>
      <h1>ANIME</h1>
    </div>
  );
}

export default Anime;