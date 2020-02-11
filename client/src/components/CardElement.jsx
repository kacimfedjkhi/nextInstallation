import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../constants/index";
import { observer } from "mobx-react";

import envelope from "../assets/img/envelope.png";

const CardElement = props => {
  const getRotation = () => {
    let rotation = Math.floor(Math.random() * 11);
    rotation *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return rotation;
  };

  const CardContainer = styled.div`
    position: absolute;
  `;

  const Card = styled.div`
    width: 40rem;
    height: 24.9rem;
    display: inline-block;
    position: absolute;
    transform: rotate(${getRotation}deg);

    background-image: url(${envelope});
    background-size: cover;
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

    if (changeX > 3 && changeY > 3) {
      console.log("wow drag");
    } else {
      console.log("ow click");

      props.store.selectedCard = e.currentTarget.id;
      props.history.push(ROUTES.answer);
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
          id={props.data.uniqueId}
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

export default withRouter(observer(CardElement));
