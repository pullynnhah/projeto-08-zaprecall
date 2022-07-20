import "./Flashcards.css";
import {useState} from "react";
import Flashcard from "../flashcard/Flashcard";

export default function Flashcards({deck}) {
  const [result, setResult] = useState([]);
  return (
    <div className="flashcards">
      {deck.map((card, cardNumber) => {
        const data = {...card, cardNumber, result, setResult};
        return <Flashcard {...data} />;
      })}
    </div>
  );
}
