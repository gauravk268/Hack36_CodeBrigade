import React from "react";
import games from "./Games";
import Game from "./Game";
function Waiting(props) {
  return (
    <div className="container px-0">
      <div className="container text-center my-3">
        <button className="btn btn-primary">
          <a href="/pay">Pay Bill</a>
        </button>
      </div>
      <h4 className="px-2">Try out these fabulous Games ,Till Your Order Came</h4>
      {games.map((Item) => (
        <Game
          key={Item.key}
          title={Item.title}
          content={Item.content}
          image={Item.image}
          link={Item.link}
          className="mx-auto"
        />
      ))}
    </div>
  );
}

export default Waiting;
