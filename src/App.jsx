import { useState } from "react";
import { Outlet } from "react-router";
import "./styles/App.css";

function App() {

  return (
    <div className="container">
      <Outlet />
    </div>
  );
}

export default App;
