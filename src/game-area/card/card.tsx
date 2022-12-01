import "./card.css";
import * as React from "react";
import { useState } from "react";
import { Types } from "../../types/types";

export function Card(props: { card: Types.Card }) {
  const {
    card: { rank, suit, facing },
  } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    // console.log(suit, rank);
    setIsFlipped(!isFlipped);
  };

  if (facing === "down") {
    return (
      <div className="Card" style={{ fontSize: 50 }} onClick={handleClick}>
        🐙
      </div>
    );
  }

  return (
    <div className="Card" onClick={handleClick}>
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
