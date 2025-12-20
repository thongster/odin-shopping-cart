import { useState } from "react";
import { Outlet } from "react-router";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className="container">
      <Header />
      <Outlet context={{ cart, setCart }} />
      <Footer />
    </div>
  );
}

export default App;
