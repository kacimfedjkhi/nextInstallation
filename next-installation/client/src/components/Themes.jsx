import React from "react";
import { inject, observer } from "mobx-react";

import Chip from "@material-ui/core/Chip";

const ThemesList = ({ writeStore }) => {
  const handleClick = e => {
    writeStore.theme = e;
  };

  const themes = [
    "Culinair",
    "Sport",
    "Kunst",
    "Toerisme",
    "Cultuur",
    "Business"
  ];

  return (
    <>
      {themes.map(theme => (
        <Chip
          key={theme}
          label={theme}
          variant="outlined"
          onClick={() => handleClick(theme)}
        />
      ))}
    </>
  );
};

export default inject(`writeStore`)(observer(ThemesList));
