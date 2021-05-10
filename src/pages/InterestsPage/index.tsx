import React, { useState } from "react";
import "./index.css";
import Accordion from "../../components/Accordion/index";
import { title } from "process";

const InterestsPage = () => {
  const [isError, setIsError] = useState(true);
  const [selected, setSelected] = useState("Office 365");

  const handleSelect = () => {};
  const selectedKey = 2;
  const data = [
    { title: "Office 365" },
    { title: "digital for leader" },
    { title: "digital learning" },
    { title: "Tecnologie digitali" },
    { title: "Scenario e consapevolezza digitale" },
    { title: "MongoDB" },
    { title: "GraphQL" },
    { title: "Redux" },
  ];

  return (
    <>
      <div className="mainContainer">
        {isError ? (
          <div className="errorContainer">
            <p>{data[selectedKey].title}</p>
            <p>
              Seleziona massimo <strong>4 aree</strong> di interesse
            </p>
            <p>Potrai modificare le tue scelte di settimana in settimana</p>
          </div>
        ) : null}
        <div className="headerContainer">
          <h4 className="sectionTitle">
            Quale credi che sia il tuo livello di cultura digitale?
          </h4>
        </div>

        <div className="list">
          {data.map((item, index) => {
            let selected;

            return <Accordion title={item.title} key={index} />;
          })}
        </div>
        <div className="button">
          <button>avanti</button>
        </div>
      </div>
    </>
  );
};
export default InterestsPage;
