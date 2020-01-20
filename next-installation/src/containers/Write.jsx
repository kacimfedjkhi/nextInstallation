import React from "react";
import { inject, observer, PropTypes } from "mobx-react";

// import { Link } from "react-router-dom";
// import { ROUTES } from "../constants";
// import Button from "@material-ui/core/Button";
import Steps from "../components/Steps";
import BottomButtons from "../components/BottomButtons";
import Card from "../components/Card";
import ThemesList from "../components/Themes";
import MessageInput from "../components/MessageInput";

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
    <>
      <h1>Een kaartje schrijven</h1>
      <Steps />
      <h2>{writeStore.getStepTitle(activeStep)}</h2>
      {renderInput(activeStep)}
      <Card />
      <BottomButtons />
    </>
  );
};

Write.propTypes = {
  writeStore: PropTypes.observableObject.isRequired
};

export default inject(`writeStore`)(observer(Write));
