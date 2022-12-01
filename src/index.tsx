import * as React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { observer } from "mobx-react-lite";
import { Store } from "./store";
import { GameArea } from "./game-area/game-area";

const App = observer(() => {
  const [store] = useState(() => new Store());

  return (
    <div>
      <GameArea store={store} />

      {/*{store.cards.map((card) => (*/}
      {/*  <Card key={card.rank + card.suit.name} card={card} />*/}
      {/*))}*/}
    </div>
  );
});

createRoot(document.getElementById("root")!).render(<App />);
