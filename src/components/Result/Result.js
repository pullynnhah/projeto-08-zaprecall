import "./Result.css";
import Icon from "../icon/Icon";

export default function Result({results, size}) {
  const message = results.length === size ? <Message results={results} /> : "";
  return (
    <section className="result">
      {message}
      <p>
        <span className="answerCount">{results.length}</span>/ <span className="size">{size}</span>{" "}
        CONCLUÍDOS
      </p>
      <div>
        {results.map(result => (
          <Icon name={result} />
        ))}
      </div>
    </section>
  );
}
