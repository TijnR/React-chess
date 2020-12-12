import React, { useState, useEffect } from "react";

import darkPawn from "./pieces/dark-pawn.png";
import lightPawn from "./pieces/light-pawn.png";

import darkRook from "./pieces/dark-rook.png";
import lightRook from "./pieces/light-rook.png";

import darkBishop from "./pieces/dark-bishop.png";
import lightBishop from "./pieces/light-bishop.png";

import darkKnight from "./pieces/dark-knight.png";
import lightKnight from "./pieces/light-knight.png";

import darkKing from "./pieces/dark-king.png";
import lightKing from "./pieces/light-king.png";

import darkQueen from "./pieces/dark-queen.png";
import lightQueen from "./pieces/light-queen.png";
import { render } from "react-dom";

class Square extends React.Component {
  constructor(props) {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      activePiece: props.data.starterPiece,
      class: props.data.class,
      id: props.data.id,
    };
  }

  handleClick(id) {
    console.log(id);
  }

  render() {
    let imgPiece;

    switch (this.state.activePiece) {
      case "darkPawn":
        imgPiece = <img className="image__container" src={darkPawn}></img>;
        break;
      case "lightPawn":
        imgPiece = <img className="image__container" src={lightPawn}></img>;
        break;
      case "darkRook":
        imgPiece = <img className="image__container" src={darkRook}></img>;
        break;
      case "lightRook":
        imgPiece = <img className="image__container" src={lightRook}></img>;
        break;
      case "darkKnight":
        imgPiece = <img className="image__container" src={darkKnight}></img>;
        break;
      case "lightKnight":
        imgPiece = <img className="image__container" src={lightKnight}></img>;
        break;
      case "darkBishop":
        imgPiece = <img className="image__container" src={darkBishop}></img>;
        break;
      case "lightBishop":
        imgPiece = <img className="image__container" src={lightBishop}></img>;
        break;
      case "darkQueen":
        imgPiece = <img className="image__container" src={darkQueen}></img>;
        break;
      case "lightQueen":
        imgPiece = <img className="image__container" src={lightQueen}></img>;
        break;
      case "darkKing":
        imgPiece = <img className="image__container" src={darkKing}></img>;
        break;
      case "lightKing":
        imgPiece = <img className="image__container" src={lightKing}></img>;
        break;
      default:
        imgPiece = false;
    }
    return (
      <div
        onClick={() => this.handleClick(this.state.id)}
        className={this.state.class}
        id={this.state.id}
      >
        <span className="square__position">{this.state.id}</span>
        {imgPiece}
      </div>
    );
  }
}

export default Square;
