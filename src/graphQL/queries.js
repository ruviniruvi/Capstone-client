import { gql } from "@apollo/client";


//export function from the server
//getAllList should come from the server

export const LOAD_LIST = gql`
  query {

    getAllList {
      id
      title
      description
      images
      filter{
          animes
          books
          games
          movies

      }
      rating
      {
          1
          2
          3
          4
          5
          5
          7
          8
          9
          10
      }
      status{
          planing
          currently
          compeleted

      }
      started_date
      ended_date
    }
  }
`;