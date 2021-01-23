//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Anime from './pages/Anime';
import Books from './pages/Books';
import Games from './pages/Games';
import Movies from './pages/Movies';
import AddNewList from './pages/AddNewList';


import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/anime' component={Anime} />
          <Route path='/books' component={Books} />
          <Route path='/games' component={Games} />
          <Route path='/movies' component={Movies} />
          <Route path='/addnewlist' component={AddNewList} />



        </Switch>
      </Router>
    </>
  );
}

export default App;
