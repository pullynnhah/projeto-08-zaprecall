import "./Logo.css";
import logo from "../../assets/images/logo.svg";

export default function Logo() {
  return (
    <section className="logo">
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </section>
  );
}
