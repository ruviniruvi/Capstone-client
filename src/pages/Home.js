import React from "react";
import { useQuery, gql } from "@apollo/client";
import { GET_POSTS } from "../utils/Queries";

function Home() {
    const { loading, error, data } = useQuery(GET_POSTS);

  return (
    <div className="home">
      <h1>USER</h1>
      {console.log(data)} 
    </div>
  );
}

export default Home;
