import React from "react";
import { inject, observer } from "mobx-react";
import Keyboard from "./KeyboardInput";

import styled from "styled-components";
import Button from "@material-ui/core/Button";

import templateBg from "../assets/img/templateBg.png";
import templateBg_dark from "../assets/img/templateBg_dark.png";

import inputChoiceBg_dark from "../assets/img/inputChoiceBg_dark.png";
import inputChoiceBg_light from "../assets/img/inputChoiceBg_light.png";

const MessageInput = ({ writeStore, uiStore }) => {
  const handleClick = msg => {
    writeStore.message = msg;
  };

  let input = writeStore.inputMethod;

  return (
    <>
      <div>
        <InputChoiceBtn
          onClick={() => writeStore.handleChangeInput("templates")}
          img={
            writeStore.inputMethod === "templates"
              ? inputChoiceBg_dark
              : inputChoiceBg_light
          }
        >
          sjablonen
        </InputChoiceBtn>
        <InputChoiceBtn
          onClick={() => writeStore.handleChangeInput("keyboard")}
          img={
            writeStore.inputMethod === "keyboard"
              ? inputChoiceBg_dark
              : inputChoiceBg_light
          }
        >
          eigen boodschap
        </InputChoiceBtn>
      </div>

      <br />
      {input === "templates" ? (
        <MessageList>
          {messages[writeStore.theme].map(message => (
            <TemplateMessage key={message} onClick={() => handleClick(message)}>
              {message}
            </TemplateMessage>
          ))}
        </MessageList>
      ) : (
        <KeyboardMessage>
          {uiStore.userLanguage === "nl"
            ? "Start met typen en uw boodschap verschijnt direct op het postkaartje!"
            : "Commencez à taper et votre message apparaîtra directement sur la carte postale !"}
        </KeyboardMessage>
      )}
      {input === "keyboard" ? <Keyboard store={writeStore} /> : null}
    </>
  );
};

const TemplateMessage = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${templateBg});
  background-size: contain;
  background-repeat: no-repeat;
  height: 6.5rem;
  margin-bottom: 1rem;

  color: #8089ce;
  font-family: "Nunito";
  font-weight: bold;
  font-size: 2rem;

  &:focus {
    outline: none;
    background-image: url(${templateBg_dark});
    color: white;
  }
`;

const MessageList = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputChoiceBtn = styled.button`
  border: none;
  background-color: transparent;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: no-repeat;
  width: 30rem;
  height: 6rem;

  font-size: 2.5rem;
  color: white;
  font-weight: bold;

  &:focus {
    outline: none;
  }
`;

const KeyboardMessage = styled.p`
  color: #8089ce;
  font-size: 2rem;
  font-weight: bold;
  padding-top: 2rem;
`;

const messages = {
  news: [
    "Wat zijn de laatste nieuwtjes van jouw streek?",
    "Wat moet iedereen weten over jouw streek?",
    "Welke boodschap zou je graag delen met iedereen?"
  ],
  nature: [
    "Wat is het mooiste natuurplekje in jouw streek?",
    "Zou je liever meer of minder natuur in jouw streek zien?",
    "Woon je liever in de stad of op het platteland?"
  ],
  technology: [
    "Is jouw streek eerder ouderwets of modern?",
    "Wat is jouw favoriete stukje technologie?",
    "Hoelang zou jij zonder je smartphone kunnen"
  ],
  culinary: [
    "Wat is een typisch gerecht van jouw streek?",
    "Wat zou iedereen wel eens gegeten moeten hebben?",
    "Welk restaurant zou je aan iedereen aanraden?"
  ],
  tourism: [
    "Wat is uniek aan jouw streek?",
    "Beschrijf jouw streek in 3 woorden.",
    "Beschrijf de inwoners van jouw streek."
  ],
  art: [
    "Kent jouw streek een bekende kunstenaar?",
    "Kent jouw streek een bekende muzikant?",
    "Beoefen jij een vorm van kunst?"
  ]
};

export default inject(`writeStore`, `uiStore`)(observer(MessageInput));
