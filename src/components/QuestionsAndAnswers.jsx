import React, { useEffect, useState } from "react";
import shuffleArrayContent from "../utils/shuffleArrayContent";
import QuizResultModal from "./QuizResultModal";

const QuestionsAndAnswers = ({
  Data,
  questionNumber,
  setQuestionNumber,
  time,
  setTime,
}) => {
  const [score, setScore] = useState(0);
  const [showTotalScore, setShowTotalScore] = useState(score);
  const [endTest, setEndTest] = useState(true);
  const [shuffledAnswers, setShuffledAnswers] = useState(
    shuffleArrayContent([
      ...Data[questionNumber].incorrectAnswers,
      Data[questionNumber].correctAnswer,
    ])
  );
  const [showQuizResult, setShowQuizResult] = useState(false);

  useEffect(() => {
    setShuffledAnswers(
      shuffleArrayContent([
        ...Data[questionNumber].incorrectAnswers,
        Data[questionNumber].correctAnswer,
      ]),
      setShowTotalScore(showTotalScore)
    );
  }, [questionNumber, Data, setShowTotalScore, showTotalScore]);

  const selectedAnswer = () => {
    if (Data[questionNumber].correctAnswer)
      setTimeout(() => {
        setScore(score + 1);
        setShowTotalScore(score)
        setQuestionNumber(questionNumber + 1);
      }, 1000);
  };

  const timer = () => {
    setTimeout(() => {
      setTime(time - 1);
      if (time === 0) {
        setShowQuizResult(true);
      }
    }, 10000);
  };
  useEffect(() => {
    timer();
  });

  const endQuiz = () => {
    setShowQuizResult(false);
    setEndTest(false);
  };

  const handlesSubmit = () => {
    setShowQuizResult(true);
  }

  return (
    <div>
      <QuizResultModal
        show={showQuizResult}
        onClose={endQuiz}
        showTotalScore={showTotalScore}
        setShowTotalScore={setShowTotalScore}
      />
      {endTest ? (
        <>
          <div className="timer mb-3">{time}</div>
          <div className="question bg-white text-center rounded shadow p-3">
            {Data[questionNumber].question}
          </div>
          <div className="d-flex flex-wrap answers">
            {shuffledAnswers.map((answer, ind) => (
              <div
                key={ind}
                className="answer"
                onClick={(answer) => selectedAnswer(answer)}
              >
                {answer}
              </div>
            ))}
          </div>
          <div className="text-center">
          <button className="btn btn-secondary" onClick={handlesSubmit}>Submit</button>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default QuestionsAndAnswers;
