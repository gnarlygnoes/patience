import { observable } from "mobx";
import { cards } from "./card-data";

export class Store {
  @observable.ref
  cards = cards;
}
