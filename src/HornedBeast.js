import React from "react";


class HornedBeast extends React.Component {
  render() {
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.imageURL} alt="a box" title="placeholder" />
      <p>{this.props.description}</p>
      </>
    )

  }
}

export default HornedBeast;