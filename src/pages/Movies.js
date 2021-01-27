import React, { Component } from "react";
import axios from "axios";
import Completed from "../components/Completed";
import Planning from "../components/Planning";
import Current from "../components/Current";

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
    };
  }
  componentDidMount() {
    axios
      .get(`https://capstone-ttp1.herokuapp.com/listings`)
      .then((response) => {
        let filteredData = [];
        response.data.map((list) => {
          if (list.filter.name === "Movies") {
            filteredData.push(list);
          }
        });
        this.setState({
          data: filteredData,
          loading: false,
        });
      });
    console.log(this.state.data);
  }
  render() {
    console.log(this.state.data);
    if (this.state.loading === true) {
      return <h1>loading</h1>;
    } else {
      return (
        <div className="container">
          {console.log(this.state.data)}
          <Current current={this.state.data} />
          <Planning planning={this.state.data} />
          <Completed completed={this.state.data} />
        </div>
      );
    }
  }
}
