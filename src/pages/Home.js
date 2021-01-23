import React from "react";
import { useQuery, gql } from "@apollo/client";

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

const GET_POSTS = gql`
  {
    listings {
      id
      Title
      Notes
      Started_At
      Finished_At
      filter {
        filter_Name
      }
      tags {
        Tags
      }
    }
  }
`;
