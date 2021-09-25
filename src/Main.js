import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"
import CardGroup from "react-bootstrap/CardGroup";

class Main extends React.Component {
  render() {

    let hornedBeastArr = [];

    data.forEach((beast, idx) => {
      hornedBeastArr.push(
        <HornedBeast key={idx} image_url={beast.image_url} title={beast.title}  description={beast.description} keyword={beast.keyword} horns={beast.horns}/>
      )
    })
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