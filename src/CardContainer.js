import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

function CardContainer() {
  const cards = Array(20).fill('');

  return (
    <div className="CardContainer">
      {cards.map(() => (
        <Card />
      ))}
    </div>
  );
}

export default CardContainer;
