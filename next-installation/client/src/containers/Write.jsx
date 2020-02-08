import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import styled from "styled-components";

import Steps from "../components/Steps";
import BottomButtons from "../components/BottomButtons";
import Card from "../components/Card";
import ThemesList from "../components/Themes";
import MessageInput from "../components/MessageInput";

import backgroundImage from "../assets/img/choiceBg.png";

const Write = ({ writeStore }) => {
  const activeStep = writeStore.activeStep;

  const renderInput = i => {
    switch (i) {
      case 0:
        return <ThemesList />;
      case 1:
        return <MessageInput />;
      default:
        return null;
    }
  };

  return (
    <StyledPage>
      <h1>Een kaartje schrijven</h1>
      <Steps />
      <h2>{writeStore.getStepTitle(activeStep)}</h2>
      {renderInput(activeStep)}
      <Card
        isFlipped={writeStore.cardFlipped}
        theme={writeStore.theme}
        message={writeStore.message}
        store={writeStore}
      />
      <BottomButtons />
    </StyledPage>
  );
};

const StyledPage = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

Write.propTypes = {
  writeStore: PropTypes.observableObject.isRequired
};

export default inject(`writeStore`)(observer(Write));
