import React, { Component } from "react";
import "./styles/App.css";
import { async, reject } from "q";

//The Codeslinger's creed
//I do not click with my hand; he who clicks with his hand has forgotten the face of his father
//I click with my eye
//
//I do not type with my hand; he who types with his hand has forgotten the face of his father
//I type with my mind
//
//I do not code with my computer; he who codes with his computer has forgotten the face of his father
//I code with my heart

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chipCount: {},
      smallBlind: {},
      bigBlind: {},
      level: 1,
      grade: {}
    };
    this.handleChangeChip = this.handleChangeChip.bind(this);
    this.handleChangeSmall = this.handleChangeSmall.bind(this);
    this.handleChangeBig = this.handleChangeBig.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkAmount = this.checkAmount.bind(this);
  }
  handleChangeChip = event => {
    const value = event.target.value;
    const valueInt = parseFloat(value);
    this.setState({ chipCount: valueInt });
  };
  handleChangeSmall = event => {
    const value = event.target.value;
    const valueInt = parseFloat(value);
    this.setState({ smallBlind: valueInt });
  };
  handleChangeBig = event => {
    const value = event.target.value;
    const valueInt = parseFloat(value);
    this.setState({ bigBlind: valueInt });
  };

  handleSubmit = (event, prevState) => {
    const blindsAdd = this.state.bigBlind + this.state.smallBlind;
    const maths = this.state.chipCount - blindsAdd;
    this.setState({ chipCount: maths });
    this.setState(prevState => ({ level: prevState.level + 1 }));

    // filler

    // const checkers = async chipCount => {
    //   if (chipCount <= 0) {
    //     return console.log("end it");
    //   }
    // };

    // .then(chipCount => {
    //   if (chipCount <= 0) {
    //     return console.log("end it");
    //   }
    // });
  };

  checkAmount = () => {
    const level = this.state.level;
    const minutes = level * 20;
    const hours = minutes / 60;

    console.log(
      "you lasted " + minutes + " minutes" + ", or " + hours + " hours "
    );
  };

  render() {
    let chipCount = this.state.chipCount;
    if (chipCount <= 0) {
      this.checkAmount();
    }

    return (
      <div>
        Level
        {this.state.level}
        <form>
          Starting Stack
          <p>
            <input
              type="number"
              name="chipCount"
              value={this.state.chipCount}
              onChange={this.handleChangeChip}
            />
          </p>
        </form>
        <form>
          Big Blind
          <p>
            <input
              type="number"
              name="bigBlind"
              value={this.state.bigBlind}
              onChange={this.handleChangeBig}
            />
          </p>
        </form>
        <form>
          Small Blind
          <p>
            <input
              type="number"
              name="smallBlind"
              value={this.state.smallBlind}
              onChange={this.handleChangeSmall}
            />
          </p>
        </form>
        <button onClick={() => this.handleSubmit()}>Calculate</button>
      </div>
    );
  }
}

export default App;
