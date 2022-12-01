import "./game-area.css";
import * as React from "react";
import { Stock } from "../stock/stock";
import { Store } from "../store";

interface GameAreaProps {
  store: Store;
}

export function GameArea(props: GameAreaProps) {
  const { store } = props;

  return (
    <div className="GameArea">
      <Stock store={store} />
    </div>
  );
}
