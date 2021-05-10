import React, { useState, useEffect } from "react";
import "./index.css";
import Accordion from "../../components/Accordion/index";
import { title } from "process";

const InterestsPage = () => {
  const [isError, setIsError] = useState(true);

  //const { data, toggleCategory, error } = useCategorySelector() ++THE CUSTOM HOOK I'LL USE++

  const [openAccordionId, setOpenAccordionId] = React.useState(null);

  useEffect(() => {
    console.log(learningCategories);
  });

  const data = new Map(
    Object.entries({
      cat1: {
        catId: "cat1",
        title: "Titolo1",
        description: "Descrizione 1",
        selected: true,
        mandatory: false,
        selectable: true,
        completed: true,
        assigned: true,
      },
      cat2: {
        catId: "cat2",
        title: "Titolo2",
        description: "Descrizione 2",
        selected: true,
        mandatory: false,
        selectable: true,
        completed: true,
        assigned: true,
      },
      cat3: {
        catId: "cat3",
        title: "Titolo3",
        description: "Descrizione 3",
        selected: true,
        mandatory: false,
        selectable: true,
        completed: true,
        assigned: true,
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
    })
  );

  const toggleCategory: (catId: string) => void = (catId: string) => {};

  const categoriesIterator = data.keys();
  const learningCategories: string[] = [];
  data.forEach(() => {
    learningCategories.push(categoriesIterator.next().value);
  });

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
            return (
              <Accordion
                key={data_key}
                isOpen={data_key === openAccordionId ? true : false}
                title={data.get(data_key)!.title}
                description={data.get(data_key)!.description}
                selected={data.get(data_key)!.selected}
                mandatory={data.get(data_key)!.mandatory}
                selectable={data.get(data_key)!.selectable}
                completed={data.get(data_key)!.completed}
                assigned={data.get(data_key)!.assigned}
              />
            );
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
