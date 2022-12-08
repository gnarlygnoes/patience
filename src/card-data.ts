import { Types } from "./types/types";

export function getCards(): Types.Card[] {
  const cards: Types.Card[] = [];

  const hearts = { name: "hearts", colour: "red" } as const;
  const diamonds = { name: "diamonds", colour: "red" } as const;
  const clubs = { name: "clubs", colour: "black" } as const;
  const spades = { name: "spades", colour: "black" } as const;

  for (let i = 0; i < 13; i++) {
    cards.push({
      suit: hearts,
      rank: Types.Rank[i] as unknown as Types.Rank,
      facing: "down",
      dragging: false,
    });
    cards.push({
      suit: diamonds,
      rank: Types.Rank[i] as unknown as Types.Rank,
      facing: "down",
      dragging: false,
    });
    cards.push({
      suit: clubs,
      rank: Types.Rank[i] as unknown as Types.Rank,
      facing: "down",
      dragging: false,
    });
    cards.push({
      suit: spades,
      rank: Types.Rank[i] as unknown as Types.Rank,
      facing: "down",
      dragging: false,
    });
  }

  return cards;
}

export function shuffleCards(cards: readonly Types.Card[]): Types.Card[] {
  const shuffledCards: Types.Card[] = [];

  let remainingCards: Types.Card[] = [...cards];

  while (remainingCards.length > 0) {
    const result = pickRandomCard(remainingCards);

    shuffledCards.push(result.card);
    remainingCards = result.remainingCards;
  }

  return shuffledCards;
}

function pickRandomCard(cards: Types.Card[]): {
  remainingCards: Types.Card[];
  card: Types.Card;
} {
  const cardIndex = Math.round(random() * cards.length - 1);

  const card = cards.splice(cardIndex, 1);

  return {
    remainingCards: cards,
    card: card[0],
  };
}

let seed = 1;
function random() {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}
