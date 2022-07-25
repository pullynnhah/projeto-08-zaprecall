import "./Result.css";

import Message from "../message/Message";
import ResultFooter from "../result-footer/ResultFooter";

export default function Result({results, size, setState, zapGoal}) {
  if (zapGoal > size) {
    zapGoal = size;
  }

  if (results.length === size) {
    return (
      <section className="result final-result">
        <Message results={results} zapGoal={zapGoal} />
        <ResultFooter results={results} size={size} setState={setState} />
      </section>
    );
  }
  return (
    <section className="result">
      <ResultFooter results={results} size={size} setState={setState} />
    </section>
  );
}
