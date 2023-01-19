import React from 'react';
import './styles/Card.css';

function Card(props) {
  return <div className="Card">{props.name}</div>;
}

export default Card;
