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
        id
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
      Images
      Rating
    }
  }
`;
