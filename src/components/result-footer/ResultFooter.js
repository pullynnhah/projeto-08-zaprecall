import "./ResultFooter.css";
import Icon from "../icon/Icon";

export default function ResultFooter({results, size, setState}) {
  return (
    <div className="result-footer">
      <p>
        <span className="answerCount">{results.length}</span>/<span className="size">{size}</span>{" "}
        CONCLUÍDOS
      </p>
      <div>
        {results.map(result => (
          <Icon name={result} />
        ))}
      </div>
      <button className="replay" onClick={() => setState("home")}>
        REINICIAR RECALL
      </button>
    </div>
  );
}
