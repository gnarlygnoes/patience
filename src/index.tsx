import * as React from "react";
import { createRoot } from "react-dom/client";
import { cards } from "./card-data";
import { Card } from "./card";

function App() {
  console.log(cards);

  return (
    <div className="Cards">
      {cards.map((card) => (
        <Card key={card.rank + card.suit.name} />
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
