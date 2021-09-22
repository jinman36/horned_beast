import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json"

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
      {hornedBeastArr}
      </>
    )

  }
}

export default Main;