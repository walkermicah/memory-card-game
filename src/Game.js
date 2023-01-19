import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import generateDeck from './helpers/generateDeck';
import './styles/Game.css';

function Game() {
  const initialDeck = generateDeck();
  const [cards, setCards] = useState(initialDeck);

  // on mount:
  // call function to randomize card order & setCards

  const flipCard = (e) => {
    setCards(
      cards.map((c) =>
        c.id === e.target.id
          ? { ...c, side: c.side === 'front' ? 'back' : 'front' }
          : c
      )
    );
  };

  return (
    <div className="Game">
      <ScoreBoard />
      <CardContainer cards={cards} flipCard={flipCard} />
    </div>
  );
}

export default Game;
