import React, { Component } from "react";
const MILISECONDS_TO_UPDATE = 1000;

class Displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
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
      currentTime: new Date().toLocaleTimeString()
    });
  }

  render() {
    return (
      <div className="Displayer">
        <h1>Time: {this.state.currentTime}</h1>
      </div>
    );
  }
}

export default Displayer;
