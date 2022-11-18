import { Types } from "./types/types";

export const cards: Types.Card[] = [];

const hearts = { name: "hearts", colour: "red" } as const;
const diamonds = { name: "diamonds", colour: "red" } as const;
const clubs = { name: "clubs", colour: "black" } as const;
const spades = { name: "spades", colour: "black" } as const;

for (let i = 0; i < 13; i++) {
  cards.push({
    suit: hearts,
    rank: Types.Rank[i] as unknown as Types.Rank,
  });
  cards.push({
    suit: diamonds,
    rank: Types.Rank[i] as unknown as Types.Rank,
  });
  cards.push({
    suit: clubs,
    rank: Types.Rank[i] as unknown as Types.Rank,
  });
  cards.push({
    suit: spades,
    rank: Types.Rank[i] as unknown as Types.Rank,
  });
}
