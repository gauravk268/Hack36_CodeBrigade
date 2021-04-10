import React from "react";
import games from "./Games";
import Game from "./Game";
function Waiting(props) {
  return (
    <div>
    <h4>Try out these fabulous Games ,Till Your Came</h4>
      {games.map((Item) => (
        <Game
          key={Item.key}
          title={Item.title}
          content={Item.content}
          image={Item.image}
          link={Item.link}
        />
      ))}
      <div className="container text-center my-3">
        <button className="btn btn-primary">
          <a href="/pay">Pay Bill</a>
        </button>
      </div>
    </div>
  );
}

export default Waiting;
