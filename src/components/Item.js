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
            {this.state.item[0].Notes}
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
            {this.state.item.Notes}
          </Modal>
        </div>
      );
    }
  }
}
