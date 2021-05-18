import React from "react";

import "./App.css";
import Drawer from "./components/Drawer/Index";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFont,
  faBook,
  faBookmark,
  faUserAlt,
  faChartPie,
  faEllipsisH,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFont,
  faBook,
  faBookmark,
  faUserAlt,
  faChartPie,
  faEllipsisH,
  faInfoCircle
);

const list = [
  ["font", "glossario"],
  ["book", "libri"],
  ["bookmark", "preferiti"],
  ["user-alt", "profilo"],
  ["chart-pie", "i miei progressi"],
  ["ellipsis-h", "impostazioni"],
  ["infoCircle", "about"],
];

function App() {
  return (
    <div>
      <Drawer toggled={true} list={list} />
    </div>
  );
}

export default App;
