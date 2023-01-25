import React from 'react';
import Card from './Card';
import '../styles/CardContainer.css';

function CardContainer({ cards, flipCard, animate }) {
  return (
    <div className={animate ? 'CardContainer-gameOver' : 'CardContainer'}>
      {cards.map((c) => (
        <Card
          key={c.id}
          name={c.name}
          flipped={c.flipped}
          id={c.id}
          imgUrl={c.imgUrl}
          disabled={c.disabled}
          flipCard={flipCard}
        />
      ))}
    </div>
  );
}

export default CardContainer;
