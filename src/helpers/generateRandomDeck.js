import uniqid from 'uniqid';
import daVinci from '../img/daVinci.png';
import warhol from '../img/warhol.png';
import dali from '../img/dali.png';
import pollock from '../img/pollock.png';
import picasso from '../img/picasso.png';
import kahlo from '../img/kahlo.png';
import basquiat from '../img/basquiat.png';
import kandinsky from '../img/kandinsky.png';
import mondrian from '../img/mondrian.png';
import magritte from '../img/magritte.png';

const initialDeck = [
  {
    name: 'daVinci',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: daVinci,
  },
  {
    name: 'daVinci',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: daVinci,
  },
  {
    name: 'Warhol',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: warhol,
  },
  {
    name: 'Warhol',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: warhol,
  },
  { name: 'Dali', side: 'back', id: uniqid(), disabled: false, imgUrl: dali },
  { name: 'Dali', side: 'back', id: uniqid(), disabled: false, imgUrl: dali },
  {
    name: 'Pollock',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: pollock,
  },
  {
    name: 'Pollock',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: pollock,
  },
  {
    name: 'Picasso',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: picasso,
  },
  {
    name: 'Picasso',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: picasso,
  },
  { name: 'Kahlo', side: 'back', id: uniqid(), disabled: false, imgUrl: kahlo },
  { name: 'Kahlo', side: 'back', id: uniqid(), disabled: false, imgUrl: kahlo },
  {
    name: 'Basquiat',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: basquiat,
  },
  {
    name: 'Basquiat',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: basquiat,
  },
  {
    name: 'Kandinsky',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: kandinsky,
  },
  {
    name: 'Kandinsky',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: kandinsky,
  },
  {
    name: 'Mondrian',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: mondrian,
  },
  {
    name: 'Mondrian',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: mondrian,
  },
  {
    name: 'Magritte',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: magritte,
  },
  {
    name: 'Magritte',
    side: 'back',
    id: uniqid(),
    disabled: false,
    imgUrl: magritte,
  },
];

export default function generateRandomDeck() {
  const randomDeck = initialDeck.sort(() => 0.5 - Math.random());
  return randomDeck;
}
