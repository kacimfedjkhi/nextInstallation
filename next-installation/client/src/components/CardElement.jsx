import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const CardElement = props => {
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

  let currentX, currentY, newX, newY;

  const handleDragCard = e => {
    e.target.parentElement.style.zIndex = "999";
  };

  const handleMouseDown = e => {
    currentX = e.clientX;
    currentY = e.clientY;
  };

  const handleMouseUp = e => {
    newX = e.clientX;
    newY = e.clientY;

    console.log(Math.abs(currentX - newX));
    const changeX = Math.abs(currentX - newX);
    const changeY = Math.abs(currentY - newY);

    if (changeX > 5 && changeY > 5) {
      console.log("wow drag");
    } else {
      console.log("ow click");
    }
  };

  return (
    <Draggable
      bounds="parent"
      axis="both"
      defaultPosition={{ x: props.xPos, y: props.yPos }}
      onDrag={handleDragCard}
    >
      <CardContainer>
        <Card
          id="23"
          onMouseDown={e => handleMouseDown(e)}
          onMouseUp={e => handleMouseUp(e)}
        >
          {console.log(props.data)}
          <p>{props.data.theme}</p>
          <p>{props.data.text}</p>
        </Card>
      </CardContainer>
    </Draggable>
  );
};

export default CardElement;
