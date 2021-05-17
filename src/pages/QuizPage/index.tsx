import React, { useState } from "react";
import "./index.css";

type LearnerQuiz = {
  quiId: "quiz1"; // id del quiz
  points: 3; // I punti che si guadagnano quando si fa un quiz
  goal: 3; // Il numero minimo di risposte corrette per considerare il quiz corretto
  result: [
    {
      idDomanda: "domanda1";
      answerIndex: 1;
      correct: true;
    }
  ];
  feedbacks: {
    wrong: "Hai sbagliato il quiz"; // String che appare in schermata feedback quiz se non superato
    correct: "Hai fatto bene il quiz"; // String che appare n schermata feedback quiz se superato
  };
  questions: [
    {
      id: "domanda1"; //
      index: 1;
      question: "Come si chiama il padre di Lisa?";
      default_feedback: {
        wrong: "Dovresti studiare i Simpson";
        correct: "bravo!";
      };
      answers: [
        {
          index: 1;
          text: "Homer";
          correct: true;
          feedback: null;
        },
        {
          index: 2;
          text: "Bart";
          correct: false;
          feedback: null;
        },
        {
          index: 3;
          text: "Lisa";
          correct: true;
          feedback: "Ma dai!";
        }
      ];
    },
    {
      id: "domanda2"; //
      index: 1;
      question: "Come si chiama il fratello di Lisa?";
      default_feedback: {
        wrong: "Dovresti studiare i Simpson";
        correct: "bravo!";
      };
      answers: [
        {
          index: 1;
          text: "Bart";
          correct: true;
          feedback: null;
        },
        {
          index: 2;
          text: "Homer";
          correct: false;
          feedback: null;
        }
      ];
    }
  ];
  quizResult: () => true;
  registerQuiz: (results: any) => true; // Registra le risposte ed attendi un feedback
};

const QuizPage = (quiz: LearnerQuiz) => {
  const [timer, setTimer] = useState("timer");
  const handleTimer = () => {
    setTimer("timer loaded");
  };
  return (
    <>
      <div className={timer}></div>
      <div className="questionContainer">
        <h4 className="questionTitle" onClick={handleTimer}>
          question title
        </h4>
      </div>

      <div className="option">this should be the quiz option</div>
    </>
  );
};
export default QuizPage;
