import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";
import Button from "@material-ui/core/Button";

const Home = () => {
  return (
    <>
      <h1>Schrijf of open een kaartje</h1>
      <Link to={ROUTES.write}>
        <Button variant="contained">Schrijf een kaartje</Button>
      </Link>
      <Link to={ROUTES.open}>
        <Button variant="contained">Open een kaartje</Button>
      </Link>
    </>
  );
};

export default Home;
