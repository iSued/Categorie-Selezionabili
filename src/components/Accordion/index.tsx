import React, { useState } from "react";
import "./index.css";

const Accordion: React.FC<{
  title: string;
  key: string;
  isOpen: boolean;
  isSelected: boolean;
}> = ({ title, key, isOpen, isSelected }) => {
  const [isActive, setIsActive] = useState("none");
  const [isChecked, setIsChecked] = useState(false);
  const [isCheckedColor, setIsCheckedColor] = useState("white");

  const handleAccordion = () => {
    if (isActive === "none") {
      setIsActive("block");
    } else {
      setIsActive("none");
    }
  };

  const handleRadio = () => {
    if (isCheckedColor === "white") {
      setIsCheckedColor("blue");
      setIsActive("none");
    } else {
      setIsCheckedColor("white");
    }
  };

  return (
    <>
      <div className="accordion">
        <div className="accordionHeader">
          <div className="accordionTitle">
            <div className="customRadio" onClick={handleRadio}>
              <div
                className="checkedRadio"
                style={{ backgroundColor: isCheckedColor }}
              ></div>
            </div>
            <span>{title}</span>
          </div>
          <span onClick={handleAccordion}>&#x2193;</span>
        </div>
        <div className="panel" style={{ display: isActive }}>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
            necessitatibus officia sunt. Cumque dolorum at dolor est dolorem
            laboriosam, quae fuga nisi temporibus nemo neque quo aliquam!
            Assumenda, mollitia voluptatibus.
          </p>
        </div>
      </div>
    </>
  );
};
export default Accordion;
