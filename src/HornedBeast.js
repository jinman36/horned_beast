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
      isFav: false
    }
  }

  onAdd = () => {
    this.setState({numberInv: this.state.numberInv + 1});
  };
  onRemove = () => {
    if (this.state.numberInv > 0) {
      this.setState({numberInv: this.state.numberInv - 1});
    }
  }

  setFav = () => {
    if (this.state.isFav) {
      this.setState({isFav: false})
    }
    else {
      this.setState({isFav: true})
    }
  }

  render() {
    return (
      <Card className="m-3" style={{ width: '20rem' }}>
      <Card.Img variant="top" src={this.props.image_url} />
      <Card.Body>
      <Card.Title>{this.props.title}</Card.Title>
      <Card.Text>Description: {this.props.description}</Card.Text>
      <Card.Text>Keyword: {this.props.keyword}</Card.Text>
      <Card.Text>Number of Horns: {this.props.horns}</Card.Text>
      <Rating />
      {/* <p>Number of Likes: {this.state.numberInv}</p> */}
      {/* Ternary statement is an if/else statemetn rolled into one */}
      <p>{(this.state.isFav) ? '<3' : ''}</p>
      {/* <Button variant="dark" onClick={this.onAdd}>Favorite</Button> */}
  </Card.Body>
</Card>
    )
  }
}

export default HornedBeast;