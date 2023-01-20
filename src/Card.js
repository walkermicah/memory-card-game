import React from 'react';
import './styles/Card.css';

function Card(props) {
  const { name, flipCard, id, imgUrl, disabled, flipped } = props;

  return (
    <div className="Card">
      <div className={flipped ? 'flipped' : ''}>
        <img className="Card-front" src={imgUrl} alt={name} />
        <div
          className="Card-back"
          onClick={!disabled ? flipCard : null}
          id={id}
          data-name={name}
        >
          ?
        </div>
      </div>
    </div>
  );
}

export default Card;
