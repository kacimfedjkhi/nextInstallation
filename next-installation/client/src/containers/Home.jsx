import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import { inject, observer } from "mobx-react";

import styled from "styled-components";
import backgroundImage from "../assets/img/choiceBg.png";
import writeImg from "../assets/img/writeImg.png";
import openImg from "../assets/img/openImg.png";

const Home = ({ uiStore }) => {
  const handleSetAction = e => {
    uiStore.selectedAction = e;
  };

  return (
    <StyledPage>
      <Link to={ROUTES.onboarding}>
        <Button
          img={writeImg}
          onClick={() => handleSetAction("write")}
        ></Button>
      </Link>
      <Link to={ROUTES.onboarding}>
        <Button img={openImg} onClick={() => handleSetAction("open")}></Button>
      </Link>
    </StyledPage>
  );
};

const StyledPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  height: 100vw;
  width: 50vw;
  border: none;
  background-color: transparent;
  background-image: url(${props => props.img});
  background-repeat: no-repeat;
  background-size: 80%;
  background-position: center;

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

export default inject(`uiStore`)(observer(Home));
