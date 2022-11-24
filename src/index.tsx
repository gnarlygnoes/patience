import * as React from "react";
import { createRoot } from "react-dom/client";
import { cards, shuffleCards } from "./card-data";
import { Card } from "./card";

function App() {
  const shuffledCards = shuffleCards(cards);

  return (
    <div className="Cards">
      {shuffledCards.map((card) => (
        <Card key={card.rank + card.suit.name} card={card} />
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
