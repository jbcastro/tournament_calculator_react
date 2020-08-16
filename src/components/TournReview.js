import React, { useState } from "react";
import { Form, Text, useFormState, useFieldApi } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Country from "./Country";

const TournReview = (props) => {
  const validate = (value) => {
    if (!value || value.length < 0)
      return "Field must be at least five characters";
  };

  const ComponentUsingFormState = () => {
    const formState = useFormState();
    return (
      <pre>
        <code>{JSON.stringify(formState, null, 2)}</code>
      </pre>
    );
  };
  // const changeCountry = (g) => {
  //   const formState = useFormState();
  //   formState.values.country = g;
  // };
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  const CountryDropChanger = () => {
    const fieldApi = useFieldApi("country");

    const changeCountry = (e) => {
      fieldApi.setValue(e);
      setCountry(e);
    };
    return (
      <CountryDropdown value={country} onChange={(e) => changeCountry(e)} />
    );
  };
  const StateDropChanger = () => {
    const fieldApi = useFieldApi("state");

    const changeState = (e) => {
      fieldApi.setValue(e);
      setState(e);
    };
    return <RegionDropdown value={state} onChange={(e) => changeState(e)} />;
  };
  const formState = useFormState();
  const initialValues = {
    country: "USA",
    name: "Joe",
  };

  // const handleSubmit = (e)=>{

  //   props.saveData(e)
  // }
  return (
    <Form onSubmit={props.saveData} initialValues={initialValues}>
      {({ formApi, formState }) => (
        <div>
          <br></br>
          You out of cash homie <br></br>you lasted these many minutes{" "}
          {props.result}
          You got {props.perDollar} minutes per dollar buyin
          <button onClick={props.restartForm}>Restart</button>
          <label>
            Name
            <Text field="name" type="text" validate={validate}></Text>
          </label>
          <label>
            Casino
            <Text field="casino" type="text" validate={validate}></Text>
          </label>
          {/* <label>
          <Country field="country" />
        </label> */}
          <label>
            <CountryDropChanger />
          </label>
          <label>
            {" "}
            <Text field="country"></Text>
          </label>
          <label>
            <StateDropChanger />
          </label>
          <label>
            {" "}
            <Text field="state"></Text>
          </label>
          <label>
            Area
            <Text field="area" type="text" validate={validate}></Text>
          </label>
          <label>
            City
            <Text field="city" type="text" validate={validate}></Text>
          </label>
          <button type="submit">Save</button>
          <ComponentUsingFormState />
        </div>
      )}
    </Form>
  );
};
export default TournReview;

//  {/* <label>
//           Country
//           <CountryDropdown
//             value={country}
//             field="country"
//             onChange={(val) => setCountry(val)}
//           />
//           <Text field="country" type="text" validate={validate}></Text>
//         </label>
//         <label>
//           State/Province
//           <Text field="state" type="text" validate={validate}></Text>
//         </label> */}
