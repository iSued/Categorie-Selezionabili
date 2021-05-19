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
  faHome,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faFont,
  faBook,
  faBookmark,
  faUserAlt,
  faChartPie,
  faEllipsisH,
  faInfoCircle,
  faHome
);

function App() {
  return (
    <div>
      <Drawer toggled={true} />
    </div>
  );
}

export default App;
