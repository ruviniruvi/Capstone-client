import React, { Component } from "react";
import "../App.css";
import Modal from "./Modal";

export default class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
    console.log(this.state.item)
  };

  render() {
    if (this.state.item.length === 1) {
      return (
        <div className="listing" key={this.state.item.id}>
          <button onClick={this.toggleModal}>
            <img src={this.state.item[0].Images} height="400" />
          </button>

          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            id={this.state.item.id}
          >
            <h6>Description</h6>
            {this.state.item[0].Notes} <br />
            <h6>Rating</h6>
            {this.state.item[0].Rating}
            <h6>Started At</h6>
            {this.state.item[0].Started_At}
            <h6>Finished At</h6>
            {this.state.item[0].Finished_At}
          </Modal>
        </div>
      );
    } else {
      return (
        <div className="listing" key={this.state.item.id}>
          <button className="item-button" onClick={this.toggleModal}>
            <img src={this.state.item.Images} height="400" />
          </button>
          <Modal
            show={this.state.isOpen}
            onClose={this.toggleModal}
            id={this.state.item.id}
          >
            <h6>Description</h6>
            {this.state.item.Notes}
          </Modal>
        </div>
      );
    }
  }
}
