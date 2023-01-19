import React, { useState, useEffect } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import generateDeck from './helpers/generateDeck';
import './styles/Game.css';

function Game() {
  const initialDeck = generateDeck();
  const [cards, setCards] = useState(initialDeck);
  const [flippedCards, setFlippedCards] = useState([]);

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

  // Check for a match after cards are flipped
  useEffect(() => {
    const checkForMatch = () => {
      if (flippedCards.length !== 2) return;

      // if different, flip back
      if (flippedCards[0] !== flippedCards[1]) {
        setTimeout(
          () =>
            setCards(
              cards.map((c) =>
                c.name === flippedCards[0] || c.name === flippedCards[1]
                  ? { ...c, side: 'back' }
                  : c
              )
            ),
          1000
        );
      }
      setFlippedCards([]);
    };

    checkForMatch();
  }, [cards, flippedCards]);

  return (
    <div className="Game">
      <ScoreBoard />
      <CardContainer cards={cards} flipCard={flipCard} />
    </div>
  );
}

export default Game;
