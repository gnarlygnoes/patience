import * as React from "react";
import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Card } from "./card";
import { observer } from "mobx-react-lite";
import { Store } from "./store";

const App = observer(() => {
  const [store] = useState(() => new Store());

  useEffect(() => {
    store.startGame();
  }, []);

  return (
    <div className="Cards">
      {store.cards.map((card) => (
        <Card key={card.rank + card.suit.name} card={card} />
      ))}
    </div>
  );
});

createRoot(document.getElementById("root")!).render(<App />);
