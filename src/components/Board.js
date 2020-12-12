import React from "react";
import Square from "./Square";
import data from "./all-squares";

const Board = () => {
  const ARRAY_OF_TILES = data.map((square, index) => {
    return <Square data={square} key={index}></Square>;
  });

  return <div className="board">{ARRAY_OF_TILES}</div>;
};

export default Board;
