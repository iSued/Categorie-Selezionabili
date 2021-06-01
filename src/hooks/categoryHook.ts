import React from "react";
const useCategoryHook = () => {
  const [data, setData] = React.useState({
    cat1: {
      catId: "cat1",
      title: "Titolo1",
      description: "Descrizione 1",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
    cat2: {
      catId: "cat2",
      title: "Titolo2",
      description: "Descrizione 2",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
    },
    cat3: {
      catId: "cat3",
      title: "Titolo3",
      description: "Descrizione 3",
      selected: false,
      mandatory: false,
      selectable: false,
      completed: true,
      assigned: false,
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

  const toggleCategory = (catId: string) => {
    let newData: any = { ...data };
    newData[catId].selected = !newData[catId].selected;
    setData({ ...newData });
  };

  return { data: new Map(Object.entries(data)), toggleCategory };
};
export default useCategoryHook;
