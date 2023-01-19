import React, { useState } from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import generateDeck from './helpers/generateDeck';
import './styles/Game.css';

function Game() {
  const [cards, setCards] = useState(generateDeck());

  return (
    <div className="Game">
      <ScoreBoard />
      <CardContainer cards={cards} />
    </div>
  );
}

export default Game;
