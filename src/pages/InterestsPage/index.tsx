import React, { useState } from "react";
import "./index.css";
import Accordion from "../../components/Accordion/index";

const useCategoryHook = () => {
  const [data, setData] = useState({
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
  });

  const toggleCategory = (catId: any) => {
    var newData: any = { ...data };
    newData[catId].selected = !newData[catId].selected;
    setData({ ...newData });
  };

  return { data: new Map(Object.entries(data)), toggleCategory };
};

const InterestsPage = () => {
  const { data, toggleCategory } = useCategoryHook();

  // data
  // error
  // toggleCategory(idCategoria) => void

  const [isError, setIsError] = useState(true);
  const [openAccordionId, setOpenAccordionId] = React.useState<any>(null);

  return (
    <>
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
        {[...data].map((element) => {
          return (
            <Accordion
              id={element[0]}
              isOpen={element[0] === openAccordionId ? true : false}
              title={element[1].title}
              description={element[1].description}
              selected={element[1].selected}
              mandatory={element[1].mandatory}
              selectable={element[1].selectable}
              completed={element[1].completed}
              assigned={element[1].assigned}
              onOpen={(id: string) => {
                if (id == openAccordionId) {
                  setOpenAccordionId(null);
                } else {
                  setOpenAccordionId(id);
                }
              }}
              onSelect={toggleCategory}
            />
          );
        })}
      </div>
      <div className="button">
        <button>avanti</button>
      </div>
    </>
  );
};

export default InterestsPage;
