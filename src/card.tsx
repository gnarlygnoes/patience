import * as React from "react";
import { Types } from "./types/types";

export function Card(props: { card: Types.Card }) {
  const {
    card: { rank, suit },
  } = props;

  return (
    <div className="Card">
      <div className="Card-rank">{rank}</div>
      <Suit suit={suit} />
    </div>
  );
}

function Suit(props: { suit: Types.Suit }) {
  let icon: string;

  switch (props.suit.name) {
    case "hearts":
      icon = "♥";
      break;
    case "diamonds":
      icon = "♦️";
      break;
    case "spades":
      icon = "♠";
      break;
    case "clubs":
      icon = "♣️";
      break;
  }

  return <div className="Suit">{icon}</div>;
}
