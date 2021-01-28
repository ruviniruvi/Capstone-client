import React, { Component, useState, useEffect } from "react";
// import "./Login.css";
import "./AddNewList.css";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
    };
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleNameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  render() {
    return (
      <div className="wrapper">
      <div className="login-wrapper">
        <form className="form">
          <h1 className="login-header">Login</h1>
          <div className="form-inputs">
            <label className="form-label">Username</label>
            <input
              className="form-input"
              type="text"
              name="username"
              placeholder="Enter your username"
              onChange={this.handleNameChange}
            />
          </div>
          <div className="form-inputs">
            <label className="form-label">Password</label>
            <input
              className="form-input"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={this.handlePasswordChange}
            />
            <Link to="/">
              <button>Lets go</button>
            </Link>
          </div>
        </form>
      </div>
      </div>
    );
  }
}
export default Login;
