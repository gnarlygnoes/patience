import "./card.css";
import * as React from "react";
import { CSSProperties, useState } from "react";
import { Types } from "../../types/types";

interface CardProps {
  card: Types.Card;
  style?: CSSProperties;
}

export function Card(props: CardProps) {
  const {
    style = {},
    card: { rank, suit, facing },
  } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  if (facing === "down") {
    return (
      <div
        className="Card"
        style={{ fontSize: 50, ...style }}
        onClick={handleClick}
      >
        🐙
      </div>
    );
  }

  return (
    <div className="Card" onClick={handleClick} style={{ ...style }}>
      <div className="Card-rank">{rank}</div>
      <Suit suit={suit} />
    </div>
  );
}

function Suit(props: { suit: Types.Suit }) {
  let icon: string;

  switch (props.suit.name) {
    case "hearts":
      icon = "♥️";
      break;
    case "diamonds":
      icon = "♦️";
      break;
    case "spades":
      icon = "♠️";
      break;
    case "clubs":
      icon = "♣️";
      break;
  }

  return <div className="Suit">{icon}</div>;
}
