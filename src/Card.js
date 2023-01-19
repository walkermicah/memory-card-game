import React from 'react';
import './styles/Card.css';

function Card(props) {
  const { side, name, flipCard, id } = props;

  return (
    <div onClick={flipCard} className={`Card Card-${side}`} id={id}>
      {side === 'front' ? name : '?'}
    </div>
  );
}

export default Card;
