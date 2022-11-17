import { Card, Rank } from "./types/types";

export const cards: Card[] = [];

const hearts = { name: "hearts", colour: "red" } as const;
const diamonds = { name: "diamonds", colour: "red" } as const;
const clubs = { name: "clubs", colour: "black" } as const;
const spades = { name: "spades", colour: "black" } as const;

for (let i = 0; i < 13; i++) {
  cards.push({
    suit: hearts,
    rank: Rank[i] as unknown as Rank,
  });
  cards.push({
    suit: diamonds,
    rank: Rank[i] as unknown as Rank,
  });
  cards.push({
    suit: clubs,
    rank: Rank[i] as unknown as Rank,
  });
  cards.push({
    suit: spades,
    rank: Rank[i] as unknown as Rank,
  });
}
