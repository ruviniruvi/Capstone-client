import React from 'react';
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'

function Books() {

  const { loading, error, data} = useQuery(GET_POSTS);
  let arr = []
  data.listings.map(list => {
    if(list.filter.name === "Books"){
      arr.push(list)
    }
  })
  console.log(arr)  

  return (
    <div className='books'>
    </div>
  );
}

export default Books;