import uniqid from 'uniqid';
import davinci from '../img/davinci.png';
import warhol from '../img/warhol.png';
import dali from '../img/dali.png';
import pollock from '../img/pollock.png';
import picasso from '../img/picasso.png';
import kahlo from '../img/kahlo.png';
import basquiat from '../img/basquiat.png';
import kandinsky from '../img/kandinsky.png';
import mondrian from '../img/mondrian.png';
import magritte from '../img/magritte.png';

const artists = [
  { name: 'davinci', imgUrl: davinci },
  { name: 'warhol', imgUrl: warhol },
  { name: 'dali', imgUrl: dali },
  { name: 'pollock', imgUrl: pollock },
  { name: 'picasso', imgUrl: picasso },
  { name: 'kahlo', imgUrl: kahlo },
  { name: 'basquiat', imgUrl: basquiat },
  { name: 'kandinsky', imgUrl: kandinsky },
  { name: 'mondrian', imgUrl: mondrian },
  { name: 'magritte', imgUrl: magritte },
];

export default function generateRandomDeck() {
  const deck = [...artists, ...artists].map((a) => ({
    ...a,
    id: uniqid(),
    flipped: false,
    disabled: false,
  }));
  return deck.sort(() => 0.5 - Math.random());
}
