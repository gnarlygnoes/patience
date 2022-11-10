import { useState } from "react";
import * as React from "react";
import { createRoot } from "react-dom/client";
import { Rank } from "./types/types";

function App() {
  console.log(Rank["ace"]);

  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
