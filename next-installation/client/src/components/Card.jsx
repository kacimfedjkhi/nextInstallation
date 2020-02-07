import React from "react";
import { inject, observer } from "mobx-react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import ReactCardFlip from "react-card-flip";

import styled from "styled-components";
import cardFront from "../assets/img/cardFront.png";

const useStyles = makeStyles(theme => ({
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

const Card = props => {
  const classes = useStyles();

  return (
    <>
      <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
        <Front>
          {props.theme ? <p>{props.theme}</p> : null}
          {props.message ? <Message>{props.message}</Message> : null}
          {props.locationCreated ? (
            <LocationCreated>{props.locationCreated}</LocationCreated>
          ) : null}
          <AnswerList>
            {props.answers
              ? props.answers.map(answer => <li key={answer}>{answer}</li>)
              : null}
          </AnswerList>

          {props.openStore ? <p>{props.openStore.message}</p> : null}
        </Front>
        <div className={classes.back}>
          <Paper elevation={3}>
            <img
              src="https://images.unsplash.com/photo-1514918956881-335d75e3c0c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
              alt=""
            />
          </Paper>
        </div>
      </ReactCardFlip>
      <Button onClick={props.writeStore.handleFlipCard}>flip</Button>
    </>
  );
};

const Front = styled.div`
  background-image: url(${cardFront});
  background-size: contain;
  width: 90rem;
  height: 59rem;
  transform: rotate(-5deg);
  position: relative;
`;

const Message = styled.p`
  font-family: "Aracne";
  font-size: 4.5rem;
  max-width: 35rem;
  transform: rotate(-6deg);

  position: absolute;
  top: 8.5rem;
  left: 6rem;
  font-style: italic;
  color: #6ec8cd;
  font-weight: bolder;
`;

const LocationCreated = styled.p`
  position: absolute;
  right: 20rem;
  bottom: 21.5rem;

  font-size: 3rem;
  font-family: "Nunito";
  font-weight: bold;
  color: #6ec8cd;
`;

const AnswerList = styled.ul`
  position: absolute;
  top: 25rem;
  left: 6rem;

  & li {
    font-family: "Aracne";
    color: #4da0a4;
    font-size: 3.5rem;
    padding: 1rem 0;
    font-weight: bold;
    font-style: italic;
    transform: rotate(-5deg);
  }
`;

export default inject(`writeStore`)(observer(Card));
