import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styled, { keyframes } from "styled-components";
import { inject, observer } from "mobx-react";

const slideUp = keyframes`
  from {
    transform: translate-y(-100px);
  }

  to {
    transform: translate-y(20px);
  }
`;

const Div = styled.div`
  width: 50%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  animation: ${slideUp} 2s linear;
`;

const KeyboardInput = ({ writeStore }) => {
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    writeStore.message = input;

    console.log("Input changed", input);
  };

  const handleShift = () => {
    let newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = button => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  return (
    <Div>
      <Keyboard
        keyboardRef={r => (keyboard.current = r)}
        layoutName={layout}
        onChange={input => onChange(input)}
        onKeyPress={button => onKeyPress(button)}
      />
    </Div>
  );
};

export default inject(`writeStore`)(observer(KeyboardInput));
