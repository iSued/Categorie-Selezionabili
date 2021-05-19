import React, { useState, useRef } from "react";
import "./index.css";
import Feedback from "../../components/FeedBack/index";
import useQuiz from "./quizHook";
import fakeData from "./fakeData";

const QuizPage = () => {
  const { quizState, registerResults, isCompleted } = useQuiz(fakeData);
  const [timer, setTimer] = useState("timer");
  const [actualQuestion, setAcqualQuestion] = useState(0);
  const [defaultFeedback, setDefaultFeedback] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");

  const results: any = useRef([]);
  const handleQuizRender = () => {
    if (quizState.questions.length) {
      return (
        <>
          <div className={timer}></div>
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
            quizState.questions[actualQuestion].answers.map((el: any) => {
              return (
                <div
                  className="option"
                  onClick={() => {
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
                            quizState.questions[actualQuestion].default_feedback
                              .correct
                          );
                        }
                        if (!el.correct) {
                          setDefaultFeedback(
                            quizState.questions[actualQuestion].default_feedback
                              .wrong
                          );
                        }
                      }
                    }
                    if (quizState.showFeedbacks) {
                      if (actualQuestion < quizState.questions.length - 1)
                        setTimeout(() => {
                          setAcqualQuestion(actualQuestion + 1);
                          setDefaultFeedback("");
                          setCustomFeedback("");
                        }, 2000);
                      if (actualQuestion === quizState.questions.length - 1) {
                        setTimeout(() => {
                          setDefaultFeedback("");
                          setCustomFeedback("");
                          console.log(results);
                          registerResults(results.current);
                        }, 2000);
                      }
                    } else {
                      if (actualQuestion < quizState.questions.length - 1)
                        setAcqualQuestion(actualQuestion + 1);
                      setDefaultFeedback("");
                      setCustomFeedback("");

                      if (actualQuestion === quizState.questions.length - 1) {
                        setDefaultFeedback("");
                        setCustomFeedback("");
                        console.log(results);
                        registerResults(results.current);
                      }
                    }
                  }}
                >
                  {el.text}
                </div>
              );
            })
          )}
        </>
      );
    }
  };
  console.log(quizState);
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
