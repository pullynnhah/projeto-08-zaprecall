import "./Message.css";

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
        <h3></h3>
      </div>
    );
  }

  return (
    <div className="message">
      <h3></h3>
    </div>
  );
}
