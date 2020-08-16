import React, { Component } from "react";
import "./styles/App.css";
// import { async, reject } from "q";
import ChipForm from "./ChipForm";
import StartForm from "./StartForm";
import TournReview from "./TournReview";
let api = "http://localhost:5000/api";

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
      tourns: null,
      startingStack: {},
      buyin: {},
      perDollar: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.startStack = this.startStack.bind(this);
    this.restartForm = this.restartForm.bind(this);
    this.saveData = this.saveData.bind(this);
  }

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => {
        const tournsData = res.express;
        this.setState({ tourns: tournsData });
      })
      .catch((err) => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch(api);
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };
  handleSubmit = (e) => {
    let chipCount = this.state.chipCount;
    let smallBlind = e.smallBlind;
    let bigBlind = e.bigBlind;
    let ante = Number(e.ante);
    let level = this.state.level;
    let blinds1 = smallBlind + bigBlind;
    let blinds = blinds1 + ante;
    let newChipCount = chipCount - blinds;

    if (newChipCount > 0) {
      level++;
      this.setState({ level: level });
      this.setState({ chipCount: newChipCount });
    } else {
      let result = level * this.state.roundLength;

      this.setState({ outOfCash: true });
      this.setState({ result: result });
      let perDollar = result / this.state.buyin;
      this.setState({ perDollar: perDollar });
    }
  };

  startStack = (e) => {
    let startStack = e.startStack;
    let roundLength = e.roundLength;
    let buyin = e.buyin;
    this.setState({ chipCount: startStack });
    this.setState({ roundLength: roundLength });
    this.setState({ startingStack: startStack });
    this.setState({ buyin: buyin });
  };
  restartForm = () => {
    // this.callBackendAPI()
    //   .then((res) => this.setState({ tourns: res.express }))
    //   .catch((err) => console.log(err));
    this.setState({ chipCount: "p" });
    this.setState({ smallBlind: {} });
    this.setState({ bigBlind: {} });
    this.setState({ level: 1 });
    this.setState({ grade: {} });
    this.setState({ outOfCash: false });
    this.setState({ roundLength: {} });
    this.setState({ result: {} });
    this.setState({ buyin: {} });
    this.setState({ perDollar: {} });
    this.setState({ startStack: {} });
  };
  saveData = (e) => {
    let name = e.name;
    let casino = e.casino;
    let country = e.country;
    let state = e.state;
    let area = e.area;
    let city = e.city;
    console.log(country);

    let newItem = {
      name: name,
      casino: casino,
      country: country,
      state: state,
      area: area,
      city: city,
      starting: this.state.startingStack,
      roundLength: this.state.roundLength,
      resultLength: this.state.result,
      score: this.state.result,
      perDollar: this.state.perDollar,
      buyin: this.state.buyin,
    };

    console.log(newItem);
    fetch(`${api}/add?=${name}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((res) => {
        if (res.ok) {
          console.log(newItem);
          return res.json();
        } else {
          throw Error(`Request rejected with status ${res.status}`);
        }
      })
      .then((json) => {
        let newData;
        this.setState((state) => {
          newItem._id = json._id;
          const tourns = [...state.tourns, newItem];
          return {
            tourns,
            newItem: "",
          };
        });
      })
      .catch((error) => {
        console.log("this be your error brah" + error);
      });
  };
  render() {
    return this.state.chipCount === "p" ? (
      <div className="App">
        <StartForm startStack={this.startStack} tourns={this.state.tourns} />
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
      <TournReview
        result={this.state.result}
        restartForm={this.restartForm}
        saveData={this.saveData}
        perDollar={this.state.perDollar}
      />
    );
  }
}

export default App;
