import { use, useState } from "react";
import "./App.css";

const questions = [
  {
    title: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    title: "What is the largest planet in our solar system?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Jupiter",
  },
  {
    title: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain",
    ],
    answer: "William Shakespeare",
  },
  {
    title: "What is the chemical symbol for water?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    answer: "H2O",
  },
  {
    title: "What is the largest mammal in the world?",
    options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    answer: "Blue Whale",
  },
];
function App() {
  const [selected, setSelected] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const currentQuestion = questions[currentIndex];
  const handleNext = () => {
    const isCorrect = selected === currentQuestion.answer;
    if (isCorrect) setScore((prev) => prev + 1);
    setUserAnswers([...userAnswers, selected]);
    setCurrentIndex((prev) => prev + 1);
    setSelected("");
  };
  console.log({ score, userAnswers, setSelected });
  const totalQuestions = questions.length;
  const currentQuestionNumber = currentIndex + 1;

  return (
    <>
      <div className="min-h-screen bg-base-300 flex items-center justify-center">
        <div>
          {/* progress  */}
          <div className="flex justify-between items-center mb-2">
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
                className={`btn text-start  justify-start px-8 py-5 my-1 ${selected === option ? "btn-primary" : ""}`}
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
              className="btn rounded-sm btn-block btn-primary mt-4"
              disabled={!selected}
              onClick={handleNext}
            >
              Next quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
