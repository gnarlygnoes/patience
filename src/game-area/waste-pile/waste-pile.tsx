import "./waste-pile.css";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Store } from "../../store";
import { Card } from "../card/card";

export const WastePile = observer((props: { store: Store }) => {
  const { wastePile } = props.store;

  return (
    <div className="WastePile">
      {wastePile.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
});
