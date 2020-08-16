import React from "react";
import { Form, Text } from "informed";

const ChipForm = (props) => {
  return (
    <div>
      <br></br>
      Level {props.level}
      <br></br>
      Chip Count: {props.chipCount}
      <Form onSubmit={props.handleSubmit}>
        <p></p>
        <label>
          Level {props.level} Big Blind:
          <Text field="bigBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Small Blind:
          <Text field="smallBlind" type="number" initialValue="10" />
        </label>
        <label>
          Level {props.level} Ante:
          <Text field="ante" type="number" initialValue="0" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
export default ChipForm;
