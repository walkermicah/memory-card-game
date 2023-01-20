import React from 'react';
import './styles/Card.css';

function Card(props) {
  const { side, name, flipCard, id, imgUrl, disabled } = props;

  return (
    <div
      onClick={!disabled ? flipCard : null}
      className={`Card Card-${side}`}
      id={id}
      data-name={name}
      disabled={disabled}
    >
      {side === 'front' ? <img src={imgUrl} alt={name} /> : '?'}
    </div>
  );
}

export default Card;
