import "./Flashcards.css";
import Flashcard from "../flashcard/Flashcard";

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
