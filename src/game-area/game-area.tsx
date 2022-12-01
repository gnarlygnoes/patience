import "./game-area.css";
import * as React from "react";
import { Stock } from "./stock/stock";
import { Store } from "../store";
import { Foundation } from "./foundation/foundation";
import { Pile } from "./pile/pile";

interface GameAreaProps {
  store: Store;
}

export function GameArea(props: GameAreaProps) {
  const { store } = props;

  return (
    <div className="GameArea">
      <Stock store={store} />
      <div />
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
