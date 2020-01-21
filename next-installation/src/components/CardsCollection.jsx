import React from "react";
import styled from "styled-components";
import CardElement from "../components/CardElement";

const StyledSpace = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #f5f5f5;
  z-index: -1;
`;

const CardsCollection = props => {
  //const classes = useStyles();

  const getXpos = () => {
    const x = Math.floor(Math.random() * window.innerWidth - 400);
    console.log("EY TIS X", window.innerWidth, x);

    return x;
  };

  const getYpos = () => {
    const y = Math.floor(Math.random() * window.innerHeight - 250);
    console.log("EY TIS Y", window.innerHeight, y);

    return y;
  };

  const getRotation = () => {
    return Math.floor(Math.floor(Math.random() * 10) + 1);
  };

  return (
    <StyledSpace>
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        rotation={getRotation()}
        theme="sports"
        messages="1"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="2"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="find me"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
      <CardElement
        xPos={getXpos()}
        yPos={getYpos()}
        theme="sports"
        messages="3"
      />
    </StyledSpace>
  );
};

export default CardsCollection;
