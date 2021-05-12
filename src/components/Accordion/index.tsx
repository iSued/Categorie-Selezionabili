import React, { useState } from "react";
import "./index.css";

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
  const [panel, setPanel] = useState("toggledPanel");
  const [arrow, setArrow] = useState("basicArrow");
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
            className=""
            onClick={() => {
              panel === "toggledPanel"
                ? setPanel("openedPanel")
                : setPanel("toggledPanel");
            }}
          >
            &#x2193;
          </span>
        </div>
      </div>
      <div className={panel}>
        <p>{description}</p>
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
