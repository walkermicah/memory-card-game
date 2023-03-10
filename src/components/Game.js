import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import generateRandomDeck from '../helpers/generateRandomDeck';
import '../styles/Game.css';

function Game() {
  const [cards, setCards] = useState(generateRandomDeck);
  const [flippedCards, setFlippedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState('-');
  const [animate, setAnimate] = useState(false);

  const flipCard = (id, name) => {
    setCards(cards.map((c) => (c.id === id ? { ...c, flipped: true } : c)));
    setFlippedCards([...flippedCards, name]);
  };

  // Check for a match after cards are flipped
  useEffect(() => {
    const checkForMatch = () => {
      if (flippedCards.length !== 2) return;

      // if different, flip back
      if (flippedCards[0] !== flippedCards[1]) {
        setCards(cards.map((c) => ({ ...c, disabled: true })));
        setTimeout(
          () =>
            setCards(
              cards.map((c) =>
                c.name === flippedCards[0] || c.name === flippedCards[1]
                  ? { ...c, disabled: false, flipped: false }
                  : { ...c, disabled: false }
              )
            ),
          1000
        );
      }
      setFlippedCards([]);
    };
    checkForMatch();
  }, [cards, flippedCards]);

  // Update score after a pair of cards is flipped
  useEffect(() => {
    if (flippedCards.length === 2) setMoves(moves + 1);
  }, [flippedCards, moves]);

  // Check for end of game (all cards flipped)
  useEffect(() => {
    setTimeout(() => {
      setGameOver(cards.every((c) => c.flipped));
    }, 3000);
  }, [cards]);

  // animate background color if end of game
  useEffect(() => {
    setAnimate(cards.length > 0 && cards.every((c) => c.flipped));
  }, [cards]);

  // Update best score on game over
  useEffect(() => {
    if (!gameOver) return;
    setBestScore(bestScore === '-' || moves < bestScore ? moves : bestScore);
  }, [gameOver, moves, bestScore]);

  // Restart game on click
  const newGame = () => {
    setGameOver(false);
    setAnimate(false);
    setMoves(0);
    setCards(generateRandomDeck);
  };

  return (
    <div className="Game">
      <ScoreBoard moves={moves} bestScore={bestScore} />

      {gameOver ? (
        <button onClick={newGame} className="Game-replayBtn">
          Shuffle cards
        </button>
      ) : (
        <CardContainer cards={cards} flipCard={flipCard} animate={animate} />
      )}
    </div>
  );
}

export default Game;
