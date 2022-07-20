import "./Quiz.css";
import Logo from "../logo/Logo";

import decks from "../../utils/decks";
import Flashcards from "../flashcards/Flashcards";
export default function Quiz() {
  const deck = decks.Terminal;
  deck.sort(() => Math.random() - 0.5);
  return (
    <main className="quiz">
      <Logo />
      <Flashcards deck={deck} />
    </main>
  );
}
