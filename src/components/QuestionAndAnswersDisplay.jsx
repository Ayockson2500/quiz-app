import React,{ useState } from 'react'
import QuestionsAndAnswers from "./QuestionsAndAnswers";
import Data from "../Data.json";

const QuestionAndAnswersDisplay = () => {

    const [questionNumber, setQuestionNumber] = useState(0);
  const [allAnswer, setAllAnswer] = useState([
    ...Data[questionNumber].incorrectAnswers,
    Data[questionNumber].correctAnswer,
  ]);
  const [time, setTime] = useState(60);

  return (
    <div>
        <QuestionsAndAnswers
        Data={Data}
        questionNumber={questionNumber}
        setQuestionNumber={setQuestionNumber}
        time={time}
        setTime={setTime}
        allAnswer={allAnswer}
        setAllAnswer={setAllAnswer}
      />
    </div>
  )
}

export default QuestionAndAnswersDisplay