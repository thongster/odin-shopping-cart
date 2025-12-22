import { useState } from "react";
import { Outlet } from "react-router";
import "./styles/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (cartItem) => {
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const removeFromCart = (selectedItem) => {
    const updatedCart = cart.filter((item) => item.id != selectedItem.id);
    setCart(updatedCart);
  };

  const updateQty = (selectedItem, newCount) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === selectedItem.id ? { ...item, count: newCount } : item,
      ),
    );
  };

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
