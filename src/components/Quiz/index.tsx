import React, { useState, useRef } from "react";
import "./index.css";
import Feedback from "./FeedBack/index";

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
    wrong: string;
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

const QuizPage: React.FC<{
  Data: QuizData;
  useQuiz: (quizData: QuizData) => {
    quizState: QuizData;
    isCompleted: boolean | null;
    registerResults: (
      results?: {
        questionId: string;
        answerIndex: number | null;
        correct: boolean;
      }[]
    ) => void;
  };
}> = ({ Data, useQuiz }) => {
  const { quizState, registerResults, isCompleted } = useQuiz(Data);
  const [timer, setTimer] = useState({
    class: "timer",
    time: 0,
  });
  const [actualQuestion, setActualQuestion] = useState(0);
  const [defaultFeedback, setDefaultFeedback] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");

  type Result = {
    questionId: string;
    answerIndex: number | null;
    correct: boolean;
  };
  const resultsArray: Result[] = [];
  const results = useRef(resultsArray);

  const handleTimer = (timer: boolean, time: number) => {
    if (timer) {
      setTimer({
        class: "timer loaded",
        time: time,
      });
    } else {
      setTimer({
        class: "timer ",
        time: 0,
      });
    }
  };

  const handleQuizRender = () => {
    if (quizState.questions.length) {
      return (
        <>
          <div
            className={timer.class}
            style={{
              transition:
                timer.class === "timer loaded"
                  ? ` ${timer.time}s all ease-out`
                  : ` 0.2s all ease-out`,
            }}
          ></div>
          <div className="questionContainer">
            <h4 className="questionTitle">
              {quizState.questions[actualQuestion].question}
            </h4>
            {}
          </div>
          {customFeedback.length ? (
            <div>
              <h1>{customFeedback}</h1>
            </div>
          ) : defaultFeedback.length ? (
            <div>
              <h1>{defaultFeedback}</h1>
            </div>
          ) : (
            quizState.questions[actualQuestion].answers.map(
              (el: {
                index: number;
                text: string;
                correct: boolean;
                feedback?: string;
              }) => {
                return (
                  <div
                    className="option"
                    onClick={() => {
                      handleTimer(false, 0);

                      results.current.push({
                        questionId: quizState.questions[actualQuestion].id,
                        answerIndex: el.index,
                        correct: el.correct,
                      });
                      if (quizState.showFeedbacks) {
                        if (el.feedback) {
                          setCustomFeedback(el.feedback);
                        } else {
                          if (el.correct) {
                            setDefaultFeedback(
                              quizState.questions[actualQuestion]
                                .default_feedback.correct
                            );
                          }
                          if (!el.correct) {
                            setDefaultFeedback(
                              quizState.questions[actualQuestion]
                                .default_feedback.wrong
                            );
                          }
                        }
                      }
                      if (quizState.showFeedbacks) {
                        if (actualQuestion < quizState.questions.length - 1)
                          setTimeout(() => {
                            setActualQuestion(actualQuestion + 1);
                            setDefaultFeedback("");
                            setCustomFeedback("");
                          }, 2000);
                        else {
                          setTimeout(() => {
                            setDefaultFeedback("");
                            setCustomFeedback("");
                            registerResults(results.current);
                          }, 2000);
                        }
                      } else {
                        if (actualQuestion < quizState.questions.length - 1) {
                          setActualQuestion(actualQuestion + 1);
                          setDefaultFeedback("");
                          setCustomFeedback("");
                        } else {
                          setDefaultFeedback("");
                          setCustomFeedback("");
                          registerResults(results.current);
                        }
                      }
                    }}
                  >
                    {el.text}
                  </div>
                );
              }
            )
          )}
        </>
      );
    }
  };

  return (
    <>
      {isCompleted ? (
        <Feedback goodTest={true} />
      ) : isCompleted === false ? (
        <Feedback goodTest={false} />
      ) : (
        <div>{handleQuizRender()}</div>
      )}
    </>
  );
};
export default QuizPage;
