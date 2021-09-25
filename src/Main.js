import React from "react";
import HornedBeast from "./HornedBeast";
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component {

  render() {

    let hornedBeastArr = this.props.data.map((beast, idx) => 
      <HornedBeast key={idx} beast={beast} image_url={beast.image_url} title={beast.title}  description={beast.description} keyword={beast.keyword} horns={beast.horns} toggleModal={this.props.toggleModal}/>
    )
    return (
      <>
      <CardGroup>
        {hornedBeastArr}
      </CardGroup>
      </>
    )

  }
}

export default Main;