import "./Result.css";
import Message from "../message/Message";
import ResultFooter from "../result-footer/ResultFooter";

export default function Result({results, size}) {
  if (results.length === size) {
    return (
      <section className="result final-result">
        <Message results={results} zapGoal={6} />
        <ResultFooter results={results} size={size} />
      </section>
    );
  }
  return (
    <section className="result">
      <ResultFooter results={results} size={size} />
    </section>
  );
}
