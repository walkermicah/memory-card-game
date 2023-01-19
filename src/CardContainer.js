import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

function CardContainer(props) {
  return (
    <div className="CardContainer">
      {props.cards.map((c) => (
        <Card name={c.name} side={c.side} />
      ))}
    </div>
  );
}

export default CardContainer;
