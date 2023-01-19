import React from 'react';
import './styles/Card.css';

function Card(props) {
  const { side, name, flipCard, id, disabled } = props;

  return (
    <div
      onClick={!disabled ? flipCard : null}
      className={`Card Card-${side}`}
      id={id}
      data-name={name}
      disabled={disabled}
    >
      {side === 'front' ? name : '?'}
    </div>
  );
}

export default Card;
