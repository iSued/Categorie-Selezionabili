// Come funziona?

type MenuData = {
  drawer: {
    main: MenuItem[];
    bottom: MenuItem[];
  };
  footer?: MenuItem[];
};

// In pratica questo hook ti fornisce dei dati per generare il menu.Ci sono due menu, il drawer ed il footer.
// Il drawer contiene due parti separate, la parte main e la parte bottom. La parte main contiene gli
// elementi che verranno mostrati nel menu laterale nella parte alta (elementi più grandi) mentre la parte bottom
// quelli che andranno nella parte di menu allineata in basso (elementi più piccoli)

type MenuItem = {
  order: number; // L'ordine dell'elemento nella lista
  label: string; // Il testo da mostrare nel label
  to: string; // La destinazione del link o l'azione (CLOSE_DRAWER)
  icon?: string; // Icon da associare
  options?: MenuItemOptionGeneric | MenuItemOptionCategory; // Opzioni
  enabledGroups?: string[]; // I gruppi di utenti che visualizzano il menu
};

type MenuItemOptionGeneric = {
  [key: string]: any;
};

type MenuItemOptionCategory = {
  smartLibraryId?: string;
  categoryId?: string;
};

const FAKE_MENU: MenuData = {
  drawer: {
    main: [
      {
        order: 0,
        label: "HOME",
        to: "CLOSE_DRAWER",
        icon: "home",
        enabledGroups: ["gruppo1"],
      },
      {
        order: 1,
        label: "BOOKS",
        to: "CATEGORY",
        icon: "book",
        enabledGroups: ["gruppo1"],
        options: {
          smartLibraryId: "smartLibrary1",
          categoryId: "cat1",
        },
      },
    ],
    bottom: [
      {
        order: 0,
        label: "SETTINGS",
        to: "SETTINGS",
        icon: "gear",
        enabledGroups: ["gruppo1"],
      },
      {
        order: 1,
        label: "PROFILE",
        to: "PROFILE",
        icon: "account",
        enabledGroups: ["gruppo1"],
      },
      {
        order: 2,
        label: "ANALYTICS",
        to: "ANALYTICS",
        icon: "chart",
        enabledGroups: ["gruppo1"],
      },
      {
        order: 3,
        label: "ABOUT",
        to: "PAGE",
        icon: "chart",
        enabledGroups: ["gruppo1"],
      },
    ],
  },
};

const useMenu = () => {
  // useMenu restituisce un oggetto rappresentante il menu da renderizzare

  // 1. Recupero un oggetto learner
  // 4. Recupero il menu dall'oggetto theme
  // 5. Costruisco l'oggetto menu
  // 5. Passo l'oggetto menu

  return FAKE_MENU;
};

export default useMenu;
