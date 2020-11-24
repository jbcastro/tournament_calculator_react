import React, { useState, useEffect  } from "react";
import { Form, Text,useFormState,useArrayField } from "informed";
import TournReview from "./TournReview";

const ChipForm = (props) => {
  const initialChips = props.startStack;
  const buyIn=props.buyIn
  const [currentLevelAndStack, setCurrentLevelAndStack] = React.useState({
    level: 1,
    chipCount: initialChips,
  });
  const [eachLevelBlinds, setEachLevelBlinds] = React.useState({});
  const [outOfChips, setOutOfChips] = useState(false);
  const roundLength = props.roundLength;
  const [infoToBeSaved, setInfoToBeSaved] = React.useState({
    buyIn:buyIn
  });
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
      const perDollar = Number(timeLasted)/Number(buyIn)
      setInfoToBeSaved({
        time: timeLasted,
        perDollar:perDollar,
        buyIn:buyIn,level:level,
        
      });
    }
  };


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
        {/* <button type="submit">Submit</button> */}
      </Form>
      <TournReview 
      currentLevelAndStack={currentLevelAndStack}
      infoToBeSaved={infoToBeSaved}
      saveData={props.saveData}
      eachLevelBlinds={eachLevelBlinds}
      
      />
    </div>
  );
};
export default ChipForm;
