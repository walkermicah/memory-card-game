import uniqid from 'uniqid';

function generateDeck() {
  return [
    { name: '1', side: 'back', id: uniqid() },
    { name: '1', side: 'back', id: uniqid() },
    { name: '2', side: 'back', id: uniqid() },
    { name: '2', side: 'back', id: uniqid() },
    { name: '3', side: 'back', id: uniqid() },
    { name: '3', side: 'back', id: uniqid() },
    { name: '4', side: 'back', id: uniqid() },
    { name: '4', side: 'back', id: uniqid() },
    { name: '5', side: 'back', id: uniqid() },
    { name: '5', side: 'back', id: uniqid() },
    { name: '6', side: 'back', id: uniqid() },
    { name: '6', side: 'back', id: uniqid() },
    { name: '7', side: 'back', id: uniqid() },
    { name: '7', side: 'back', id: uniqid() },
    { name: '8', side: 'back', id: uniqid() },
    { name: '8', side: 'back', id: uniqid() },
    { name: '9', side: 'back', id: uniqid() },
    { name: '9', side: 'back', id: uniqid() },
    { name: '10', side: 'back', id: uniqid() },
    { name: '10', side: 'back', id: uniqid() },
  ];
}

export default generateDeck;
