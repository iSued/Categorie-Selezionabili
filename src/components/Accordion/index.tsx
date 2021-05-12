import React, { useState } from "react";
import "./index.css";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Accordion: React.FC<{
  id: string;
  isOpen: boolean;
  title: string;
  description: string;
  selected: boolean;
  mandatory: boolean;
  selectable: boolean;
  completed: boolean;
  assigned: boolean;
  onSelect: any;
  onOpen: any;
}> = ({
  id,
  isOpen,
  title,
  description,
  selected,
  mandatory,
  selectable,
  completed,
  assigned,
  onSelect,
  onOpen,
}) => {
  return (
    <>
      <div className="accordion">
        <div className="accordionHeader">
          <div className="accordionTitle">
            <CustomRadio
              onSelect={() => {
                onSelect(id);
              }}
              isSelected={selected}
            />
            <span>{title}</span>
          </div>
          <span
            className={isOpen ? "basicArrow rotated" : "basicArrow"}
            onClick={() => {
              onOpen(id)
            }}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </span>
        </div>
        <div className={ isOpen ? "panel open" : "panel"}>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

const CustomRadio = (props: any) => {
  return (
    <div className="customRadio" onClick={props.onSelect}>
      <span
        className="checkedRadio"
        style={{
          backgroundColor: props.isSelected ? "white" : "blue",
        }}
      ></span>
    </div>
  );
};

export default Accordion;
