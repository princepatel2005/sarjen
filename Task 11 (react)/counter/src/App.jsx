import React from "react";
import Counter from "./components/Counter";
import Sum from "./components/Sum";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h2>Counter with LocalStorage</h2>
      <Counter />
      <h2> Sum Of Two Numbers </h2>
      <Sum/>
    </div>
    
  );
}

export default App;