import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Form from 'react-bootstrap/Form'
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container'
import dataJson from "./data.json"
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
    this.setState({ showModal: !this.state.showModal })
  }
  renderBeast = (beast) => {
    this.setState({ currentBeast: beast })
    this.toggleModal();
  }

  filterHorn = (event) => {
    let hornNumber = `${event.target.value}`
    console.log(hornNumber)
    // return this.data.state.filter((horns) => {
      if (hornNumber === '3') {
        console.log(`Number of Horn: ${hornNumber}`)
    }
    // return horns
    // }
  }


  render() {
    return (
      <>
        <Container>
          <Header />
          <Form.Group controlId={this.state.data}>

            <Form.Control as="select" onChange={this.filterHorn}>
              <option value= '' >Select By # of Horns</option>
              <option value= '1' >1</option>
              <option value= '2' >2</option>
              <option value= '3' >3</option>
              <option value= '4'>4</option>
            </Form.Control>
          </Form.Group>
          <Main
            data={this.state.data}
            toggleModal={this.renderBeast} />

          <Footer />
        </Container>
        <SelectedBeast showModal={this.state.showModal}
          toggleModal={this.toggleModal}
          currentBeast={this.state.currentBeast} />
      </>
    );
  }
}

export default App;
