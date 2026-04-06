import React from "react";
import questions from "../data/questions";

export default function ResultScreen({
  score,
  totalQuestions,
  userAnswers,
  playAgain,
}) {
  return (
    <div>
      <div className="min-h-screen bg-base-300 flex  items-center justify-center">
        <div className="card w-full p-6 my-5 max-w-md  shadow-xl">
          <div className="body">
            <h1 className="text-2xl font-bold mb-2">Quiz Complete</h1>
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">Total Currects</div>
                <div className="stat-value text-primary">{score}</div>
              </div>

              <div className="stat">
                <div className="stat-title">Total Currects Persentage</div>
                <div className="stat-value text-secondary">
                  {(score / totalQuestions) * 100}%
                </div>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-lg my-2">Your Answer</h2>
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const iscorrect = userAnswer === question.answer;

                return (
                  <div className="mb-3 border border-base-200 rounded-lg p-4">
                    <h2 className="font-bold">{question.title}</h2>
                    <div>
                      <span className="font-semibold text-gray-700 text-[15px]">
                        Your Answer :
                      </span>
                      <span
                        className={`${iscorrect ? "bg-success text-white badge ml-2 " : "bg-error text-white"} badge ml-2`}
                      >
                        {userAnswer}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <button
              className="btn btn-primary btn-block mt-2"
              onClick={() => window.location.reload()}
            >
              Play Again
            </button> window.location.reload() it is reloading the web page so we can use in given below*/}
            <button
              className="btn btn-primary btn-block mt-2"
              onClick={playAgain}
            >
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
