import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import { inject, observer } from "mobx-react";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 5,
    outline: "none",
    maxWidth: "60%"
  }
}));

const InfoModal = ({ uiStore }) => {
  const classes = useStyles();

  return (
    <div>
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
          <div className={classes.paper}>
            <Button onClick={uiStore.handleToggleModal}>X</Button>
            <h2 id="transition-modal-title">De Eurometropool</h2>
            <p id="transition-modal-description">
              De Eurometropool is een grensoverschrijdende samenwerking tussen
              de regio’s van Kortrijk, Lille, Doornik en Valenciennes. Deze
              samenwerking wordt ondersteund door NEXT, een jaarlijks
              kunstenfestival dat in elke regio plaatsvindt.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default inject(`uiStore`)(observer(InfoModal));
