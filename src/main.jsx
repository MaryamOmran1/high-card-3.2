import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
const currCardElems = currCards.map((card) => <PlayingCard key={'${card.name}${card.suit}'} {...card} />);
