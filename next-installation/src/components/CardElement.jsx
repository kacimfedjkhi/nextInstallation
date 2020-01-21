import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";

const CardElement = props => {
  const Card = styled.div`
    width: 400px;
    height: 270px;
    background-color: white;
    border-radius: 3px;
    box-shadow: 0px 2px 11px -1px rgba(0, 0, 0, 0.6);
    display: inline-block;
    position: absolute;
  `;

  const handleDragCard = e => {
    console.log("oh wawwww");
    console.log(e.target);
    e.target.style.zIndex = "999";
  };

  return (
    <Draggable
      bounds="parent"
      axis="both"
      defaultPosition={{ x: props.xPos, y: props.yPos }}
      onStart={handleDragCard}
    >
      <Card elevation={3}>
        <p>{props.messages}</p>
      </Card>
    </Draggable>
  );
};

export default CardElement;
