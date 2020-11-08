import React, { useState, useEffect } from "react";
import { Form, Text } from "informed";
import TournReview from "./TournReview";

const ChipForm = (props) => {
  const initialChips = props.startStack;
  const [currentLevelAndStack, setCurrentLevelAndStack] = React.useState({
    level: 1,
    chipCount: initialChips,
  });
  const [eachLevelBlinds, setEachLevelBlinds] = React.useState({});
  const [outOfChips, setOutOfChips] = useState(false);
  const roundLength = props.roundLength;
  const [infoToBeSaved, setInfoToBeSaved] = React.useState({});
  // console.log(props.startingInfo);
  const handleSubmit = (e) => {
    let smallBlind = Number(e.smallBlind);
    let bigBlind = Number(e.bigBlind);
    let ante = Number(e.ante);
    let numberOfBlinds1 = roundLength / 2;
    let numberOfBlinds = numberOfBlinds1 / 10;
    console.log(numberOfBlinds);
    let numberOfAntes = roundLength / 2;
    let comboBlinds = smallBlind + bigBlind;
    let totalOfBlinds = comboBlinds * numberOfBlinds;
    console.log(totalOfBlinds);
    let totalOfAntes = numberOfAntes * ante;
    let blindsPlusAntes = totalOfAntes + totalOfBlinds;
    let newChipCount = currentLevelAndStack.chipCount - blindsPlusAntes;

    if (newChipCount > 0) {
      let curLevel = currentLevelAndStack.level + 1;
      const bigg = "bigBlind" + currentLevelAndStack.level;
      const smalll = "smallBlind" + currentLevelAndStack.level;
      const antee = "ante" + currentLevelAndStack.level;
      console.log(bigg);
      setCurrentLevelAndStack({
        ...currentLevelAndStack,
        level: curLevel,
        chipCount: newChipCount,
      });
      setEachLevelBlinds({
        ...eachLevelBlinds,
        [bigg]: bigBlind,
        [smalll]: smallBlind,
        [antee]: ante,
      });
    } else {
      const level = currentLevelAndStack.level;
      setOutOfChips(true);
      const timeLasted = level * roundLength;
      setInfoToBeSaved({
        time: timeLasted,
      });
    }
  };

  const Review = () => {
    return (
      <div>
        You out of cash homie<br></br>
        You lasted {infoToBeSaved.time} minutes<br></br>
        <Form onSubmit={props.saveData}>
          <label>
            <Text field="name" type="text" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </div>
    );
  };

  //this is where you left off. Should have the info added BEFORE the tournament calc
  //that way when this ends it can show a review of the tourny before submitting
  //maybe when "out of chips" is true all the info gets set to the state for submitting
  //also need to clear all the booleans when the casino/area (done except add one button)

  //todo set state of stuff here that you have so when the next component is loaded
  //it is already set
  return outOfChips == false ? (
    <div>
      <br></br>
      Level {currentLevelAndStack.level}
      <br></br>
      Chip Count: {currentLevelAndStack.chipCount}
      <Form onSubmit={handleSubmit}>
        <p></p>

        <label>
          Level {props.level} Small Blind:
          <Text field="smallBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Big Blind:
          <Text field="bigBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Ante:
          <Text field="ante" type="number" initialValue="0" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  ) : (
    <div>
      <br></br>
      Level {currentLevelAndStack.level}
      <br></br>
      Chip Count: {currentLevelAndStack.chipCount}
      <Form onSubmit={handleSubmit}>
        <p></p>

        <label>
          Level {props.level} Small Blind:
          <Text field="smallBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Big Blind:
          <Text field="bigBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Ante:
          <Text field="ante" type="number" initialValue="0" />
        </label>
        <button type="submit">Submit</button>
      </Form>
      <Review />
    </div>
  );
};
export default ChipForm;
