import React, { Component } from "react";
import Delete from "./Delete";
import Edit from "./Edit";
import Review from './Review'
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      isReview: false
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.toggleReview = this.toggleReview.bind(this);
  }

  toggleEdit() {
    this.setState({
      isEdit: !this.state.isEdit,
    });
  }

  toggleReview(){
    this.setState({
      isReview: !this.state.isReview                 
    })
  }

  render() {
    if (this.props.item.length === 1) {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.item[0].Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Description</h6>
            {this.props.item[0].Notes} <br />
            <h6>Rating</h6>
            {this.props.item[0].Rating}
            <h6>Started At</h6>
            {this.props.item[0].Started_At}
            <h6>Finished At</h6>
            {this.props.item[0].Finished_At}
            <h6>Review/Notes</h6>
            {this.props.item[0].Review}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleReview}>Add/Edit Notes</Button>
            <Button onClick={this.toggleEdit}>Edit Details</Button>
            <Delete id={this.props.id} />
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          <Edit show={this.state.isEdit} item={this.props.item} />
          <Review show={this.state.isReview} item={this.props.item}/>
        </Modal>
      );
    } else {
      return (
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {this.props.item.Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Description</h6>
            {this.props.item.Notes} <br />
            <h6>Rating</h6>
            {this.props.item.Rating}
            <h6>Started At</h6>
            {this.props.item.Started_At}
            <h6>Finished At</h6>
            {this.props.item.Finished_At}
            <h6>Review/Notes</h6>
            {this.props.item.Review}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.toggleReview}>Add/Edit Notes</Button>
            <Button onClick={this.toggleEdit}>Edit Details</Button>
            <Delete id={this.props.item.id} />
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          <Edit show={this.state.isEdit} item={this.props.item} />
          <Review show={this.state.isReview} item={this.props.item}/>
        </Modal>
      );
    }
  }
}
