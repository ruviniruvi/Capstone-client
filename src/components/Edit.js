import React, { Component } from "react";
import "../App.css";
import axios from 'axios'

export default class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      title: this.props.item.Title,
      description: this.props.item.Notes,
      images: this.props.item.Images,
      filter: this.props.item.filter.id,
      rating: this.props.item.Rating,
      status: this.props.item.Status,
      started_date: this.props.item.Started_At,
      ended_date: this.props.item.Finished_At,
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
    event.preventDefault();
      // console.log(this.state.item.id)
      // console.log(this.state.title)
      // console.log(this.state.description)
      // console.log(this.state.images)
      // console.log(this.state.filter)
      // console.log(this.state.rating)
      // console.log(this.state.status)
      // console.log(this.state.started_date)
      // console.log(this.state.ended_date)
      this.updateDate();
  }

  updateDate(){
      axios.put(`https://capstone-ttp1.herokuapp.com/listings/${this.state.item.id}`,
      {
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
      alert("Edit success!")
  }

  render() {
    if (this.props.show === true) {
      return (
        <div className="edit-container">
          <form onSubmit={this.handleSubmit}>
            <label>
              Title
              <input type="text" defaultValue={this.state.item.Title} onChange={this.handleTitleChange}/>
            </label>
            <label>
              Description <br />
              <input type="text" defaultValue={this.state.item.Notes} onChange={this.handleDescriptionChange}/>
            </label>
            <label>
              Image
              <input type="text" defaultValue={this.state.item.Images} onChange={this.handleImageChange}/>
            </label>
            <label>
              Filter
              <select defaultValue={this.state.item.filter.id} onChange={this.handleFilterChange}>
                <option value="4">Anime</option>
                <option value="2">Books</option>
                <option value="1">Games</option>
                <option value="3">Movies</option>
              </select>
            </label>
            <label>
              Rating
              <select defaultValue={this.state.item.Rating} onChange={this.handleRatingChange}>
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
            </label>
            <label>
              Status
              <select defaultValue={this.state.item.Status} onChange={this.handleStatusChange}>
                <option value="Planning">Planning</option>
                <option value="Current">Currently</option>
                <option value="Completed">Completed</option>
              </select>
            </label>
            <label>
              Started Date
              <input
                type="date"
                defaultValue={this.state.item.Started_At}
                onChange={this.handleStartedDateChange}
              />
            </label>
            <label>
              Ended Date
              <input
                type="date"
                defaultValue={this.state.item.Finished_At}
                onChange={this.handleEndedDateChange}
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      );
    } else return null;
  }
}
