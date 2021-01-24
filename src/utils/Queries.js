import { gql } from '@apollo/client'

export const GET_POSTS = gql`
  {
    listings {
      id
      Title
      Notes
      Started_At
      Finished_At
      filter {
        name
      }
      tags {
        Tags
      }
      Image{
        name
        url
      }
      Status
    }
  }
`;