import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import HornedBeast from './HornedBeast.js';

class SelectedBeat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showModal: true
    }
  }
toggleModal = () => {
  // (this.state.showModal) ? this.setState({showModal : false}) :
  // this.setState({showModal: true})
  this.props.toggleModal()
}

  render() {
    return (
      <>
      <Modal show={this.props.showModal} onHide={this.toggleModal}>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.currentBeast.title}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
  }
}

export default SelectedBeat
