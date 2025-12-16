import { useState } from "react";
import "./styles/App.css";
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './pages/Cart.jsx'

function App() {
  const [page, setPage] = useState("Home"); // Home, Shop, Cart

  return (
    <div className="container">
      {page === "Home" && <Home />}
      {page === "Shop" && <Shop />}
      {page === "Cart" && <Cart />}
    </div>
  );
}

export default App;
