import "./Flashcard.css";
import Icon from "../icon/Icon";
import arrow from "../../assets/images/arrow.svg";
import {useState} from "react";

export default function Flashcard({question, answer, cardNumber, result, setResult}) {
  const [state, setState] = useState(0);
  const [name, setName] = useState("play-outline");

  function addResult(currResult) {
    setName(currResult);
    setResult([...result, currResult]);
    setState(0);
  }

  if (state === 0) {
    return (
      <section className={`flashcard collapse ${name}`} onClick={() => setState(1)}>
        <h2>Pergunta {cardNumber + 1}</h2>
        <Icon name={name} />
      </section>
    );
  } else if (state === 1) {
    return (
      <section className="flashcard front" onClick={() => setState(2)}>
        <p>{question}</p>
        <img src={arrow} alt="arrow" />
      </section>
    );
  } else if (state === 2) {
    return (
      <section className="flashcard front">
        <p>{answer}</p>
        <div className="btns">
          <button className="forgot" onClick={() => addResult("close-circle")}>
            Não lembrei
          </button>
          <button className="almost" onClick={() => addResult("help-circle")}>
            Quase não lembrei
          </button>
          <button className="zap" onClick={() => addResult("checkmark-circle")}>
            Zap!
          </button>
        </div>
      </section>
    );
  }
}
