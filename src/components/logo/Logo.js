import logo from "../../assets/images/logo.svg";

import "./Logo.css";
export default function Logo() {
  return (
    <section className="logo">
      <img src={logo} alt="logo" />
      <h1>ZapRecall</h1>
    </section>
  );
}
