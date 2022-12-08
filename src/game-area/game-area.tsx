import "./game-area.css";
import * as React from "react";
import { StockPile } from "./stock/stock-pile";
import { Store } from "../store";
import { Foundation } from "./foundation/foundation";
import { Pile } from "./pile/pile";
import { WastePile } from "./waste-pile/waste-pile";

interface GameAreaProps {
  store: Store;
}

export function GameArea(props: GameAreaProps) {
  const { store } = props;

  return (
    <div className="GameArea">
      <StockPile store={store} />
      <WastePile store={store} />
      <div />
      <Foundation store={store} />
      <Foundation store={store} />
      <Foundation store={store} />
      <Foundation store={store} />

      {store.piles.map((pile, index) => {
        return <Pile pile={pile} key={index} />;
      })}
    </div>
  );
}
