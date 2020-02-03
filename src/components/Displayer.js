import React, { Component } from "react";
const MILISECONDS_TO_UPDATE = 1000;

class Displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().getSeconds()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.updateTime(),
      MILISECONDS_TO_UPDATE
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateTime() {
    this.setState({
      currentTime: new Date().getSeconds()
    });
  }

  render() {
    return (
      <div className="Displayer">
        <h1>Current seconds: {this.state.currentTime}</h1>
      </div>
    );
  }
}

export default Displayer;
