import React from "react";
import useCategoryHook from "../src/hooks/categoryHook";
import useMenu from "../src/hooks/useMenu";
import "./App.css";
import Drawer from "./components/Drawer/Index";
import { Accordion } from "components-quizapp-lib";
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

const useDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return {
    isOpen,
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  };
};

function App() {
  const { isOpen, open, close } = useDrawer();
  //const { data, toggleCategory } = useCategoryHook();
  return (
    <div>
      <button onClick={() => open()}>Bottone</button>
      <Drawer useMenu={useMenu()} toggled={isOpen} close={close} open={open} />
    </div>
  );
}

export default App;
