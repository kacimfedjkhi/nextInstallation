import React from "react";
import { inject, observer } from "mobx-react";
import Keyboard from "./KeyboardInput";

import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

const MessageInput = ({ writeStore }) => {
  const handleClick = msg => {
    writeStore.message = msg;
  };

  const messages = [
    "Wat is daar een typisch regionaal product?",
    "Wat is uw favoriete gerecht?",
    "Wat is het beste restaurantje daar?"
  ];

  let input = writeStore.inputMethod;

  return (
    <>
      <Button
        variant={input === "templates" ? "contained" : "outlined"}
        onClick={() => writeStore.handleChangeInput("templates")}
      >
        sjablonen
      </Button>
      <Button
        variant={input === "keyboard" ? "contained" : "outlined"}
        onClick={() => writeStore.handleChangeInput("keyboard")}
      >
        eigen boodschap
      </Button>

      <br />
      {input === "templates"
        ? messages.map(message => (
            <Chip
              key={message}
              label={message}
              variant="outlined"
              onClick={() => handleClick(message)}
            />
          ))
        : null}
      {/* {messages.map(message => (
        <Chip
          key={message}
          label={message}
          variant="outlined"
          onClick={() => handleClick(message)}
        />
      ))} */}
      {input === "keyboard" ? <Keyboard store={writeStore} /> : null}
    </>
  );
};

export default inject(`writeStore`)(observer(MessageInput));
