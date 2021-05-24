type QuizData = {
  quiId: string; // id del quiz
  points: number; // I punti che si guadagnano quando si fa un quiz
  goal: number; // Il numero minimo di risposte corrette per considerare il quiz corretto
  result: {
    idDomanda: string;
    answerIndex: number;
    correct: boolean;
  }[];
  showFeedbacks: boolean;
  feedbacks: {
    wrong: string; // String che appare in schermata feedback quiz se non superato
    correct: string; // String che appare n schermata feedback quiz se superato
  };
  questions: {
    id: string; //
    index: number;
    question: string;
    timeAmount: number;
    default_feedback: {
      wrong: string;
      correct: string;
    };
    answers: {
      index: number;
      text: string;
      correct: boolean;
      feedback?: string;
    }[];
  }[];
};

const fakeData: QuizData = {
  quiId: "quiz1", // id del quiz
  points: 3, // I punti che si guadagnano quando si fa un quiz
  goal: 1, // Il numero minimo di risposte corrette per considerare il quiz corretto
  result: [],
  showFeedbacks: true,
  feedbacks: {
    wrong: "Hai sbagliato il quiz", // String che appare in schermata ? quiz se non superato
    correct: "Hai fatto bene il quiz", // String che appare n schermata ? quiz se superato
  },
  questions: [
    {
      id: "domanda1", //
      index: 1,
      question: "Come si chiama il padre di Lisa?",
      timeAmount: 10,
      default_feedback: {
        wrong: "Dovresti studiare i Simpson",
        correct: "bravo!",
      },
      answers: [
        {
          index: 1,
          text: "Homer",
          correct: true,
        },
        {
          index: 2,
          text: "Bart",
          correct: false,
        },
        {
          index: 3,
          text: "Lisa",
          correct: false,
          feedback: "Ma dai!",
        },
      ],
    },
    {
      id: "domanda2", //
      index: 1,
      question: "Come si chiama il fratello di Lisa?",
      timeAmount: 2,
      default_feedback: {
        wrong: "Dovresti studiare i Simpson",
        correct: "bravo!",
      },
      answers: [
        {
          index: 1,
          text: "Bart",
          correct: true,
        },
        {
          index: 2,
          text: "Homer",
          correct: false,
        },
      ],
    },
  ],
};

export default fakeData;
