import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const useStyles = makeStyles({
  listContainer: {
    width: 400,
    height: "100%",
    backgroundColor: "blue",
    color: "white",
  },
  arrowContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "end",
    padding: "1rem",
  },
  arrow: {
    fontSize: "1.5rem",
    cursor: "pointer",
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

type MenuData = {
  drawer: {
    main: MenuItem[];
    bottom: MenuItem[];
  };
  footer?: MenuItem[];
};

type MenuItem = {
  order: number;
  label: string;
  to: string;
  icon?: string;
  options?: MenuItemOptionGeneric | MenuItemOptionCategory;
  enabledGroups?: string[];
};

type MenuItemOptionGeneric = {
  key: string[];
};

type MenuItemOptionCategory = {
  smartLibraryId?: string;
  categoryId?: string;
};
const SwipeableDrawer: React.FC<{
  useMenu: MenuData;
  toggled: boolean;
  open: () => void;
  close: () => void;
}> = ({ toggled, open, close, useMenu }) => {
  const menu = useMenu;

  const classes = useStyles();

  const list = () => {
    return (
      <div role="presentation" className={classes.listContainer}>
        <div className={classes.arrowContainer}>
          <FontAwesomeIcon
            icon="arrow-left"
            className={classes.arrow}
            onClick={() => {
              close();
            }}
          />
        </div>
        <div className={classes.menuContainer}>
          <div className={classes.title}>
            <h1>Title</h1>
          </div>
          <div className={classes.main}>
            {menu.drawer.main.map((el: MenuItem) => {
              return (
                <div
                  className={classes.menuItem}
                  style={{ order: el.order }}
                  onClick={() => {
                    console.log(el.label);
                    close();
                  }}
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
            {menu.drawer.bottom.map((el: MenuItem) => {
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
        <Drawer
          variant="persistent"
          anchor="left"
          open={toggled}
          onClose={() => {
            close();
          }}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default SwipeableDrawer;
