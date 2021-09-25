import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container'
import dataJson from "./data.json"


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJson
    }
  }
  render() {
    return (
      <Container>
        <Header/>
        <Main
        data={this.state.data}/>
        <Footer/>
      </Container>
    );
   }
}

export default App;
