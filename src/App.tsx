import React from "react";

import "./App.css";
import Drawer from "./components/Drawer/Index";
import Accordion from "./pages/InterestsPage/index";
import Quiz from "./pages/QuizPage/index";
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
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faArrowLeft,
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
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        bottone
      </button>
      <Drawer toggled={isOpen} open={() =>{ setIsOpen(true)}} close={() =>{ setIsOpen(false)}} />
    </div>
  );
}

export default App;
