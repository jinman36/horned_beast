import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
  render() {
    return (
      <>
      <HornedBeast title="Boston terrier" imageURL="https://images.unsplash.com/photo-1623010830437-f1f8c2a5b8ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" description="Puppy dog"/>

      <HornedBeast title="Another Bostie" imageURL="https://images.unsplash.com/photo-1605936635478-325b076414a8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9zdG9uJTIwdGVycmllcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" description="Another Puppy dog"/>
      </>
    )

  }
}

export default Main;