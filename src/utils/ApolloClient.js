import { ApolloClient, InMemoryCache } from "@apollo/client";
import { gql } from "@apollo/client";
// obtaining connection to the server and
// create the access to server
const client = new ApolloClient({
  uri: "https://capstone-ttp1.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

// test = () => {client.query({
//   query: gql`
//     {
//       listings {
//         id
//         Title
//         Notes
//         Started_At
//         Finished_At
//         filter {
//           filter_Name
//         }
//         tags {
//           Tags
//         }
//       }
//     }
//   `,
// })
// .then(result=>console.log(result))}

//export for the rest of the website to access
export default client;
