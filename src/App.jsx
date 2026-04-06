import { useState } from "react";
import "./App.css";
import questions from "./data/questions";
import ResultScreen from "./components/ResultScreen";

function App() {
  const [selected, setSelected] = useState("");
  const [screen, setScreen] = useState("quiz");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestion = questions[currentIndex];

  const totalQuestions = questions.length;
  const currentQuestionNumber = currentIndex + 1;

  const handleNext = () => {
    const isCorrect = selected === currentQuestion.answer;
    if (isCorrect) setScore((prev) => prev + 1);
    setUserAnswers([...userAnswers, selected]);
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelected("");
    } else {
      return setScreen("result");
    }
  };
  const playAgain = () => {
    setScreen("quiz");
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers([]);
    setSelected("");
  };
  // result screen
  if (screen === "result")
    return (
      <ResultScreen
        score={score}
        totalQuestions={totalQuestions}
        userAnswers={userAnswers}
        playAgain={playAgain}
      />
    );

  return (
    <>
      {/* quiz section  */}
      <div className="min-h-screen bg-base-300 flex items-center justify-center">
        <div className="card w-full max-w-md  shadow-xl">
          <div className="body">
            {/* progress  */}
            <div className="flex justify-between items-center ">
              <span className="text-sm">
                Question {currentQuestionNumber} of {totalQuestions}
              </span>
              <span className="badge badge-outline bg-blue-700 text-white">
                {(currentQuestionNumber / totalQuestions) * 100}%
              </span>
            </div>
            <progress
              className="progress progress-primary w-full"
              value={currentQuestionNumber}
              max={totalQuestions}
            ></progress>
            {/* question  */}
            <h2 className="text-xl font-semibold mb-4">
              {currentQuestion.title}
            </h2>
            {/* options  */}
            <div className="grid">
              {currentQuestion.options.map((option, index) => (
                <button
                  className={`btn text-start  justify-start px-8 py-6 my-1.5 ${selected === option ? "btn-primary" : ""}`}
                  key={index}
                  onClick={() => setSelected(option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* next button  */}
            <div>
              <button
                className="btn rounded-md btn-block btn-primary mt-5"
                disabled={!selected}
                onClick={handleNext}
              >
                {currentIndex === totalQuestions - 1
                  ? "Finish quiz"
                  : "Next quiz"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
