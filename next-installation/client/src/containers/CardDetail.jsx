import React from "react";
// import { Link } from "react-router-dom";
// import { ROUTES } from "../constants";
// import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";

const CardDetail = ({ uiStore }) => {
  return (
    <>
      <h1>Detailpaginaaa</h1>
    </>
  );
};

export default inject(`uiStore`)(observer(CardDetail));
