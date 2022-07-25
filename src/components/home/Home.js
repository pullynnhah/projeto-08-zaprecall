import {useEffect, useRef, useState} from "react";

import "./Home.css";
import Logo from "../logo/Logo";

export default function Home({setState, decks, setDeckName, setGoal}) {
  const [disable, setDisable] = useState(true);
  const [zapGoal, setZapGoal] = useState("");
  const [deck, setDeck] = useState("");
  const zapRef = useRef("");
  const deckRef = useRef("");

  useEffect(() => {
    setDisable(!(deck && zapGoal));
    zapRef.current = zapGoal;
    deckRef.current = deck;
  }, [setDisable, zapGoal, deck]);

  const handleSubmit = event => {
    event.preventDefault();
    setState("quiz");
    setDeckName(deck);
    setGoal(zapGoal);
  };
  return (
    <main className="home">
      <Logo />
      <form onSubmit={handleSubmit}>
        <select ref={deckRef} onChange={e => setDeck(e.target.value)}>
          <option selected disabled>
            Escolha seu deck
          </option>
          {Object.keys(decks).map(deck => (
            <option>{deck}</option>
          ))}
        </select>
        <input
          ref={zapRef}
          type="number"
          onChange={e => setZapGoal(e.target.value)}
          placeholder="Digite sua meta de zaps..."
          min="1"
        />
        <button disabled={disable}>Iniciar Recall!</button>
      </form>
    </main>
  );
}
