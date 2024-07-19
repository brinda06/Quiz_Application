import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState, useContext } from "react";
import { GameStateContext } from "../helpers/Contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const { setScore, setGameState } = useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
    setIsCorrect(option === Questions[currentQuestion].answer);
  };

  const nextQuestion = () => {
    if (optionChosen) {
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setOptionChosen("");
      setIsCorrect(null); // Reset the correctness state for the next question
    }
  };

  const finishQuiz = () => {
    if (optionChosen) {
      if (isCorrect) {
        setScore((prevScore) => prevScore + 1);
      }
      setGameState("finished");
    }
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="questions">
        <button
          className={`optionButton ${
            optionChosen === "optionA"
              ? isCorrect
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => chooseOption("optionA")}
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          className={`optionButton ${
            optionChosen === "optionB"
              ? isCorrect
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => chooseOption("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          className={`optionButton ${
            optionChosen === "optionC"
              ? isCorrect
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => chooseOption("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          className={`optionButton ${
            optionChosen === "optionD"
              ? isCorrect
                ? "correct"
                : "incorrect"
              : ""
          }`}
          onClick={() => chooseOption("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz} id="nextQuestion">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} id="nextQuestion">
          Next Question
        </button>
      )}
    </div>
  );
}

export default Quiz;
