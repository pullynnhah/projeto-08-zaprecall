import "./Flashcards.css";
import {useState} from "react";
import Flashcard from "../flashcard/Flashcard";
import Result from "../result-footer/ResultFooter";

export default function Flashcards({deck, result, setResult}) {
  return (
    <div className="flashcards">
      {deck.map((card, cardNumber) => {
        const data = {...card, cardNumber, result, setResult};
        return <Flashcard {...data} />;
      })}
    </div>
  );
}
