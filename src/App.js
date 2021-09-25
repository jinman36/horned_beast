import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container'
import dataJson from "./data.json"
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import SelectedBeast from './SelectedBeast.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson,
      showModal: false,
      currentBeast: {}
    }
  }
  toggleModal = () => {
    this.setState({showModal: !this.state.showModal})
  }
  renderBeast = (beast) => {
    this.setState({currentBeast: beast})
    this.toggleModal();
  }
  render() {
    return (
      <>
      <Container>
        <Header/>
        <Main
        data={this.state.data}
        toggleModal={this.renderBeast}/>
        <Footer/>
      </Container>
      <SelectedBeast showModal={this.state.showModal}
      toggleModal={this.toggleModal}
      currentBeast={this.state.currentBeast}/>
      {/* <Modal show={this.state.showModal} onHide={this.toggleModal}>
        <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}
      </>
    );
   }
}

export default App;
