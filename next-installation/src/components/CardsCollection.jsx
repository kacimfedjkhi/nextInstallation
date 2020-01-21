import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const StyledSpace = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: pink;
  z-index: -1;
`;

const Card = styled.div`
  width: 400px;
  height: 270px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.6);
`;

const CardsCollection = () => {
  //const classes = useStyles();

  const getXpos = () => {
    const x = (Math.random() * (window.innerHeight - 400)).toFixed();
    console.log("EY TIS X", x);

    return x;
  };

  const getYpos = () => {
    const y = (Math.random() * (window.innerHeight - 270)).toFixed();
    console.log("EY TIS Y", y);

    return y;
  };

  const x = (Math.random() * (window.innerHeight - 400)).toFixed();
  const y = (Math.random() * (window.innerHeight - 270)).toFixed();

  return (
    <StyledSpace>
      <Draggable bounds="parent" axis="both" defaultPosition={{ x: 35, y: 34 }}>
        <Card elevation={3}>
          <p>drag test</p>
        </Card>
      </Draggable>
    </StyledSpace>
  );
};

export default CardsCollection;
