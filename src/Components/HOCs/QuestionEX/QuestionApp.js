import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./QuestionApp.css";

function QuestionApp() {
  const [infos, setInfos] = useState(data);

  return (
    <div className="d-felx flex-column question-body">
      <h3 className='text-warning text-center mt-4'>using High Order Component (HOC) </h3>
      <main className="main">
        <div className="container">
          <h3>questions and answers about login</h3>
          <section className="info">
            {infos.map((info) => (
              <Question key={info.id} {...info} />
            ))}
          </section>
        </div>
      </main>
    </div>
  );
}

export default QuestionApp;
