import React, { useState } from "react";
import data from "./data";
import Question from "./Question";
import "./QuestionApp.css";

function QuestionApp() {
  const [infos, setInfos] = useState(data);

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center question-body">
      <div className="d-flex flex-column align-items-center">
        <h3 className="text-warning text-center mt-4">
          using High Order Component (HOC){" "}
        </h3>
        <main className="main">
          <div className="containerQuestion row">
            <h3 className="col-3">questions and answers about login</h3>
            <section className="col-8 info">
              {infos.map((info) => (
                <Question key={info.id} {...info} />
              ))}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default QuestionApp;
