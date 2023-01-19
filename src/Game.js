import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import generateDeck from './helpers/generateDeck';
import './styles/Game.css';

function Game() {
  const initialDeck = generateDeck();
  const [cards, setCards] = useState(initialDeck);
  const [flippedCards, setFlippedCards] = useState([]);
  const [moves, setMoves] = useState(0);
  const [bestScore, setBestScore] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // on mount:
  // call function to randomize card order & setCards

  const flipCard = (e) => {
    if (e.target.classList.contains('Card-front')) return;

    setCards(
      cards.map((c) =>
        c.id === e.target.id
          ? { ...c, side: c.side === 'front' ? 'back' : 'front' }
          : c
      )
    );
    setFlippedCards([...flippedCards, e.target.dataset.name]);
  };

  const newGame = () => {
    console.log('reset game');
    setGameOver(false);
    setMoves(0);
    setCards(cards.map((c) => ({ ...c, side: 'back' })));
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
                  ? { ...c, side: 'back', disabled: false }
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
    if (cards.every((c) => c.side === 'front')) {
      setGameOver(true);
    }
  }, [cards]);

  // Update best score on game over
  useEffect(() => {
    if (gameOver) {
      setBestScore(!bestScore || moves < bestScore ? moves : bestScore);
    }
  }, [gameOver, moves, bestScore]);

  return (
    <div className="Game">
      <ScoreBoard moves={moves} bestScore={bestScore} />
      <CardContainer cards={cards} flipCard={flipCard} />
      {gameOver ? <button onClick={newGame}>Play again</button> : ''}
    </div>
  );
}

export default Game;
