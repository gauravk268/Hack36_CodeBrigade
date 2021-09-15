import React from "react";

function Game(props) {
  return (
    <div className="note">
      <a href={props.link}>
        <h1>{props.title}</h1>
        <img src={props.image} width="25" height="15" alt="game icon" />
        <p>{props.content}</p>
      </a>
    </div>
  );
}
export default Game;
