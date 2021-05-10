import React, { useState } from "react";
import "./index.css";

const Accordion: React.FC<{
  key: string;
  isOpen: boolean;
  title: string;
  description: string;
  selected: boolean;
  mandatory: boolean;
  selectable: boolean;
  completed: boolean;
  assigned: boolean;
}> = ({
  key,
  isOpen,
  title,
  description,
  selected,
  mandatory,
  selectable,
  completed,
  assigned,
}) => {
  const [isActiveStyle, setIsActiveStyle] = useState("none");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedColor, setIsCheckedColor] = useState("white");

  const handleConditionalRendering = () => {
    if (selectable) {
      return (
        <div className="accordionTitle">
          <div className="customRadio" onClick={handleRadio}>
            <div
              className="checkedRadio"
              style={{ backgroundColor: isCheckedColor }}
            ></div>
          </div>
          <span>{title}</span>
        </div>
      );
    } else if (selected) {
      setIsCheckedColor("blue");
      return (
        <div className="accordionTitle">
          <div className="customRadio" onClick={handleRadio}>
            <div
              className="checkedRadio"
              style={{ backgroundColor: isCheckedColor }}
            ></div>
          </div>
          <span>{title}</span>
        </div>
      );
    } else if (mandatory) {
      return (
        <div className="accordionTitle">
          <div className="customRadio" onClick={handleRadio}>
            <div
              className="checkedRadio"
              style={{ backgroundColor: "blue" }}
            ></div>
          </div>
          <span>{title}</span>
          <span>mandatory</span>
        </div>
      );
    } else if (completed) {
      return (
        <div className="accordionTitle">
          <div className="customRadio" onClick={handleRadio}>
            <div
              className="checkedRadio"
              style={{ backgroundColor: isCheckedColor }}
            ></div>
          </div>
          <span>{title}</span>
          <span>completed</span>
        </div>
      );
    } else if (assigned) {
      return (
        <div className="accordionTitle">
          <div className="customRadio" onClick={handleRadio}>
            <div
              className="checkedRadio"
              style={{ backgroundColor: isCheckedColor }}
            ></div>
          </div>
          <span>{title}</span>
          <span>assigned</span>
        </div>
      );
    }
  };

  const handleAccordion = () => {
    if (isActiveStyle === "none") {
      setIsActiveStyle("block");
    } else {
      setIsActiveStyle("none");
    }
  };

  const handleRadio = () => {
    if (isCheckedColor === "white") {
      setIsCheckedColor("blue");
      setIsActiveStyle("none");
    } else {
      setIsCheckedColor("white");
    }
  };

  return (
    <>
      <div className="accordion">
        <div className="accordionHeader">
          {handleConditionalRendering()}
          <span onClick={handleAccordion}>&#x2193;</span>
        </div>
        <div className="panel" style={{ display: isActiveStyle }}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};
export default Accordion;
