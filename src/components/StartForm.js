import React, { useState, useEffect } from "react";
import { Form, Text, Select, Option,useFormState  } from "informed";
import ChipForm from "./ChipForm";

const StartForm = (props) => {
 
  const validate = (value) => {
    if (!value || value.length < 0)
      return "Field must be at least five characters";
  };
  const [startingInfoSubmitted, setStartingInfoSubmitted] = useState(true);
  const [staringInfo, setStartingInfo] = React.useState({
    startStack: {},
    roundLength: {},
    tournName: {},
    occurrence: {},
    buyIn:{}
  });
  const submitForm = (e) => {
    props.startStackSubmit(e);
    setStartingInfoSubmitted(false);

    setStartingInfo({
      ...staringInfo,
      roundLength: e.roundLength,
      startStack: e.startStack,
      tournName: e.tournName,
      occurrence: e.occurrence,
      buyIn:e.buyIn
    });
  };
  const clearForm = ()=>{
    setStartingInfoSubmitted(true);
  }
  if (staringInfo.occurrence == "other") {
    console.log("dude");
  }
  const ComponentUsingFormState = () => {
    const formState = useFormState();
    return (
      <pre>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    );
  };

  //need to make choosing the "other" option do something

  return startingInfoSubmitted === true ? (
    <div>
      <br></br>
     
      <Form onSubmit={submitForm}>
      <ComponentUsingFormState />
        <h1>TOURNAMENT CALCULATOR!!1!!!!!!</h1>
        Tournament Name:
        <Text field="tournName" type="text" validate={validate} initialValue="laura"/>
        Occurance:
        <Select field="occurrence">
          <Option value="" disabled>
            Select One...
          </Option>
          <Option value="daily">daily</Option>
          <Option value="weekly">weekly</Option>
          <Option value="biweekly">bi-weekly</Option>
          <Option value="monthly">monthly</Option>
          <Option value="yearly">yearly</Option>
          <Option value="biyearly">bi-yearly</Option>
          <Option value="onetime">one time</Option>
          <Option value="other">other</Option>
        </Select>
        Starting Stack:
        <Text
          field="startStack"
          type="number"
          validate={validate}
          initialValue="100"
        />
        Round Length:
        <Text
          field="roundLength"
          type="number"
          validate={validate}
          initialValue="10"
        />
        Buy in: $
        <Text
          field="buyIn"
          type="number"
          validate={validate}
          initialValue="10"
        />
        <button type="submit">Submit</button>
      </Form>
     
    </div>
  ) : (
    <div><ChipForm
    startStack={staringInfo.startStack}
    roundLength={staringInfo.roundLength}
    saveData={props.saveData}
    buyIn={staringInfo.buyIn}
  ></ChipForm>
  <button onClick={clearForm}>Clear</button></div>
    
  );
};
export default StartForm;
