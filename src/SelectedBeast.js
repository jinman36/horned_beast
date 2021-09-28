import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class SelectedBeat extends React.Component {

  toggleModal = () => {
    this.props.toggleModal()
  }

  render() {
    return (
      <>
        <Modal style={{ width: '1500px' }} show={this.props.showModal} onHide={this.toggleModal}>
          <Modal.Header>
            <Modal.Title>{this.props.currentBeast.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img alt='current beast' style={{ width: '30rem' }} src={this.props.currentBeast.image_url} />
            <p>{this.props.currentBeast.description}</p>
          </Modal.Body>
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
