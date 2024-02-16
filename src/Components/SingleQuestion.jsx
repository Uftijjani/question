import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const SingleQuestion = ({ id, question, answer }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <article>
      <div className="header">
        <h4>{question}</h4>
        <button onClick={handleClick}>
          {show ? <FaMinus className="icon" /> : <FaPlus className="icon" />}
        </button>
      </div>
      {show ? <p>{answer}</p> : <p></p>}
    </article>
  );
};

export default SingleQuestion;
