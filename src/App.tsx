import React from "react";

import "./App.css";
import Drawer from "./components/Drawer/Index";
import { Accordion } from "skilla-components-library/lib/index";
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

const useCategoryHook = () => {
  const [data, setData] = React.useState({
    cat1: {
      catId: "cat1",
      title: "Titolo1",
      description: "Descrizione 1",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
    cat2: {
      catId: "cat2",
      title: "Titolo2",
      description: "Descrizione 2",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
    cat3: {
      catId: "cat3",
      title: "Titolo3",
      description: "Descrizione 3",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
    cat4: {
      catId: "cat4",
      title: "Titolo4",
      description: "Descrizione 4",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
  });

  const toggleCategory = (catId: string) => {
    let newData: any = { ...data };
    newData[catId].selected = !newData[catId].selected;
    setData({ ...newData });
  };

  return { data: new Map(Object.entries(data)), toggleCategory };
};
// const useDrawer = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return {
//     isOpen,
//     open: () => setIsOpen(true),
//     close: () => setIsOpen(false),
//   };
// };

function App() {
  // const { isOpen, open, close } = useDrawer();
  const { data, toggleCategory } = useCategoryHook();
  return (
    <div>
      <Accordion data={data} toggleCategory={toggleCategory} />
    </div>
  );
}

export default App;
