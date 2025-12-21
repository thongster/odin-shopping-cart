import { useState } from "react";
import { Outlet } from "react-router";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cartItem) => {
    setCart((prevCart) => [...prevCart, cartItem])
  };

  const removeFromCart = () => {};

  const updateQty = () => {};

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="container">
      <Header />
      <Outlet
        context={{
          cart,
          setCart,
          addToCart,
          removeFromCart,
          updateQty,
          clearCart,
        }}
      />
      <Footer />
    </div>
  );
}

export default App;
