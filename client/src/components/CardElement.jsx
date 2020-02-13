import React from "react";
import Draggable from "react-draggable";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { ROUTES } from "../constants/index";
import { observer } from "mobx-react";

import nature from "../assets/img/envelopes/nature.png";
import news from "../assets/img/envelopes/news.png";
import art from "../assets/img/envelopes/art.png";
import culinary from "../assets/img/envelopes/culinary.png";
import tourism from "../assets/img/envelopes/tourism.png";
import technology from "../assets/img/envelopes/technology.png";

const CardElement = props => {
  const getRotation = () => {
    let rotation = Math.floor(Math.random() * 11);
    rotation *= Math.floor(Math.random() * 2) === 1 ? 1 : -1;

    return rotation;
  };

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

  const Card = styled.div`
    width: 40rem;
    height: 24.9rem;
    display: inline-block;
    position: absolute;
    transform: rotate(${getRotation}deg);

    background-image: url(${props => props.img});
    background-size: cover;
  `;

  const images = {
    news: news,
    nature: nature,
    culinary: culinary,
    tourism: tourism,
    technology: technology,
    art: art
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
          img={images[props.data.theme]}
          onMouseDown={e => handleMouseDown(e)}
          onMouseUp={e => handleMouseUp(e)}
        >
          {console.log(props.data)}
        </Card>
      </CardContainer>
    </Draggable>
  );
};

const CardContainer = styled.div`
  position: absolute;
`;

export default withRouter(observer(CardElement));
