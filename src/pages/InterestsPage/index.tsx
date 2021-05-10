import React, { useState } from "react";
import "./index.css";
import Accordion from "../../components/Accordion/index";
import { title } from "process";

const InterestsPage = () => {
  const [isError, setIsError] = useState(true);
  const [selected, setSelected] = useState("Office 365");

  //const { data, toggleCategory, error } = useCategorySelector()

  const [openAccordionId, setOpenAccordionId] = React.useState(null)

  const handleSelect = () => { };

  const data = new Map(Object.entries({
    cat1: {
      catId: "cat1",
      title: "Titolo1",
      description: "Descrizione 1",
      selected: true,
      mandatory: true,
      selectable: true,
      completed: true,
      assigned: true
    },
    cat2: {
      catId: "cat2",
      title: "Titolo2",
      description: "Descrizione 2",
      selected: true,
      mandatory: true,
      selectable: true,
      completed: true,
      assigned: true
    },
    cat3: {
      catId: "cat3",
      title: "Titolo3",
      description: "Descrizione 3",
      selected: true,
      mandatory: true,
      selectable: true,
      completed: true,
      assigned: true
    },
    cat4: {
      catId: "cat4",
      title: "Titolo4",
      description: "Descrizione 4",
      selected: false,
      mandatory: true,
      selectable: true,
      completed: true,
      assigned: true
    }
  }))

const learningCategories = Object.keys(data)

const toggleCategory: (catId: string) => void = (catId: string) => {

}

/*

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

*/

return (
  <>
    <div className="mainContainer">
      {isError ? (
        <div className="errorContainer">
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
        {learningCategories.map((data_key: string, index) => {
          return <Accordion key={data_key} isOpen={data_key === openAccordionId ? true : false} isSelected={data.get(data_key)!.selected} title={data.get(data_key)!.title} />;
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
