import React from "react";
import "./index.css";
import {
  faStopwatch,
  faEye,
  faThumbsUp,
  faBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const HomeCourses: React.FC<{
  card: CourseCard;
}> = ({ card }) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number>(0);
  return (
    <>
      <div className="menu">
        {card.categories.map((cat, index) => {
          return (
            <div
              className={
                index === selectedIndex ? "menuItem selected" : "menuItem"
              }
              onClick={() => setSelectedIndex(index)}
            >
              <span>{cat}</span>
            </div>
          );
        })}
      </div>

      <div className="courseCard">
        <div className="cardImageContainer">
          <img
            className="cardImage"
            src={card.thumbnail}
            alt="card thumbnail"
          />
        </div>
        <div className="cardColorBar"></div>
        <div className="cardHeader">
          <div className="cardHeaderCategory">{card.author}</div>
          <div className="cardHeaderTime">
            <span>
              <FontAwesomeIcon icon={faStopwatch} />
            </span>
            <span className="courseTime">{card.timeToRead} min</span>
          </div>
        </div>
        <div className="cardTitle">{card.title}</div>
        <div className="cardActions">
          <div>
            <FontAwesomeIcon
              icon={faEye}
              style={{ color: card.isRead ? "blue" : "#e0e0e0" }}
            />
          </div>
          <div>
            <span className="likeCourse" onClick={card.toggleLike}>
              <FontAwesomeIcon
                icon={faThumbsUp}
                style={{ color: card.isLiked ? "blue" : "#e0e0e0" }}
              />
            </span>
            <span
              className="saveCourse"
              style={{ color: card.isBookmarked ? "blue" : "#e0e0e0" }}
              onClick={card.toggleBookmarked}
            >
              <FontAwesomeIcon icon={faBookmark} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeCourses;
