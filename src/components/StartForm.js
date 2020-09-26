import React, { useState, useEffect } from "react";
import { Form, Text } from "informed";
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
  });
  const submitForm = (e) => {
    props.startStackSubmit(e);
    setStartingInfoSubmitted(false);

    setStartingInfo({
      ...staringInfo,
      roundLength: e.roundLength,
      startStack: e.startStack,
    });
  };
  return startingInfoSubmitted === true ? (
    <div>
      <br></br>
      <h1>TOURNAMENT CALCULATOR!!1!!!!!!</h1>
      <Form onSubmit={submitForm}>
        Starting Stack:
        <Text
          field="startStack"
          type="number"
          validate={validate}
          initialValue="10000"
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
          field="buyin"
          type="number"
          validate={validate}
          initialValue="10"
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  ) : (
    <ChipForm
      startStack={staringInfo.startStack}
      roundLength={staringInfo.roundLength}
    ></ChipForm>
  );
};
export default StartForm;
