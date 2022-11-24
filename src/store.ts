import { observable } from "mobx";
import { getCards, shuffleCards } from "./card-data";
import { Types } from "./types/types";
import Card = Types.Card;

type Piles = [Card[], Card[], Card[], Card[], Card[], Card[], Card[]];

export class Store {
  @observable.ref
  cards = shuffleCards(getCards());

  @observable.ref
  stock: Card[] = [];

  @observable.ref
  waste: Card[] = [];

  @observable.ref
  foundation1: Card[] = [];
  @observable.ref
  foundation2: Card[] = [];
  @observable.ref
  foundation3: Card[] = [];
  @observable.ref
  foundation4: Card[] = [];

  @observable.ref
  piles: Piles = [[], [], [], [], [], [], []];

  startGame() {
    const stock: Card[] = shuffleCards(getCards());
    const piles: Piles = [[], [], [], [], [], [], []];

    piles.forEach((pile, index) => {
      for (let i = 0; i < index; i++) {
        const card = stock.pop()!;
        card.facing = "down";
        pile.push(card);
      }

      const card = stock.pop()!;
      card.facing = "up";
      pile.push(card);
    });

    console.log(stock, piles);
  }
}
