import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import styled from "styled-components";

import BottomButtons from "../components/BottomButtons";
import Card from "../components/Card";
import ThemesList from "../components/Themes";
import MessageInput from "../components/MessageInput";

import backgroundImage from "../assets/img/choiceBg.png";
import steps from "../assets/img/steps_1.png";

const Write = ({ writeStore, uiStore }) => {
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
      <RowLayout>
        <InputSection>
          <Steps img={steps}>
            <p>Current step: {activeStep}</p>
          </Steps>
          <StepTitle>{writeStore.getStepTitle(activeStep)}</StepTitle>
          {renderInput(activeStep)}
        </InputSection>
        <CardSection>
          <Card
            isFlipped={writeStore.cardFlipped}
            theme={writeStore.theme}
            message={writeStore.message}
            store={writeStore}
            locationCreated={uiStore.selectedLocation}
          />
        </CardSection>
      </RowLayout>

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

const RowLayout = styled.section`
  display: flex;
`;

const Steps = styled.div`
  background-image: url(${props => props.img});
  background-size: contain;
  width: 55rem;
  height: 11.5rem;

  & p {
    display: none;
  }
`;

const StepTitle = styled.h2`
  font-size: 3rem;
  font-family: "Nunito";
  font-weight: bold;
  color: #8089ce;
  max-width: 50rem;
  line-height: 4rem;
  padding: 5rem 0;
`;

const CardSection = styled.div`
  position: relative;
  right: -10rem;
  top: 5rem;
`;

const InputSection = styled.div``;

Write.propTypes = {
  writeStore: PropTypes.observableObject.isRequired
};

export default inject(`writeStore`, `uiStore`)(observer(Write));
