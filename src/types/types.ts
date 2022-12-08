export namespace Types {
  export type Card = {
    suit: Suit;
    rank: Rank;
    facing: "up" | "down";
    dragging: boolean;
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

  export function makeCardId(card: Card): string {
    return `${card.suit}-${card.rank}`;
  }
}
