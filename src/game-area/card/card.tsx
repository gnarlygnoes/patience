import "./card.css";
import * as React from "react";
import { CSSProperties, useCallback, useState } from "react";
import { Types } from "../../types/types";
import { observer } from "mobx-react-lite";

interface CardProps {
  card: Types.Card;
  style?: CSSProperties;
}

export const Card = observer((props: CardProps) => {
  const {
    style = {},
    card: { rank, suit, facing },
  } = props;

  const [isDragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [currentPosition, setCurrentPosition] = useState({ x: 0, y: 0 });

  const onMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      setDragging(true);
      const { clientX, clientY } = e;
      setStartPosition({ x: clientX, y: clientY });
      setCurrentPosition({ x: clientX, y: clientY });

      const onMouseMove = (e: MouseEvent) => {
        setCurrentPosition({ x: e.clientX, y: e.clientY });
      };

      addEventListener("mousemove", onMouseMove);

      addEventListener(
        "mouseup",
        () => {
          setDragging(false);
          removeEventListener("mousemove", onMouseMove);
          setStartPosition({ x: 0, y: 0 });
          setCurrentPosition({ x: 0, y: 0 });
        },
        { once: true }
      );
    },
    [isDragging]
  );

  if (facing === "down") {
    return (
      <div className="Card Card-back" style={{ fontSize: 50, ...style }}>
        🐙
      </div>
    );
  }

  return (
    <div
      className="Card"
      style={{
        ...style,
        transform: `translate(${currentPosition.x - startPosition.x}px, ${
          currentPosition.y - startPosition.y
        }px)`,
        zIndex: isDragging ? 10 : undefined,
        transitionDuration: isDragging ? "0ms" : "300ms",
      }}
      onMouseDown={onMouseDown}
    >
      <div className="Card-rank">{rank}</div>
      <Suit suit={suit} />
    </div>
  );
});

function Suit(props: { suit: Types.Suit }) {
  let icon: string;

  switch (props.suit.name) {
    case "hearts":
      icon = "♥️";
      break;
    case "diamonds":
      icon = "♦️";
      break;
    case "spades":
      icon = "♠️";
      break;
    case "clubs":
      icon = "♣️";
      break;
  }

  return <div className="Suit">{icon}</div>;
}
