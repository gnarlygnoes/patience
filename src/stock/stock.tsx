import { observer } from "mobx-react-lite";
import * as React from "react";
import { Store } from "../store";
import { Card } from "../card";

interface StackProps {
  store: Store;
}

export const Stock = observer((props: StackProps) => {
  const {
    store: { stock },
  } = props;

  console.log("Stock", stock);

  if (stock.length === 0) return null;

  return (
    <div className="Stock">
      <Card card={stock[stock.length - 1]} />
    </div>
  );
});
