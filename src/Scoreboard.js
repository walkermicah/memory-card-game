import React from 'react';
import './styles/ScoreBoard.css';

function ScoreBoard(props) {
  return (
    <div className="ScoreBoard">
      <div className="ScoreBoard-score">
        <div>Total moves</div>
        <div>{props.moves}</div>
      </div>
      <div className="ScoreBoard-title">
        <div>Two of a kind</div>
        <div>A memory card game</div>
      </div>
      <div className="ScoreBoard-best">
        <div>Best score</div>
        <div>{props.bestScore}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;
