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
    id: uniqid(),
    name: 'daVinci',
    imgUrl: daVinci,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'daVinci',
    imgUrl: daVinci,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Warhol',
    imgUrl: warhol,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Warhol',
    imgUrl: warhol,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Dali',
    imgUrl: dali,
    disabled: false,
    flipped: false,
  },
  {
    id: uniqid(),
    name: 'Dali',
    imgUrl: dali,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Pollock',
    imgUrl: pollock,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Pollock',
    imgUrl: pollock,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Picasso',
    imgUrl: picasso,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Picasso',
    imgUrl: picasso,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Kahlo',
    imgUrl: kahlo,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Kahlo',
    imgUrl: kahlo,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Basquiat',
    imgUrl: basquiat,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Basquiat',
    imgUrl: basquiat,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Kandinsky',
    imgUrl: kandinsky,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Kandinsky',
    imgUrl: kandinsky,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Mondrian',
    imgUrl: mondrian,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Mondrian',
    imgUrl: mondrian,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Magritte',
    imgUrl: magritte,
    flipped: false,
    disabled: false,
  },
  {
    id: uniqid(),
    name: 'Magritte',
    imgUrl: magritte,
    flipped: false,
    disabled: false,
  },
];

export default function generateRandomDeck() {
  const randomDeck = initialDeck.sort(() => 0.5 - Math.random());
  return randomDeck;
}
