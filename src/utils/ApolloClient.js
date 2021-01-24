import { ApolloClient, InMemoryCache } from "@apollo/client";
// obtaining connection to the server and
// create the access to server
const client = new ApolloClient({
  uri: "https://capstone-ttp1.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

//export for the rest of the website to access
export default client;
