import React from "react";
import { inject, observer } from "mobx-react";

import Chip from "@material-ui/core/Chip";

const MessageInput = ({ writeStore }) => {
  const handleClick = msg => {
    writeStore.message = msg;
  };

  const messages = [
    "Wat is daar een typisch regionaal product?",
    "Wat is uw favoriete gerecht?",
    "Wat is het beste restaurantje daar?"
  ];
  return (
    <>
      {messages.map(message => (
        <Chip
          key={message}
          label={message}
          variant="outlined"
          onClick={() => handleClick(message)}
        />
      ))}
    </>
  );
};

export default inject(`writeStore`)(observer(MessageInput));
