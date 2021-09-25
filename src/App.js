import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container>
      <Header/>
      <Main/>
      <Footer/>
    </Container>
  );
}

export default App;
