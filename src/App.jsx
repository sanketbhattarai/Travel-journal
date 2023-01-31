import { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Card from "./Card";
import Data from "./Data";

function App() {
  const cards = Data.map((item) => <Card item={item} />);

  return (
    <div className="App">
      <Navbar />
      {cards}
    </div>
  );
}

export default App;
