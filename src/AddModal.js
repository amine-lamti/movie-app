import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class AddModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  handelChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  };
  add = () => {
      this.props.add({
          name : this.state.title,
          year : this.state.year,
          image : this.state.image,
          rating : this.state.rating
      });
      this.setState({show: this.state.show});
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          Add New Movie
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                <input type="text" name="title" onChange={this.handelChange}/>
              </div>
              <div>
                <label>Image:</label>
                <input type="text" name="image" onChange={this.handelChange}/>
              </div>
              <div>
                <label>Rating:</label>
                <input type="text" name="rating" onChange={this.handelChange}/>
              </div>
              <div>
                <label>Year:</label>
                <input type="text" name="year" onChange={this.handelChange}/>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary" onClick={this.add}>Add Movie</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModal;
