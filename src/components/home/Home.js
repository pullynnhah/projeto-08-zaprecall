import "./Home.css";

import decks from "../../utils/decks";
import Logo from "../logo/Logo";
import {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";

export default function Home() {
  const [disable, setDisable] = useState(true);
  const [zapGoal, setZapGoal] = useState("");
  const [deck, setDeck] = useState("");
  const zapRef = useRef("");
  const deckRef = useRef("");

  function enableButton() {
    setDisable(!(deck && zapGoal));
  }

  useEffect(() => {
    enableButton();
    zapRef.current = zapGoal;
  }, [zapGoal, enableButton]);

  useEffect(() => {
    enableButton();
    deckRef.current = deck;
  }, [deck, enableButton]);

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

      <Link to="/quiz">
        <button disabled={disable}>Iniciar Recall!</button>
      </Link>
    </main>
  );
}
