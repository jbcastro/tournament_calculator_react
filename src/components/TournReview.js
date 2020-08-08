import React from "react";
import { Form, Text } from "informed";

const TournReview = (props) => {
  return (
    <div>
      <br></br>
      You out of cash homie <br></br>you lasted these many minutes{" "}
      {props.result}
      <button onClick={props.restartForm}>Restart</button>
    </div>
  );
};
export default TournReview;
