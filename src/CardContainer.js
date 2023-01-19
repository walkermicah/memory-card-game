import React from 'react';
import Card from './Card';
import './styles/CardContainer.css';

function CardContainer(props) {
  return (
    <div className="CardContainer">
      {props.cards.map((c) => (
        <Card
          key={c.id}
          name={c.name}
          side={c.side}
          id={c.id}
          flipCard={props.flipCard}
        />
      ))}
    </div>
  );
}

export default CardContainer;
