import "./Message.css";
import party from "../../assets/images/party.svg";
import sad from "../../assets/images/sad.svg";

export default function Message({results, zapGoal}) {
  function countZap(list) {
    let zapCount = 0;
    for (const el of list) {
      if (el === "checkmark-circle") {
        zapCount++;
      }
    }
    return zapCount;
  }
  if (countZap(results) >= zapGoal) {
    return (
      <div className="message">
        <div className="message-header">
          <img src={party} alt="party emoji" />
          <h3>Parabéns!</h3>
        </div>
        <p>
          Você não esqueceu de
          <br />
          nenhum flashcard!
        </p>
      </div>
    );
  }
  return (
    <div className="message">
      <div className="message-header">
        <img src={sad} alt="sad emoji" />
        <h3>Putz...</h3>
      </div>
      <p>
        Ainda faltam alguns...
        <br />
        Mas não desanime!
      </p>
    </div>
  );
}
