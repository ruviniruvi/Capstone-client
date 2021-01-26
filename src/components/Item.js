import React, { Component } from "react";
import "../App.css";
import ModalBox from "./ModalBox";

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
        <div className="listing" key={this.state.item[0].id}>
          <button onClick={this.toggleModal}>
            <img src={this.state.item[0].Images} height="400" width="300"/>
          </button>

          <ModalBox
            show={this.state.isOpen}
            onHide={this.toggleModal}
            item={this.state.item} />
        </div>
      );
    } else {
      return (
        <div className="listing" key={this.state.item.id}>
          <button className="item-button" onClick={this.toggleModal}>
            <img src={this.state.item.Images} height="400" width="300"/>
          </button>
          <ModalBox
            show={this.state.isOpen}
            onHide={this.toggleModal}
            item={this.state.item} />
        </div>
      );
    }
  }
}
