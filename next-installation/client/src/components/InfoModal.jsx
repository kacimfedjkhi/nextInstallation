import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";

import styled from "styled-components";
import backgroundImg from "../assets/img/infoBg.png";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const InfoModal = ({ uiStore }) => {
  const classes = useStyles();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={uiStore.modal}
        onClose={uiStore.handleToggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={uiStore.modal}>
          <StyledModal>
            <Button onClick={uiStore.handleToggleModal}>X</Button>
            <Title
              txtColor={
                uiStore.selectedAction === "write" ? "#8089ce" : "#6ec8cd"
              }
              spanColor={
                uiStore.selectedAction === "write" ? "#4e5587" : "#4da0a4"
              }
              id="transition-modal-title"
            >
              De Eurometropool, <span>wat</span>?
            </Title>
            <TextContent
              txtColor={
                uiStore.selectedAction === "write" ? "#8089ce" : "#6ec8cd"
              }
              id="transition-modal-description"
            >
              De Eurometropool is een grensoverschrijdende samenwerking tussen
              de regio’s van{" "}
              <span>Kortrijk, Lille, Doornik en Valenciennes.</span> Deze
              samenwerking wordt ondersteund door <span>NEXT festival</span>,
              een jaarlijks kunstenfestival dat in elke regio plaatsvindt.
            </TextContent>
            <button onClick={uiStore.handleToggleModal}></button>
          </StyledModal>
        </Fade>
      </Modal>
    </>
  );
};

const StyledModal = styled.section`
  background-image: url(${backgroundImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 85rem;
  height: 42.5rem;
  padding: 5rem 0 0 8rem;

  outline: none;
`;

const Title = styled.h2`
  font-weight: bold;
  color: ${props => props.txtColor};
  font-size: 4rem;
  max-width: 90rem;
  padding: 2rem 0;

  && span {
    color: ${props => props.spanColor};
  }
`;

const TextContent = styled.p`
  font-weight: 600;
  color: ${props => props.txtColor};
  font-size: 2rem;
  line-height: 2.3rem;
  padding: 0rem 0 4rem 0;
  max-width: 46rem;

  && span {
    font-weight: bold;
  }
`;

export default inject(`uiStore`)(observer(InfoModal));
