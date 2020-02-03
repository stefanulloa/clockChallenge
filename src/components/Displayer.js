import React, { Component } from "react";

class Displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => this.updateTime(), 1000);
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
