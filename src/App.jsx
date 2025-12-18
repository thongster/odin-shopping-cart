import { Outlet } from "react-router";
import "./styles/App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
