import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenu from "./useMenu";

const useStyles = makeStyles({
  listContainer: {
    width: 400,
    height: "100%",
    backgroundColor: "blue",
    color: "white",
  },
  main: {},
  bottom: {},
  option: {},
  icon: {},
  menuItemTitle: { marginLeft: "1.5rem" },
  menuItem: {},
});

const SwipeableTemporaryDrawer: React.FC<{
  toggled: boolean;
  list: any;
}> = ({ toggled }) => {
  const [menu] = useState({ ...useMenu() });
  const classes = useStyles();
  const [state, setState] = useState({
    left: toggled,
  });
  console.log("this is the menu", menu.drawer.main);
  const toggleDrawer = (open: boolean) => (event: any) => {
    setState({ left: open });
  };

  const list = () => {
    return (
      <div
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
        className={classes.listContainer}
      >
        <div className={classes.main}>
          {menu.drawer.main.map((el) => {
            return (
              <div className={classes.menuItem}>
                <span className={classes.icon}>
                  <FontAwesomeIcon icon={"" + el.icon} />
                </span>
                <span className={classes.menuItemTitle}>{el.label}</span>
              </div>
            );
          })}
        </div>
        <div className={classes.bottom}>
          <div className={classes.menuItem}>
            <span className={classes.icon}>icon</span>
            <span className={classes.menuItemTitle}>title</span>
          </div>
        </div>
      </div>
    );
  };
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
