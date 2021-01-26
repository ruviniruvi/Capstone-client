import React from "react";
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  return (
    <div className="home">
      <h1>USER</h1>
      {  console.log(data)}
    </div>
  );
}

export default Home;
