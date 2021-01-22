//import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Anime from './pages/Anime';
import Books from './pages/Books';
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
        </Switch>
      </Router>
    </>
  );
}

export default App;
