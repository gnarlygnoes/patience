import "./pile.css";
import { Types } from "../../types/types";
import * as React from "react";
import { Card } from "../card/card";
import { cardHeight } from "../../store";

interface PileProps {
  pile: Types.Card[];
}

const pileCardShift = cardHeight * 0.15;

export function Pile(props: PileProps) {
  const { pile } = props;

  return (
    <div
      className="Pile"
      style={{ height: cardHeight + pile.length * pileCardShift }}
    >
      {pile.map((card, index) => {
        console.log();
        return (
          <Card
            key={index}
            card={card}
            style={{
              position: "absolute",
              left: 0,
              top: index * pileCardShift,
            }}
          />
        );
      })}
    </div>
  );
}
