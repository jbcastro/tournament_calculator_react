import React, { useState, useEffect } from "react";
import { Form, Text } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import TournCardsData from "./TournCardsData";
import ChipForm from "./ChipForm";
import StartForm from "./StartForm";

const AddLocation = (props) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [allLocation, setAllLocation] = React.useState({
    country: {},
    region: {},
    area: {},
    casino: null,
  });
  const [readyToAdd, setReadyToAdd] = useState(false);
  const addingOne = (e) => {
    e.preventDefault();
    setReadyToAdd(true);
  };

  // console.log(country);
  const steve = (e, f) => {
    setAllLocation({ ...allLocation, [f]: e });
    props.setLocation(e, f);
    console.log(e, f);
  };
  useEffect(() => {
    setAllLocation({ ...allLocation, area: {} });
  }, [allLocation.region]);
  useEffect(() => {
    setAllLocation({ ...allLocation, casino: {} });
  }, [allLocation.area]);

  //
  const [showAddButton, setShowAddButton] = useState(false);
  const jim = (e, f) => {
    setAllLocation({ ...allLocation, [f]: e.target.value });
    props.setLocation(e, f);
    // console.log(e, [f]);
  };
  const ryan = (e, f) => {
    setAllLocation({ ...allLocation, [f]: e.target.value });
    setShowAddButton(true);
    props.setLocation(e, f);
  };

  // console.log(props.regionSet);
  let selectableAreas = [];

  {
    props.usaAreas.map((item) => {
      if (item.state == props.regionSet) {
        selectableAreas = item.areas;
      }
    });
  }

  const casinos = props.casinos;

  const [allAreaCasinos, setAllAreaCasinos] = React.useState({
    allInfo: {},
  });

  useEffect(() => {
    setAllAreaCasinos({
      ...allAreaCasinos,
      allInfo: Object.values(casinos).filter(
        (item) => item.area == allLocation.area
      ),
    });
  }, [allLocation.area]);
  const tourns = props.tourns;
  const [filteredTourns, setFilteredTourns] = React.useState({
    toune: {},
  });
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (props.tournsLoaded && props.casinosLoaded) {
      setLoad(true);
    }
  }, [props]);

  useEffect(() => {
    if (load == true) {
      setFilteredTourns({
        ...filteredTourns,
        toune: Object.values(tourns).filter(
          (item) => item.casino == allLocation.casino
        ),
      });
    }
  }, [allLocation.casino]);
  useEffect(() => {
    setReadyToAdd(false);
  }, [allLocation]);

  const listItems = Object.values(filteredTourns.toune);

  const saverr = () => {
    console.log("dduuueee");
  };
  return (
    <div>
      <CountryDropdown
        value={allLocation.country}
        onChange={(e) => steve(e, "country")}
        priorityOptions={["US", "CA", "GB"]}
      />
      <RegionDropdown
        country={allLocation.country}
        value={allLocation.region}
        onChange={(e) => steve(e, "region")}
      />
      {/* {viewStuff} */}
      <form id="formz" onSubmit={addingOne}>
        {/* asfg */}
        <select
          onChange={(e) => jim(e, "area")}
          id="area"
          value={allLocation.area}
        >
          <option value="0">Select Area</option>
          {selectableAreas.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>

        <select
          onChange={(e) => ryan(e, "casino")}
          id="casino"
          value={allLocation.casino}
        >
          <option value="0">Select Casino</option>
          {Object.values(allAreaCasinos.allInfo).map((item, i) => (
            <option key={i}>{item.name}</option>
          ))}
        </select>
        {/* <ul>{listItems}</ul> */}
        {/* <select>
          <option value="null">Select Area</option>
          {marc.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select> */}
        <br></br>
        {showAddButton === true ? (
          <input type="submit" value="Add One"></input>
        ) : null}
      </form>
      {readyToAdd === true ? (
        <span>
          <StartForm
            startStackSubmit={props.startStackSubmit}
            saveData={props.saveData}
            allLocation={allLocation}
          ></StartForm>
        </span>
      ) : null}
      <TournCardsData listItems={listItems}></TournCardsData>
    </div>
  );
};
export default AddLocation;
