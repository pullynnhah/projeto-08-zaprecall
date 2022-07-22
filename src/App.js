import "./App.css";
import Home from "./components/home/Home";
import Quiz from "./components/quiz/Quiz";
import decks from "./utils/decks";
import {useState} from "react";

export default function App() {
  const [state, setState] = useState("home");
  const [deckName, setDeckName] = useState("");
  const [goal, setGoal] = useState(0);
  if (state === "home") {
    return <Home setState={setState} decks={decks} setDeckName={setDeckName} setGoal={setGoal} />;
  }

  return <Quiz setState={setState} decks={decks} deckName={deckName} zapGoal={goal} />;
}
