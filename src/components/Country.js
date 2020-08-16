import React, { useState } from "react";
import { Form, Text } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

const Country = (props) => {
  const [country, setCountry] = useState("");
  // console.log(country);

  return (
    <div>
      {" "}
      <CountryDropdown
        value={country}
        onChange={(val) => setCountry(val)}
        priorityOptions={["CA", "US", "GB"]}
        onBlur={props.onChange}
      />
    </div>
  );
};
export default Country;
