import React, { Component } from "react";
import "../App.css";
import ModalBox from "./ModalBox";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

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
    console.log(this.state.item);
  };

  render() {
      return (
        <div className="listing" key={this.state.item.id}>
          <OverlayTrigger
            key={this.state.item.id}
            placement="top"
            overlay={<Tooltip id={`tooltop-top`}>{this.state.item.Title}</Tooltip>}
          >
          <button className="item-button" onClick={this.toggleModal}>
            <img src={this.state.item.Images} height="400" width="300" />
          </button>
          </OverlayTrigger>
          <ModalBox
            show={this.state.isOpen}
            onHide={this.toggleModal}
            item={this.state.item}
          />
        </div>
      );
    }
  }
