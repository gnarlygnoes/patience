import "./pile.css";
import { Types } from "../../types/types";
import * as React from "react";
import { Card } from "../card/card";

interface PileProps {
  pile: Types.Card[];
}

export function Pile(props: PileProps) {
  const { pile } = props;

  return (
    <div className="Pile">
      <Card card={pile.at(-1)!} />
    </div>
  );
}
