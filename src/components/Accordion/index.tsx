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
  onOpen
}) => {

    return (
      <>
        <div className="accordion">
          <div className="accordionHeader">
            <div className="accordionTitle">
              <CustomRadio onSelect={()=> { onSelect(id) }} isSelected={selected} />
              <span>{title}</span>
            </div>
            <span style={{ rotate: isOpen ? "rotateZ(0)" : "rotateZ(180)"}} onClick={()=> { onOpen(id)}}>&#x2193;</span>
          </div>
          <div className="panel"  style={{ display: isOpen ? "block" : "none"}}>
            <p>{description}</p>
          </div>
        </div>
      </>
    );
  };


  const CustomRadio = (props:any) => {
    return <div className="customRadio" onClick={ props.onSelect }>
      <div
        className="checkedRadio"
        style={{ backgroundColor: props.isSelected ? "white" : "blue"}}
      ></div>
    </div>
  }

export default Accordion;
