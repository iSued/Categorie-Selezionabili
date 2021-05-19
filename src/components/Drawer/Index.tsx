import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMenu from "./useMenu";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const useStyles = makeStyles({
  listContainer: {
    width: 400,
    height: "100%",
    backgroundColor: "blue",
    color: "white",
  },
  menuContainer: {
    height: "80%",
    width: "80%",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  main: { display: "flex", flexFlow: "column wrap" },
  bottom: { display: "flex", flexFlow: "column wrap" },
  footer: {},
  icon: {},
  menuItemTitle: { marginLeft: "1.5rem" },
  menuItem: { cursor: "pointer" },
  title: {},
});

const SwipeableTemporaryDrawer: React.FC<{
  toggled: boolean;
}> = ({ toggled }) => {
  const [menu] = useState({ ...useMenu() });
  const classes = useStyles();
  const [state, setState] = useState({
    left: toggled,
  });

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
        <div className={classes.menuContainer}>
          <div className={classes.title}>
            <h1>Title</h1>
          </div>
          <div className={classes.main}>
            {menu.drawer.main.map((el) => {
              return (
                <div
                  className={classes.menuItem}
                  style={{ order: el.order }}
                  onClick={() => console.log(el.label)}
                >
                  <span className={classes.icon}>
                    <FontAwesomeIcon icon={el.icon as IconProp} />
                  </span>
                  <span className={classes.menuItemTitle}>{el.label}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.bottom}>
            {menu.drawer.bottom.map((el) => {
              return (
                <div
                  className={classes.menuItem}
                  style={{ order: el.order }}
                  onClick={() => console.log(el.label)}
                >
                  <span className={classes.icon}>
                    <FontAwesomeIcon icon={el.icon as IconProp} />
                  </span>
                  <span className={classes.menuItemTitle}>{el.label}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.footer}>
            {menu.footer ? <div>footer</div> : null}
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
