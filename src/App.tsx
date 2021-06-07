import React from "react";
import useCategoryHook from "./hooks/AccordionHooks/categoryHook";
import useMenu from "./hooks/DrawerHooks/useMenu";
import useDrawer from "./hooks/DrawerHooks/useDrawer";
import quizHook from "./hooks/QuizHooks/quizHook";
import fakeData from "./hooks/QuizHooks/fakeData";
import "./App.css";
import { Accordion, Drawer, Quiz } from "components-quizapp-lib";
import Home from "./components/HomeCourses/index";
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
type CourseCard = {
  title: string;
  author: string;
  thumbnail: string;
  isLiked: boolean;
  isRead: boolean;
  isBookmarked: boolean;
  timeToRead: number;
  categories: string[];
  toggleLike: () => boolean;
  toggleBookmarked: () => boolean;
};
const fakedata: CourseCard = {
  title: "Che cos'è sharepoint online?",
  author: "OFFICE 365",
  thumbnail: "https://via.placeholder.com/468x60",
  isLiked: true,
  isRead: false,
  isBookmarked: true,
  timeToRead: 2,
  categories: [
    "TUTTI",
    "DIGITAL FOR LEADER",
    "OFFICE 365",
    "TECNOLOGIE DIGITALI",
  ],
  toggleLike: () => {
    return true;
  },
  toggleBookmarked: () => {
    return false;
  },
};
function App() {
  //const { isOpen, open, close } = useDrawer();
  //const { data, toggleCategory } = useCategoryHook();
  return (
    <div>
      {/* <Drawer useMenu={useMenu()} toggled={isOpen} close={close} open={open} /> */}
      <Home card={fakedata} />
    </div>
  );
}

export default App;
