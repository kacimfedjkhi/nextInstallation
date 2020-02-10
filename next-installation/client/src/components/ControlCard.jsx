import React from "react";
import { inject, observer } from "mobx-react";

import UIStore from "../store/UIStore";
import styled from "styled-components";

import enveloppe from "../assets/img/controlCardBg.png";

const ControlCard = ({ writeStore, uiStore }) => {
  const handleClickTheme = e => {
    writeStore.theme = e;
  };

  return (
    <EnveloppeBg>
      <div>
        <ControlTitle>
          Mag je kaartje
          <br /> in de enveloppe?
        </ControlTitle>
        <ControlText>
          Dit is de laatste controle en hierna kan je je kaartje niet meer
          wijzigen!
        </ControlText>
      </div>
    </EnveloppeBg>
  );
};

const EnveloppeBg = styled.div`
  background-image: url(${enveloppe});
  background-size: cover;
  width: 90rem;
  height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 0;
  bottom: 0;

  & div {
    position: relative;
    left: -5rem;
  }
`;

const ControlTitle = styled.h2`
  color: white;
  font-family: "Nunito";
  font-size: 3rem;
  font-weight: bold;
  line-height: 4rem;
  margin-bottom: 3rem;
`;

const ControlText = styled.p`
  color: white;
  font-family: "Nunito";
  font-size: 2rem;
  line-height: 3rem;
  font-weight: 600;
  max-width: 25rem;
`;

export default inject(`writeStore`, `uiStore`)(observer(ControlCard));
