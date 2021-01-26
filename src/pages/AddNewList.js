import React, { Component, useState } from "react";
//import 'react-datepicker/dist/react-datepicker.css'
//import DatePicker from 'react-datepicker'
import "./AddNewList.css";

class AddNewList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      images: "",
      filter: "",
      rating: "",
      status: "",
      started_date: "",
      ended_date: "",
    };
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

  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value,
    });
  };

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

  handleSubmit = (event) => {
    alert(
      `${this.state.title} ${this.state.description} ${this.state.images}  ${this.state.filter}   ${this.state.rating}  ${this.state.status} ${this.state.started_date} ${this.state.ended_date}  `
    );
    event.preventDefault();
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
    //const [selectedDate, setSelectedDate] = useState(null);

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
                  onChange={this.handleTitleChange}
                />
              </div>
              <div>
                <label>Description </label>
                <input
                  type="text"
                  value={description}
                  onChange={this.handleDescriptionChange}
                />
              </div>

              <div>
                <label>Image </label>
                <input
                  type="text"
                  value={images}
                  onChange={this.handleImageChange}
                />
              </div>

              <div>
                <label>Filter</label>
                <select value={filter} onChange={this.handleFilterChange}>
                  <option value="anime">Anime</option>
                  <option value="books">Books</option>
                  <option value="games">Games</option>
                  <option value="movies">Movies</option>
                </select>
              </div>

              <div>
                <label>Rating</label>
                <select value={rating} onChange={this.handleRatingChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div>
                <label>Status</label>
                <select value={status} onChange={this.handleStatusChange}>
                  <option value="plan to watch">Plan to watch</option>
                  <option value="watching">Watching</option>
                  <option value="completed">Completed</option>
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