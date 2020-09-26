import React, { useState, useEffect } from "react";
import { Form, Text } from "informed";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const TournCards = ({ data }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div>
      {" "}
      <Card className={classes.root} key={data._id}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {data.casino}
          </Typography>
          <Typography variant="h5" component="h2">
            {data.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Score: {data.score}
            <br></br> Starting Stack: {data.starting}
          </Typography>
          <Typography variant="body2" component="p">
            <br />
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};
export default TournCards;

// const listItems = props.listItems;
// console.log(listItems);
