import React, { Component } from "react";
import "../App.css";
import axios from "axios";

export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      review: this.props.item.Review,
      id: this.props.item.id,
    };
  }
  handleReviewChange = (event, editor) => {
    this.setState({
      review: event.target.value,
    });
  };
  onSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.review);
      this.addReview();
  };
  addReview = () => {
    axios.put(
      `https://capstone-ttp1.herokuapp.com/listings/${this.props.item.id}`,
      {
        Review: this.state.review,
      }
    );
    alert("Review updated successfully!");
  };
  render() {
    if (this.props.show) {
      return (
        <div className="review-container">
          <h5>Add/Edit Notes</h5>
          <form onSubmit={this.onSubmit}>
            <textarea
              className="review-text"
              name="review"
              type="text"
              rows="3"
              onChange={this.handleReviewChange}
            >
              {this.state.review}
            </textarea>
            <input type="submit" name="submit"/>
          </form>
        </div>
      );
    } else return null;
  }
}
