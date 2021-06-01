import React from "react";
import useCategoryHook from "./hooks/AccordionHooks/categoryHook";
import useMenu from "./hooks/DrawerHooks/useMenu";
import useDrawer from "./hooks/DrawerHooks/useDrawer";
import quizHook from "./hooks/QuizHooks/quizHook";
import fakeData from "./hooks/QuizHooks/fakeData";
import "./App.css";
import { Accordion, Drawer, Quiz } from "components-quizapp-lib";

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
  const { isOpen, open, close } = useDrawer();
  //const { data, toggleCategory } = useCategoryHook();
  return (
    <div>
      {/* <Drawer useMenu={useMenu()} toggled={isOpen} close={close} open={open} /> */}
      <Quiz Data={fakeData} useQuiz={quizHook} />
    </div>
  );
}

export default App;
