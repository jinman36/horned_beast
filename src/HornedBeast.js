import React from "react";
// import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Rating from './Rating.js'

class HornedBeast extends React.Component {
  //have to add for state
  constructor(props) {
    super(props)
    //state must be an object {}
    this.state = {
      numberInv: 0,
    }
  }

  onAdd = () => {
    this.setState({ numberInv: this.state.numberInv + 1 });
  };
  onRemove = () => {
    if (this.state.numberInv > 0) {
      this.setState({ numberInv: this.state.numberInv - 1 });
    }
  }

  render() {
    return (

      <div>
        <Card className="m-3" bg='secondary' style={{ width: '25rem' }} border='dark'>
          <Card.Img onClick={() => this.props.toggleModal(this.props.beast)} style={{ height: '20rem' }} variant="top" src={this.props.image_url} />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              Description: {this.props.description} <br />
              Keyword: {this.props.keyword} <br />
              Number of Horns: {this.props.horns} <br />
              Number of Likes: {this.state.numberInv}
            </Card.Text>
            <Button variant="dark" onClick={this.onAdd}>Favorite ❤️</Button>
            <Button variant='danger' className='m-1' onClick={this.onRemove}>Remove</Button>
          </Card.Body>
        </Card>
      </div>
    )
  };
};


export default HornedBeast;