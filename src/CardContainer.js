import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

function CardContainer({ cards, flipCard, gameOver }) {
  return (
    <div className="CardContainer" style={{ opacity: `${gameOver ? 0.4 : 1}` }}>
      {cards.map((c) => (
        <Card
          key={c.id}
          name={c.name}
          side={c.side}
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
