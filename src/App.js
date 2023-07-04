import React from "react";
import "./style.css";
import Title from "./components/title";
import Card from "./components/card";
import RandomCards from "./components/randomcards";
function App() {
  return (
    <div className="container">
      <Title></Title>
      <Card></Card>
      <RandomCards></RandomCards>
    </div>
  );
}

export default App;
