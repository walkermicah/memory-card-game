import React from 'react';
import './styles/ScoreBoard.css';

function ScoreBoard(props) {
  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard-moves">
        <div>Moves</div>
        <div>{props.moves}</div>
      </div>
      <div className="ScoreBoard-title">
        <span>Two of</span>
        <span>a kind</span>
      </div>
      <div className="ScoreBoard-best">
        <div>Best score</div>
        <div>{props.bestScore}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;
