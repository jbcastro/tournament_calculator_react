import React, { useState } from "react";
import { Form, Text, useFormState, useFieldApi } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import Country from "./Country";

const TournReview = (props) => {
  const eachLevelBlinds = props.eachLevelBlinds
  const infoToBeSaved = props.infoToBeSaved
  console.log(props.eachLevelBlinds)
const saveAll = (e)=>{
  {props.saveData(e,eachLevelBlinds,infoToBeSaved)}

}
const clearForm = ()=>{
  console.log("clearing brah")
}
  
  return (
        <div>
        You out of cash homie<br></br>
        You lasted {props.infoToBeSaved.time} minutes<br></br>
        <Form onSubmit={(e)=>saveAll(e)}>
          <label>
            Any notes you'd like to add:
            <Text field="notes" type="text" />
          </label>      
          <button type="submit">Submit</button>
        </Form>
        
      </div>
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
