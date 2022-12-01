import * as React from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
import { observer } from "mobx-react-lite";
import { cardHeight, cardWidth, Store } from "./store";
import { GameArea } from "./game-area/game-area";

const App = observer(() => {
  const [store] = useState(() => new Store());

  return (
    <div
      style={{
        // @ts-ignore
        "--cardWidth": cardWidth + "px",
        "--cardHeight": cardHeight + "px",
      }}
    >
      <GameArea store={store} />
    </div>
  );
});

createRoot(document.getElementById("root")!).render(<App />);
