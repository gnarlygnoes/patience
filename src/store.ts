import { observable } from "mobx";
import { getCards, shuffleCards } from "./card-data";

export class Store {
  @observable.ref
  cards = shuffleCards(getCards());
}
