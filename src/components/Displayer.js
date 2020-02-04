import React, { Component } from "react";
const MILISECONDS_TO_UPDATE = 1000; //setInterval calls function every 1s

//displayer component
class Displayer extends Component {
  constructor(props) {
    super(props);
    //displayer comp. has time property and message property
    this.state = {
      //extract current seconds in time from Date object
      currentSecond: new Date().getSeconds(),
      messageMult: ""
    };
  }

  componentDidMount() {
    //setinterval to update comp.
    this.intervalID = setInterval(
      () => this.updateTime(),
      MILISECONDS_TO_UPDATE
    );
  }

  //clearing timer when comp. unmounts
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  //setting new current second to comp. state
  //then evaluating it for multipl.
  updateTime() {
    this.setState(
      {
        currentSecond: new Date().getSeconds()
      },
      () => {
        this.whichMultiple();
      }
    );
  }

  //func evaluates if current second is multiple of cases
  whichMultiple() {
    var secondToTest = this.state.currentSecond;

    if (secondToTest % 3 === 0 && secondToTest % 5 !== 0) {
      this.setState({
        messageMult: "fizz"
      });
    } else if (secondToTest % 5 === 0 && secondToTest % 3 !== 0) {
      this.setState({
        messageMult: "buzz"
      });
    } else if (secondToTest % 3 === 0 && secondToTest % 5 === 0) {
      this.setState({
        messageMult: "fizzbuzz"
      });
    } else {
      this.setState({
        messageMult: ""
      });
    }
  }

  //displays curent second in time and message if its multiple
  render() {
    return (
      <div className="Displayer">
        <h1>Current seconds: {this.state.currentSecond}</h1>
        <h1>Word? {this.state.messageMult}</h1>
      </div>
    );
  }
}

export default Displayer;
