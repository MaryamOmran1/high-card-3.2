import logo from "/logo.png";
import "./App.css";
import { makeShuffledDeck } from "./utils.jsx";
import { useState } from "react";

function App(props) {
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  // Set default value of card deck to new shuffled deck
  const [cardDeck, setCardDeck] = useState(makeShuffledDeck());
  // currCards holds the cards from the current round
  const [currCards, setCurrCards] = useState([]);

  const dealCards = () => {
    const newCurrCards = [cardDeck.pop(), cardDeck.pop()];
    setCurrCards(newCurrCards);

    const [card1, card2] = newCurrCards;
    if (card1.rank > card2.rank) {
      setPlayer1Score((prev) => prev + 1);
    } else if (card1.rank < card2.rank) {
      setPlayer2Score((prev) => prev + 1)
    }
  };
  // You can write JavaScript here, just don't try and set your state!
  const isGameOver = cardDeck.length === 0;
  const winnerMessage = isGameOver ? (player1Score > player2Score ? "Player 1 Wins!" : "Player 2 Wins!") : "";

  const restartGame = () => {
    setCurrCards([]);
    setPlayer1Score(0);
    setPlayer2Score(0);
    cardDeck = makeShuffledDeck();
  };

  // You can access your current components state here, as indicated below
  const currCardElems = currCards.map(({ name, suit }) => (
    // Give each list element a unique key
    <div key={`${name}${suit}`}>
      {name} of {suit}
    </div>
  ));

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h2>React High Card</h2>
          <div>Player 1 Score: {player1Score}</div>
          <div>Player 2 Score: {player2Score}</div>
          {currCardElems}
          <br />
          <button onClick={dealCards} disabled={isGameOver}>Deal</button>
          {isGameOver && <button onClick={restartGame}>Restart Game</button>}
          {winnerMessage && <div>{winnerMessage}</div>}
        </header>
      </div>
    </>
  );
}

export default App;
