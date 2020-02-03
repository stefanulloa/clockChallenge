import React, { Component } from "react";
const MILISECONDS_TO_UPDATE = 1000;

class Displayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSecond: new Date().getSeconds(),
      messageMult: ""
    };
  }

  componentDidMount() {
    this.whichMultiple();
    this.intervalID = setInterval(() => this.twoFuncs(), MILISECONDS_TO_UPDATE);
  }

  twoFuncs() {
    this.updateTime();
    this.whichMultiple();
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  updateTime() {
    this.setState({
      currentSecond: new Date().getSeconds()
    });
  }

  whichMultiple() {
    var secondToTest = this.state.currentSecond;

    if (secondToTest % 3 == 0 && secondToTest % 5 != 0) {
      this.setState({
        messageMult: "fizz"
      });
    } else if (secondToTest % 5 == 0 && secondToTest % 3 != 0) {
      this.setState({
        messageMult: "buzz"
      });
    } else if (secondToTest % 5 == 0 && secondToTest % 5 == 0) {
      this.setState({
        messageMult: "fizzbuzz"
      });
    } else {
      this.setState({
        messageMult: ""
      });
    }
  }

  render() {
    return (
      <div className="Displayer">
        <h1>
          {this.state.messageMult} Current seconds: {this.state.currentSecond}
        </h1>
      </div>
    );
  }
}

export default Displayer;
