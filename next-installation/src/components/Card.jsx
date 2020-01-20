import React from "react";
import { inject, observer } from "mobx-react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(80),
      height: theme.spacing(40),
      padding: "20px"
    }
  }
}));

const Card = ({ writeStore }) => {
  const classes = useStyles();
  const selectedTheme = writeStore.theme;
  const message = writeStore.message;

  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        <h3>Uw kaartje</h3>
        {selectedTheme ? <p>{selectedTheme}</p> : null}
        {message ? <p>{message}</p> : null}
      </Paper>
    </div>
  );
};

export default inject(`writeStore`)(observer(Card));
