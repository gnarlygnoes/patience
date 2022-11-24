import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { observer } from "mobx-react-lite";
import { Store } from "./store";
import { Stock } from "./stock/stock";

const App = observer(() => {
  const [store] = useState(() => new Store());

  // useEffect(() => {
  //   store.startGame();
  // }, []);

  console.log(store);

  return (
    <div>
      <Stock store={store} />

      {/*{store.cards.map((card) => (*/}
      {/*  <Card key={card.rank + card.suit.name} card={card} />*/}
      {/*))}*/}
    </div>
  );
});

createRoot(document.getElementById("root")!).render(<App />);
