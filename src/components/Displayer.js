import React, { Component } from "react";
import "../styles.css";

const MILISECONDS_TO_UPDATE = 1000; //setInterval calls function every 1s
const CHANGE_DOMAIN_VALUE = 90 / 15; //when its 15 seconds in time, the seconds clock pointer has a 15 degree angle

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
  updateTime = () => {
    this.setState(
      {
        currentSecond: new Date().getSeconds()
      },
      () => {
        this.whichMultiple();
      }
    );
  };

  //func evaluates if current second is multiple of cases
  whichMultiple = () => {
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
  };

  //displays curent second in time and message if its multiple
  //it also renders clock classes deined in css
  render() {
    const curSec = this.state.currentSecond;
    const msg = this.state.messageMult;

    //modify style prop. of pointer class:
    // pointer will rotate according to sec-to-degree transformation
    const rotation = {
      transform: `rotate(${curSec * CHANGE_DOMAIN_VALUE}deg)`
    };

    return (
      <div className="Displayer">
        <div className="Clock">
          <div className="Pointer" style={rotation} />
        </div>
        <h1>Current seconds: {curSec}</h1>
        <h1>Word? {msg}</h1>
      </div>
    );
  }
}

export default Displayer;
