import React, { lazy, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  listContainer: {
    width: 400,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "blue",
    color: "white",
  },
  list: {
    listStyleType: "none",
    cursor: "pointer",
    width: "",
  },
  listItem: {
    marginTop: "1.5rem",
    "&:hover": { backgroundColor: "#036ffc" },
  },
});

const SwipeableTemporaryDrawer: React.FC<{
  toggled: boolean;
  list: any;
}> = ({ toggled }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    left: toggled,
  });

  const toggleDrawer = (open: boolean) => (event: any) => {
    setState({ left: open });
  };

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      className={classes.listContainer}
    >
      <div>
        <h1>Skılla</h1>
        <div>
          <FontAwesomeIcon icon="user-alt" />
          <FontAwesomeIcon icon="ellipsis-h" />
          <FontAwesomeIcon icon="check-square" />
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer(true)}>left</Button>
        <SwipeableDrawer
          anchor="left"
          open={state["left"]}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default SwipeableTemporaryDrawer;
