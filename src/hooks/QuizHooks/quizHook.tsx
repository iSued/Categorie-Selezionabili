import { useMemo, useState } from "react";

type QuizData = {
  quiId: string; // id del quiz
  points: number; // I punti che si guadagnano quando si fa un quiz
  goal: number; // Il numero minimo di risposte corrette per considerare il quiz corretto
  result: {
    questionId: string;
    answerIndex: number | null;
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

const useQuiz = (quizData: QuizData) => {
  const [quizState, setQuizState] = useState(quizData);

  const isCompleted = useMemo(() => {
    // Se non sono presenti risultati restituisco null.
    if (!quizState.result || quizState.result.length === 0) {
      return null;
    }

    const totalScore = quizState.result.reduce(
      (accumulator, current) => accumulator + Number(current.correct),
      0
    );
    const goal = quizState.goal;

    // Se il totalscore è maggiore od uguale al goal registro i risultati
    return totalScore >= goal;
  }, [quizState]);

  const registerResults = (
    results: {
      questionId: string;
      answerIndex: number | null;
      correct: boolean;
    }[] = []
  ) => {
    // registra su DB
    console.log(results);
    setQuizState({ ...quizState, result: results });
  };

  return {
    quizState,
    isCompleted,
    registerResults,
  };
};

export default useQuiz;
