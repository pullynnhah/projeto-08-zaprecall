import "./Home.css";

import decks from "../../utils/decks";
import Logo from "../logo/Logo";
import {useRef, useState} from "react";
import Dropdown from "../dropdown/Dropdown";

export default function Home() {
  const [disable, setDisable] = useState(false);
  const [zapGoal, setZapGoal] = useState("");
  const [deck, setDeck] = useState("");
  const zapRef = useRef("");
  const deckRef = useRef("");

  return (
    <main className="home">
      <Logo />
      <Dropdown decks={Object.keys(decks)} deck={deck} setDeck={setDeck} />
      <input type="text" className="input" placeholder="Digite sua meta de zaps..." />
    </main>
  );
}
