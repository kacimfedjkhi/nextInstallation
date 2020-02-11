import React from "react";
import { inject, observer } from "mobx-react";

import { makeStyles } from "@material-ui/core/styles";

import ReactCardFlip from "react-card-flip";

import styled from "styled-components";
import cardFront from "../assets/img/cardFront.png";
import cardBack from "../assets/img/cardBack_kortrijk.png";
import flip from "../assets/img/flip.png";

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
      <FlipBtn onClick={props.writeStore.handleFlipCard}>
        <img width="60" src={flip} alt="Button to flip card" />
      </FlipBtn>

      <ReactCardFlip isFlipped={props.isFlipped} flipDirection="vertical">
        <Front>
          {props.theme ? <p>{props.theme}</p> : null}
          <CardContent>
            {props.message ? <Message>{props.message}</Message> : null}
            <AnswerList>
              {props.answers
                ? props.answers.map(answer => <li key={answer}>{answer}</li>)
                : null}
              <li>
                {props.openStore ? <p>{props.openStore.message}</p> : null}
              </li>
            </AnswerList>
          </CardContent>
          {props.locationCreated ? (
            <LocationCreated>{props.locationCreated}</LocationCreated>
          ) : null}
        </Front>
        <Back img={cardBack}></Back>
      </ReactCardFlip>
    </>
  );
};

const Front = styled.div`
  background-image: url(${cardFront});
  background-size: contain;
  width: 100rem;
  height: 66rem;
  transform: rotate(-5deg);
  position: relative;
`;

const Back = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 100rem;
  height: 66rem;
  transform: rotate(-5deg);
  position: relative;
`;

const Message = styled.p`
  font-family: "Aracne";
  font-size: 4.5rem;
  max-width: 35rem;
  transform: rotate(-6deg);
  font-style: italic;
  color: #8089ce;
  font-weight: bolder;
  margin-bottom: 3rem;
`;

const LocationCreated = styled.p`
  position: absolute;
  right: 20rem;
  bottom: 24rem;

  font-size: 3rem;
  font-family: "Nunito";
  font-weight: bold;
  color: #6ec8cd;
`;

const AnswerList = styled.ul`
  width: 40rem;
  height: 30rem;

  & li {
    font-family: "Aracne";
    color: #4da0a4;
    font-size: 3.5rem;
    padding: 1rem 0;
    font-weight: bold;
    font-style: italic;
    transform: rotate(-5deg);
    max-width: 39rem;
  }
`;

const FlipBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 6rem;
  height: 6rem;
  z-index: 999;
  outline: none;

  position: relative;
  top: 70rem;

  &:focus {
    transform: scale(0.95);
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 45rem;
  height: 50rem;
  padding: 6rem 0 0 5rem;
`;

export default inject(`writeStore`)(observer(Card));
