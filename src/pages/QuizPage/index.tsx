import React, { useState } from "react";
import "./index.css";
import Feedback from "../../components/FeedBack/index";
import useQuiz from "./quizHook";
import fakeData from "./fakeData";

const QuizPage = (props: any) => {
  const { quizState, registerResults, isCompleted } = useQuiz(fakeData);
  const [timer, setTimer] = useState("timer");
  const [actualQuestion, setAcqualQuestion] = useState(0);
  const [defaultFeedback, setDefaultFeedback] = useState("");
  const [customFeedback, setCustomFeedback] = useState("");

  const results = [];

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
              if (el.feedback) {
              }
              return (
                <div
                  className="option"
                  onClick={() => {
                    results.push({
                      questionId: quizState.questions[actualQuestion].id,
                      answerIndex: el.answerIndex,
                    });
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
                    if (actualQuestion < quizState.questions.length - 1)
                      setTimeout(function () {
                        setAcqualQuestion(actualQuestion + 1);
                        setDefaultFeedback("");
                        setCustomFeedback("");
                      }, 3000);
                    if (actualQuestion === quizState.questions.length - 1)
                      setTimeout(function () {}, 3000);
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

  return (
    <>
      {isCompleted ? (
        <Feedback />
      ) : isCompleted === false ? (
        <Feedback />
      ) : (
        <div>{handleQuizRender()}</div>
      )}
    </>
  );
};
export default QuizPage;
