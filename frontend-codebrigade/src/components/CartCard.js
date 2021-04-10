import React, { useState, useContext } from "react";
import { MenuContext } from "../contexts";

const CartCard = ({ food }) => {
  const value = useContext(MenuContext);
  const cart = value.cart;
  const setCart = value.setCart;
  const [qty, setQty] = useState(0);

  const updateQty = (newQty) => {
    setCart(
      cart.map((cartFood) => {
        if (cartFood.id === food.id) {
          return { ...food, qty: newQty };
        }
        return cartFood;
      })
    );
  };

  const incFood = () => {
    const k = qty;
    setQty(k + 1);
    updateQty(k + 1);
  };

  const decFood = () => {
    if (qty === 1) {
      removeFood();
    } else {
      setQty(qty - 1);
      updateQty(qty);
    }
  };

  const removeFood = () => {
    setQty(0);
    updateQty(0);
    setCart(cart.filter((cartFood) => cartFood.id !== food.id));
  };

  const styleDiv = {
    display: "contents",
    float: "right",
  };

  const stylebtn = {
    borderRadius: "50%",
  };

  return (
    <div className="cart-card jumbotron">
      <h5>
        {food.title} <span>x{food.qty}</span>
      </h5>
      <h6>Rs. {food.price}</h6>
      <div className="foodCartFunction" style={styleDiv}>
        <button className="btn shadow-none" style={stylebtn} onClick={incFood}>
          <img src="/icons/icons8-add-50.png" alt="increase food qty" />
        </button>

        <button className="btn btn-disabled">
          <h4>{food.qty}</h4>
        </button>

        <button className="btn shadow-none" style={stylebtn} onClick={decFood}>
          <img src="/icons/icons8-minus-50.png" alt="decrease food qty" />
        </button>

        <button className="btn shadow-none" onClick={removeFood}>
          <img src="/icons/icons8-cancel-50.png" alt="remove food qty" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
