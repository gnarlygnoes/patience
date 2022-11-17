export type Card = {
  suit: Suit;
  rank: Rank;
};

export type Suit =
  | {
      name: "hearts";
      colour: "red";
    }
  | {
      name: "diamonds";
      colour: "red";
    }
  | {
      name: "clubs";
      colour: "black";
    }
  | {
      name: "spades";
      colour: "black";
    };

export enum Rank {
  ace,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  jack,
  queen,
  king,
}
