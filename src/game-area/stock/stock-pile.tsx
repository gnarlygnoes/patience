import "./stock.css";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { Store } from "../../store";
import { Card } from "../card/card";

interface StackProps {
  store: Store;
}

export const StockPile = observer((props: StackProps) => {
  const {
    store: { stockPile },
  } = props;

  console.log("Stock", stockPile);

  if (stockPile.length === 0) return null;

  return (
    <div className="StockPile">
      <Card card={stockPile[stockPile.length - 1]} />
    </div>
  );
});
