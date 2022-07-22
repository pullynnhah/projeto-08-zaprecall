import "./Home.css";

import Logo from "../logo/Logo";
import {useEffect, useRef, useState} from "react";

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

  return (
    <main className="home">
      <Logo />
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
        type="text"
        onChange={e => setZapGoal(e.target.value)}
        placeholder="Digite sua meta de zaps..."
      />
      <button
        disabled={disable}
        onClick={() => {
          setState("quiz");
          setDeckName(deck);
          setGoal(deck.length <= zapGoal ? zapGoal : deck.length);
        }}>
        Iniciar Recall!
      </button>
    </main>
  );
}
