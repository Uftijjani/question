import { useState } from "react";
import data from "./data";
import SingleQuestion from "./SingleQuestion";
const Questions = () => {
  const [questions, setquestions] = useState(data);
  return (
    <div className="container">
      <h1>Questions And Answers About Login</h1>
      <div>
        {questions.map((question) => {
          return <SingleQuestion key={question.id} {...question} />;
        })}
      </div>
    </div>
  );
};

export default Questions;
