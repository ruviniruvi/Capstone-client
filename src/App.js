import React from 'react';


//components
import Navbar from './components/Navbar';

//pages
import Home from './pages/Home';
import Anime from './pages/Anime';
import Books from './pages/Books';
import Games from './pages/Games';
import Movies from './pages/Movies';
import AddNewList from './pages/AddNewList';

//backend imports
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

//styling
import './App.css';

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "https://capstone-ttp1.herokuapp.com/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (

    <><div className="App">
     

     <h1>Welcome to Our Girumi App</h1>

   
    </div>




    <ApolloProvider client={client}>
      <Router>
          {/* <FetchData /> */}
          <Navbar />
          <ul class="nav-area">
            <Route path="/" exact component={Home} />
            <Route path="/anime" component={Anime} />
            <Route path="/books" component={Books} />
            <Route path="/games" component={Games} />
            <Route path="/movies" component={Movies} />
           <Route path="/addnewlist" component={AddNewList} />
           </ul>
      </Router>
      </ApolloProvider>


    </>

  );
}


export default App;
