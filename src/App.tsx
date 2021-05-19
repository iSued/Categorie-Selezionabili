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

  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div>
      <Drawer toggled={false} />
      <button onClick={() => setIsOpen(!isOpen)}>Open</button>
    </div>
  );
}

export default App;
