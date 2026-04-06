import React from "react";

export default function StartScreen({ startQuiz }) {
  return (
    <div>
      <div className="min-h-screen bg-base-300 flex items-center justify-center">
        <div className="card w-full max-w-md  shadow-xl">
          <div className="body p-10 hover:shadow-2xl">
            <h1 className="text-4xl font-bold mb-4 text-center">
              Welcome to our Quiz
            </h1>
            <p className="text-gray-700 mb-7 text-center textarea-md">
              Test your knowledge with our fun and interactive quiz! Click the
              button below to get started and see how much you know.
            </p>
            <button
              className="btn btn-primary btn-block mt-5"
              onClick={startQuiz}
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
