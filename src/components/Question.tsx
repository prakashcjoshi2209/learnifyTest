

import React from "react";

type QuestionProps = {
  question: {
    _id: string; // Updated to match MongoDB _id
    question: string;
    options: string[];
    correctAnswerIndex: number;
  };
  selectedAnswer: number | null;
  onAnswerChange: (questionId: string, answerIndex: number) => void;
};

const Question: React.FC<QuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerChange,
}) => {
  return (
    <div className="mb-8 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
      {/* Question Text */}
      <div className="mb-4">
        <p className="text-lg font-semibold text-gray-800 sm:text-xl md:text-2xl">
          {question.question}
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {question.options.map((option, index) => (
          <div
            key={index}
            className={`flex items-center space-x-4 p-4 rounded-lg cursor-pointer border ${
              selectedAnswer === index
                ? "bg-purple-100 border-purple-500"
                : "border-gray-300"
            } hover:bg-purple-50`}
            onClick={() => onAnswerChange(question._id, index)} // Updated to use _id
          >
            <input
              type="radio"
              id={`question-${question._id}-option-${index}`}
              name={`question-${question._id}`}
              value={index}
              checked={selectedAnswer === index}
              onChange={() => onAnswerChange(question._id, index)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <label
              htmlFor={`question-${question._id}-option-${index}`}
              className="text-base text-gray-700 sm:text-lg md:text-xl"
            >
              {option}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
