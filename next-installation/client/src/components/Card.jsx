import React from "react";
import { inject, observer } from "mobx-react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import ReactCardFlip from "react-card-flip";

const useStyles = makeStyles(theme => ({
  front: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(40),
      padding: "20px",
      overflow: "hidden"
    }
  },
  back: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(85),
      height: theme.spacing(45),
      overflow: "hidden"
    }
  }
}));

const Card = ({ writeStore }) => {
  const classes = useStyles();
  const selectedTheme = writeStore.theme;
  const message = writeStore.message;

  return (
    <>
      <ReactCardFlip
        isFlipped={writeStore.cardFlipped}
        flipDirection="vertical"
      >
        <div className={classes.front}>
          <Paper elevation={3}>
            <h3>Uw kaartje</h3>
            {selectedTheme ? <p>{selectedTheme}</p> : null}
            {message ? <p>{message}</p> : null}
          </Paper>
        </div>
        <div className={classes.back}>
          <Paper elevation={3}>
            <img
              src="https://images.unsplash.com/photo-1514918956881-335d75e3c0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt=""
            />
            <p>THISISTHEBACK</p>
          </Paper>
        </div>
      </ReactCardFlip>
      <Button onClick={writeStore.handleFlipCard}>flip</Button>
    </>
  );
};

export default inject(`writeStore`)(observer(Card));
