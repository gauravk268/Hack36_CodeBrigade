import React, { useState, useContext } from "react";
import { MenuContext } from "../contexts";

function FoodCard({ food }) {
  const value = useContext(MenuContext);
  const cart = value.cart;
  const setCart = value.setCart;
  const [qty, setQty] = useState(food.qty);

  const incFood = () => {
    if (qty === 0) {
      setQty(1);
      food.qty = qty;
      setCart([...cart, food]);
    } else {
      setQty(qty + 1);
      food.qty = qty;
    }
  };

  const decFood = () => {
    if (qty < 1) {
      return;
    }
    if (qty === 1) {
      removeFood();
    } else {
      setQty(qty - 1);
      food.qty = qty;
    }
  };

  const removeFood = () => {
    setQty(0);
    food.qty = qty;
    setCart(cart.filter((cartFood) => cartFood.id !== food.id));
  };

  const styleDiv = {
    display: `${qty ? "inline-block" : "none"}`,
    float: "right",
  };

  const stylebtn = {
    borderRadius: "50%",
  };

  return (
    <div className="note jumbotron justify-content-center">
      <img src={food.image} alt="delicious food" />
      <p>Rs. {food.price}</p>
      <h1>{food.title}</h1>
      {/* <p>{food.content}</p> */}
      <p>{food.rating} &#127775;</p>

      <button
        className={`${qty > 0 ? "btn btn-danger" : "btn btn-primary"}`}
        onClick={qty > 0 ? decFood : incFood}
      >
        {`${qty > 0 ? "Remove" : "Add"}`}
      </button>
      <div className="foodCartFunction" style={styleDiv}>
        <button className="btn" style={stylebtn} onClick={incFood}>
          <img src="/icons/icons8-plus-100.png" alt="increase food qty" />
        </button>
        <button className="btn btn-disabled">
          <h4>{qty}</h4>
        </button>
        <button className="btn" style={stylebtn} onClick={decFood}>
          <img src="/icons/icons8-minus-100.png" alt="decrease food qty" />
        </button>

        <button className="btn" onClick={removeFood}>
          <img src="/icons/icons8-remove-100.png" alt="remove food qty" />
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
