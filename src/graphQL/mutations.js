import { gql } from "@apollo/client";

export const CREATE_LIST_MUTATION = gql`
  mutation createList(
    $title: String!
    $description: String!
    $images: String!
    $filter: String!
    $rating: Integer!
    $status: String!
    $started_date: Date!
    $ended_date: Date!
   



  ) {
    createList(
        title: $title,
      description: $discription,
      images: $images,
      filter: $filter,
      rating:$ratings,
      status:$status,
      started_date:$started_date,
      ended_date:$ended_date
    ) {
      id
    }
  }
`;