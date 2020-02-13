import React from "react";
import { inject, observer, PropTypes } from "mobx-react";
import styled from "styled-components";

import BottomButtons from "../components/BottomButtons";
import Card from "../components/Card";
import ThemesList from "../components/Themes";
import MessageInput from "../components/MessageInput";
import ControlCard from "../components/ControlCard";

import backgroundImage from "../assets/img/choiceBg.png";
import steps from "../assets/img/steps/steps_1.png";
import steps2 from "../assets/img/steps/steps_2.png";
import steps3 from "../assets/img/steps/steps_3.png";

import imageButton from "../assets/img/imageChange.png";

const Write = ({ writeStore, uiStore }) => {
  const activeStep = writeStore.activeStep;
  //const activeStep = 2;

  const renderInput = i => {
    switch (i) {
      case 0:
        return <ThemesList />;
      case 1:
        return <MessageInput />;
      case 2:
        return <ControlCard />;
      default:
        return null;
    }
  };

  const getSteps = active => {
    switch (active) {
      case 0:
        return steps;
      case 1:
        return steps2;
      case 2:
        return steps3;
      default:
        return steps;
    }
  };

  return (
    <StyledPage>
      <Steps img={getSteps(activeStep)}>
        <p>Current step: {activeStep}</p>
      </Steps>
      <RowLayout>
        <InputSection>
          <StepTitle>{writeStore.getStepTitle(activeStep)}</StepTitle>
          {renderInput(activeStep)}
        </InputSection>
        <CardSection>
          {activeStep === 0 ? (
            <ChangeImage>
              <div>
                <ImageText>
                  Kies een
                  <br /> andere foto
                </ImageText>
                <ImageCount>
                  foto <span>{writeStore.image + 1}</span> /5
                </ImageCount>
              </div>

              <ImageButton onClick={writeStore.handleChangeImage} />
            </ChangeImage>
          ) : null}

          <Card
            isFlipped={writeStore.cardFlipped}
            theme={writeStore.theme}
            message={writeStore.message}
            image={writeStore.image}
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
  background-repeat: no-repeat;
  width: 55rem;
  height: 13rem;

  position: absolute;
  top: 5rem;
  left: 5rem;

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
  position: absolute;
  right: 7rem;
  top: 17rem;
`;

const ChangeImage = styled.div`
  display: flex;
  position: relative;
  top: 2rem;
  left: 30rem;

  & div {
    margin-right: 2rem;
  }
`;

const InputSection = styled.div`
  position: absolute;
  top: 30rem;
  left: 20rem;
`;

const ImageText = styled.p`
  text-align: right;
  font-weight: bold;
  color: #505587;
  font-size: 2rem;
  line-height: 2.5rem;
  margin-bottom: 0.6rem;
`;

const ImageCount = styled.p`
  color: #8089ce;
  text-align: right;
  font-weight: 600;

  & span {
    font-weight: bold;
  }
`;

const ImageButton = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${imageButton});
  background-size: contain;
  width: 8rem;
  height: 8rem;

  &:focus {
    outline: none;
    transform: scale(0.95);
  }
`;

Write.propTypes = {
  writeStore: PropTypes.observableObject.isRequired
};

export default inject(`writeStore`, `uiStore`)(observer(Write));
