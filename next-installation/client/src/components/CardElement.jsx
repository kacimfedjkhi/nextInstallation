import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const CardElement = (props, { history }) => {
  const getRotation = () => {
    let rotation = Math.floor(Math.random() * 11); // this will get a number between 1 and 99;
    rotation *= Math.floor(Math.random() * 2) === 1 ? 1 : -1; // this will add minus sign in 50% of cases

    return rotation;
  };

  const CardContainer = styled.div`
    position: absolute;
  `;

  const Card = styled.div`
    width: 400px;
    height: 270px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.6);
    display: inline-block;
    position: absolute;
    transform: rotate(${getRotation}deg);
  `;

  const handleDragCard = e => {
    console.log(e.target);
    e.target.parentElement.style.zIndex = "999";
  };

  const handleClickCard = e => {
    console.log(e);
  };

  return (
    <Draggable
      bounds="parent"
      axis="both"
      defaultPosition={{ x: props.xPos, y: props.yPos }}
      onStart={handleDragCard}
    >
      <CardContainer>
        <Card id="23" onClick={e => handleClickCard(e)}>
          <p>Cool cardss</p>,
        </Card>
      </CardContainer>
    </Draggable>
  );
};

export default CardElement;
