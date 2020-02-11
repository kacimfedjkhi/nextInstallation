import React, { useRef, useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const Div = styled.div`
  width: 50%;
  position: absolute;
  bottom: 2rem;
  margin: 0 auto;
  z-index: 1000;
`;

const KeyboardInput = props => {
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = input => {
    props.store.message = input;

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
