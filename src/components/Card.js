import React from 'react';
import paint from '../img/paint.svg';
import '../styles/Card.css';

function Card(props) {
  const { name, flipCard, id, imgUrl, disabled, flipped } = props;

  return (
    <div className="Card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="Card-front" src={imgUrl} alt={`Card front: ${name}`} />
        <div
          className="Card-back"
          onClick={!disabled ? flipCard : null}
          id={id}
          data-name={name}
        >
          <img src={paint} alt="Card back" id={id} data-name={name} />
        </div>
      </div>
    </div>
  );
}

export default Card;
