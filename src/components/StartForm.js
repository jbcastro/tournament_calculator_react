import React from "react";
import { Form, Text } from "informed";

const StartForm = (props) => {
  return (
    <div>
      <br></br>
      <h1>TOURNAMENT CALCULATOR!!1!!!!!!</h1>
      <Form onSubmit={props.startStack}>
        Starting Stack:
        <Text field="startStack" type="number" />
        Round Length:
        <Text field="roundLength" type="number" />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};
export default StartForm;
