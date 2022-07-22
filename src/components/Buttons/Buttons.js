import "./Buttons.css";

export default function Buttons({addResult}) {
  const data = [
    {
      cls: "forgot",
      text: "Não lembrei",
      name: "close-circle",
    },
    {
      cls: "almost",
      text: "Quase não lembrei",
      name: "help-circle",
    },
    {
      cls: "zap",
      text: "Zap!",
      name: "checkmark-circle",
    },
  ];
  return (
    <div className="btns">
      {data.map(datum => {
        return (
          <button className={datum.cls} onClick={() => addResult(datum.name)}>
            {datum.text}
          </button>
        );
      })}
    </div>
  );
}
