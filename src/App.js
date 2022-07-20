import "./App.css";
import Home from "./components/home/Home";
import Quiz from "./components/quiz/Quiz";
import {BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
