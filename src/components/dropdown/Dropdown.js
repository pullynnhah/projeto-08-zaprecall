import "./Dropdown.css";
export default function Dropdown({decks}) {
  return (
    <select className="input">
      <option unselectable>Escolha seu deck</option>
      {decks.map(deck => (
        <option>{deck}</option>
      ))}
    </select>
  );
}
