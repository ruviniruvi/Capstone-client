import React from 'react';
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'
import Listings from '../components/Listings'

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
      <Listings lists={arr}/>
    </div>
  );
}

export default Games;