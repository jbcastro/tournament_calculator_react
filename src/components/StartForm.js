import React from "react";
import { Form, Text } from "informed";

const StartForm = (props) => {
  const validate = (value) => {
    if (!value || value.length < 0)
      return "Field must be at least five characters";
  };
  const tourns = props.tourns;
  const listItems = !tourns
    ? ""
    : tourns.map((tourn) => (
        <li key={tourn._id}>
          Name: {tourn.name}
          <br></br>
          Casino: {tourn.casino}
          <br></br>
          Starting Stack: {tourn.starting}
          <br></br>
          Round Length: {tourn.roundLength}
          <br></br>
          Result Length: {tourn.resultLength}
          <br></br>
          Score: {tourn.score}
          <br></br>
          Buyin: {tourn.buyin}
          <br></br>
          Per Dollor: {tourn.perDollar}
          <br></br>
          Country: {tourn.country}
          <br></br>
          State/Province: {tourn.state}
          <br></br>
          Area: {tourn.area}
          <br></br>
          City: {tourn.city}
          <br></br>
        </li>
      ));
  return (
    <div>
      <br></br>
      <h1>TOURNAMENT CALCULATOR!!1!!!!!!</h1>
      <Form onSubmit={props.startStack}>
        Starting Stack:
        <Text
          field="startStack"
          type="number"
          validate={validate}
          initialValue="10"
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
      {listItems}
    </div>
  );
};
export default StartForm;
