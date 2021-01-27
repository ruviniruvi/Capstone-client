import React from "react";
import axios from 'axios'
import { GET_POSTS } from '../utils/Queries'
import { useQuery } from '@apollo/client'

function Home() {
  const { loading, error, data } = useQuery(GET_POSTS);
  // axios.get(`https://capstone-ttp1.herokuapp.com/listings`)
  // .then((res) => {
  //   console.log(res.data);
  // })
  return (
    <div className="home">
      <h1>USER</h1>
    </div>
  );
}

export default Home;
