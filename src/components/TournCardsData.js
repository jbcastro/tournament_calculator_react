import React, { useState, useEffect } from "react";
import TournCards from "./TournCards";

const TournCardsData = ({ listItems }) => {
  const data = listItems;
  const cells = data.map((data) => {
    return <TournCards data={data} key={data._id} />;
  });
  return <div>{cells}</div>;
};
export default TournCardsData;
