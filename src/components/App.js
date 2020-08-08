import React, { Component } from "react";
import "./styles/App.css";
// import { async, reject } from "q";
import ChipForm from "./ChipForm";
import StartForm from "./StartForm";
import TournReview from "./TournReview";

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
      chipCount: "p",
      smallBlind: {},
      bigBlind: {},
      level: 1,
      grade: {},
      outOfCash: false,
      roundLength: {},
      result: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.startStack = this.startStack.bind(this);
    this.restartForm = this.restartForm.bind(this);
  }
  handleSubmit = (e) => {
    let chipCount = this.state.chipCount;
    let smallBlind = e.smallBlind;
    let bigBlind = e.bigBlind;
    let level = this.state.level;
    console.log(smallBlind);
    let blinds = smallBlind + bigBlind;
    // console.log(blinds);
    let newChipCount = chipCount - blinds;
    console.log(newChipCount);
    console.log(e.bigBlind);

    if (newChipCount > 0) {
      level++;
      this.setState({ level: level });
      this.setState({ chipCount: newChipCount });
    } else {
      let result = level * this.state.roundLength;

      this.setState({ outOfCash: true });
      this.setState({ result: result });
    }
  };

  startStack = (e) => {
    let startStack = e.startStack;
    let roundLength = e.roundLength;
    this.setState({ chipCount: startStack });
    this.setState({ roundLength: roundLength });
  };
  restartForm = () => {
    this.setState({ chipCount: "p" });
    this.setState({ smallBlind: {} });
    this.setState({ bigBlind: {} });
    this.setState({ level: 1 });
    this.setState({ grade: {} });
    this.setState({ outOfCash: false });
    this.setState({ roundLength: {} });
    this.setState({ result: {} });
  };
  render() {
    return this.state.chipCount === "p" ? (
      <div className="App">
        <StartForm startStack={this.startStack} />
      </div>
    ) : this.state.outOfCash === false ? (
      <div className="App">
        <ChipForm
          level={this.state.level}
          chipCount={this.state.chipCount}
          handleSubmit={this.handleSubmit}
          startStack={this.startStack}
        />
      </div>
    ) : (
      <TournReview result={this.state.result} restartForm={this.restartForm} />
    );
  }
}

export default App;
