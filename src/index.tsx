import * as React from "react";
import { createRoot } from "react-dom/client";
import { Rank } from "./types/types";
import { cards } from "./cards";

function App() {
  console.log(cards);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
