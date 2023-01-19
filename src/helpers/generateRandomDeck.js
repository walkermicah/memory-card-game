import uniqid from 'uniqid';

const initialDeck = [
  { name: '1', side: 'back', id: uniqid(), disabled: false },
  { name: '1', side: 'back', id: uniqid(), disabled: false },
  { name: '2', side: 'back', id: uniqid(), disabled: false },
  { name: '2', side: 'back', id: uniqid(), disabled: false },
  { name: '3', side: 'back', id: uniqid(), disabled: false },
  { name: '3', side: 'back', id: uniqid(), disabled: false },
  { name: '4', side: 'back', id: uniqid(), disabled: false },
  { name: '4', side: 'back', id: uniqid(), disabled: false },
  { name: '5', side: 'back', id: uniqid(), disabled: false },
  { name: '5', side: 'back', id: uniqid(), disabled: false },
  { name: '6', side: 'back', id: uniqid(), disabled: false },
  { name: '6', side: 'back', id: uniqid(), disabled: false },
  { name: '7', side: 'back', id: uniqid(), disabled: false },
  { name: '7', side: 'back', id: uniqid(), disabled: false },
  { name: '8', side: 'back', id: uniqid(), disabled: false },
  { name: '8', side: 'back', id: uniqid(), disabled: false },
  { name: '9', side: 'back', id: uniqid(), disabled: false },
  { name: '9', side: 'back', id: uniqid(), disabled: false },
  { name: '10', side: 'back', id: uniqid(), disabled: false },
  { name: '10', side: 'back', id: uniqid(), disabled: false },
];

function generateRandomDeck() {
  const randomDeck = initialDeck.sort(() => 0.5 - Math.random());
  return randomDeck;
}

export default generateRandomDeck;
