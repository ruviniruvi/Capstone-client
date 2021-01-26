import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "./AddNewList.css";
import "./StarRating";
import StarRatings from "react-star-ratings";

class AddNewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      images:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Noimage.svg/739px-Noimage.svg.png",
      filter: "4",
      rating: 1,
      status: "Planning",
      started_date: "",
      ended_date: "",
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
  }
  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };
  handleImageChange = (event) => {
    this.setState({
      images: event.target.value,
    });
  };
  handleFilterChange = (event) => {
    this.setState({
      filter: event.target.value,
    });
  };
  handleRatingChange(newRating) {
    console.log(newRating);
    this.setState({
      rating: newRating,
    });
  }

  handleStatusChange = (event) => {
    this.setState({
      status: event.target.value,
    });
  };
  handleStartedDateChange = (event) => {
    this.setState({
      started_date: event.target.value,
    });
  };
  handleEndedDateChange = (event) => {
    this.setState({
      ended_date: event.target.value,
    });
  };

  addList() {
    axios
      .post("https://capstone-ttp1.herokuapp.com/listings", {
        Title: this.state.title,
        Notes: this.state.description,
        Images: this.state.images,
        filter: {
          id: this.state.filter,
        },
        Rating: this.state.rating,
        Status: this.state.status,
        Started_At: this.state.started_date,
        Finished_At: this.state.ended_date,
      })
      .then(function (response) {
        console.log(response + "posting response");
      });
  }
  handleSubmit = (event) => {
    // testing only
    // alert(
    //    `${this.state.title} ${this.state.description} ${this.state.images}  ${this.state.filter}   ${this.state.rating}  ${this.state.status} ${this.state.started_date} ${this.state.ended_date}  `
    //);
    event.preventDefault();
    console.log(this.state.title);
    this.addList();
  };

  render() {
    const {
      title,
      description,
      images,
      filter,
      rating,
      status,
      started_date,
      ended_date,
    } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <div className="form-container">
            <h1>Add New Favorite Anime , Book , Game or Movie To Your List!</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="title">
                <label>Title </label>
                <input
                  type="text"
                  value={title}
                  placeholder="Enter title.."
                  onChange={this.handleTitleChange}
                />
              </div>
              <div>
                <label>Description </label>
                <input
                  type="text"
                  value={description}
                  placeholder="Enter description.."
                  onChange={this.handleDescriptionChange}
                />
              </div>
              <div>
                <label>Image </label>
                <input
                  type="text"
                  value={images}
                  placeholder="Enter image url.."
                  onChange={this.handleImageChange}
                />
              </div>
              <div>
                <label>Filter</label>
                <select value={filter} onChange={this.handleFilterChange}>
                  <option value="4">Anime</option>
                  <option value="2">Books</option>
                  <option value="1">Games</option>
                  <option value="3">Movies</option>
                </select>
              </div>
              <div>
                <label>Rating</label>
                <StarRatings
                  rating={this.state.rating}
                  starRatedColor="yellow"
                  changeRating={this.handleRatingChange}
                  numberOfStars={10}
                  name="rating"
                />
              </div>
              <div>
                <label>Status</label>
                <select value={status} onChange={this.handleStatusChange}>
                  <option value="Planning">Planning</option>
                  <option value="Current">Currently</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div>
                <label>Started Date </label>
                <input
                  type="date"
                  value={started_date}
                  onChange={this.handleStartedDateChange}
                />
              </div>
              <div>
                <label>Ended Date </label>
                <input
                  type="date"
                  value={ended_date}
                  onChange={this.handleEndedDateChange}
                />
              </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default AddNewList;
