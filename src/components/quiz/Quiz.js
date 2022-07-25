import {useState} from "react";

import "./Quiz.css";
import Logo from "../logo/Logo";

import Flashcards from "../flashcards/Flashcards";
import Result from "../result/Result";

export default function Quiz({setState, decks, deckName, zapGoal}) {
  const [result, setResult] = useState([]);
  const deck = decks[deckName];

  deck.sort(() => Math.random() - 0.5);
  return (
    <main className="quiz">
      <Logo />
      <Flashcards deck={deck} result={result} setResult={setResult} />
      <Result results={result} size={deck.length} zapGoal={zapGoal} setState={setState} />
    </main>
  );
}
