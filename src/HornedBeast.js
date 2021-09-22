import React from "react";


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
      <>
      <img src={this.props.image_url} alt="a box" title="placeholder" />
      <h2>{this.props.title}</h2>
      <p>{this.props.description}</p>
      <p>{this.props.keyword}</p>
      <p>{this.props.horns}</p>
      <p onClick={this.setFav}>Amount in Inventory: {this.state.numberInv}</p>
      {/* Ternary statement is an if/else statemetn rolled into one */}
      <p>{(this.state.isFav) ? '<3' : ''}</p>
      <button onClick={this.onAdd}>Add</button>
      <button onClick={this.onRemove}>Remove</button>
      </>
    )

  }
}

export default HornedBeast;