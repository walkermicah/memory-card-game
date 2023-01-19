import React from 'react';
import ScoreBoard from './ScoreBoard';
import CardContainer from './CardContainer';
import './styles/Game.css';

function Game() {
  return (
    <div className="Game">
      <ScoreBoard />
      <CardContainer />
    </div>
  );
}

export default Game;
