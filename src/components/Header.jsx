import "./Header.module.css";
import Nav from "./Nav";

export default function Header({ cart }) {
  return (
    <header>
      <h1>After Dark Supply Co.</h1>
      <Nav cart={cart} />
    </header>
  );
}
