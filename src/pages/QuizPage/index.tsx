import React, { useState, useRef, useEffect } from "react";
import "./index.css";
import Feedback from "../../components/FeedBack/index";
import useQuiz from "./quizHook";
import fakeData from "./fakeData";

const QuizPage = () => {
  const { quizState, registerResults, isCompleted } = useQuiz(fakeData);
  const [timer, setTimer] = useState({
    class: "timer",
    time: 0,
  });
  const [actualQuestion, setActualQuestion] = useState(0);
  const [defaultFeedback, setDefaultFeedback] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");
  const [timeAmount, setTimeAmount] = useState<number>(
    quizState.questions[actualQuestion].timeAmount
  );
  const [outOfTime, setOutOfTime] = useState<boolean | null>(false);
  interface Result {
    questionId: string;
    answerIndex: number | null;
    correct: boolean;
  }
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

  useEffect(() => {
    console.log(quizState.questions[actualQuestion].timeAmount);
    if (outOfTime === false) {
      handleTimer(true, timeAmount);
      const timer = setTimeout(() => {
        setOutOfTime(true);
      }, timeAmount * 1000);
      return () => clearTimeout(timer);
    }
    if (outOfTime) {
      if (actualQuestion < quizState.questions.length - 1) {
        results.current.push({
          questionId: quizState.questions[actualQuestion].id,
          answerIndex: null,
          correct: false,
        });
        handleTimer(false, 0);
        setCustomFeedback("out of time ");
        setTimeout(() => {
          setCustomFeedback("");
          setOutOfTime(false);

          setActualQuestion(actualQuestion + 1);
        }, 2000);
      }
      if (actualQuestion === quizState.questions.length - 1) {
        results.current.push({
          questionId: quizState.questions[actualQuestion].id,
          answerIndex: null,
          correct: false,
        });
        handleTimer(false, 0);
        setOutOfTime(null);
        setCustomFeedback("out of time");
        setTimeout(() => {
          setCustomFeedback("");
          registerResults(results.current);
        }, 2000);
      }
    }
  }, [actualQuestion, outOfTime]);

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
                  : ` 0.3s all ease-out`,
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
                      setOutOfTime(false);
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
                        if (actualQuestion === quizState.questions.length - 1) {
                          setTimeout(() => {
                            setDefaultFeedback("");
                            setCustomFeedback("");
                            registerResults(results.current);
                          }, 2000);
                        }
                      } else {
                        if (actualQuestion < quizState.questions.length - 1)
                          setActualQuestion(actualQuestion + 1);
                        setDefaultFeedback("");
                        setCustomFeedback("");

                        if (actualQuestion === quizState.questions.length - 1) {
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
