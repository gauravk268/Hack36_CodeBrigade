import React, { useState, useContext } from "react";
import { MenuContext } from "../contexts";

function FoodCard({ food }) {
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

  const addFood = () => {
    setQty(1);
    updateQty(1);
    setCart([...cart, { ...food, qty: 1 }]);
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
    display: `${qty ? "inline-block" : "none"}`,
    float: "right",
  };

  const stylebtn = {
    borderRadius: "50%",
  };

  const styleAlertSuccess = {
    display: "none",
    lineHeight: "3rem",
    fontWeight: "500",
    border: "2px solid inherit",
    borderRadius: "5px",
  };

  const styleAlertWarning = {
    display: "none",
    lineHeight: "3rem",
    fontWeight: "500",
    border: "2px solid inherit",
    borderRadius: "5px",
  };

  return (
    <div className="note jumbotron justify-content-center">
      <img src={food.image} alt="delicious food" />
      <p>Rs. {food.price}</p>
      <h1>{food.title}</h1>
      {/* <p>{food.content}</p> */}
      <p>{food.rating} &#127775;</p>
      <div className="text-center">
        <p className="alert-success" style={styleAlertSuccess}>
          Food added to Cart
        </p>
        <p className="alert-danger" style={styleAlertWarning}>
          Food removed from Cart
        </p>
      </div>

      <button
        className={`${qty ? "btn btn-danger" : "btn btn-primary"}`}
        onClick={qty ? decFood : addFood}
      >
        {`${qty ? "Remove" : "Add"}`}
      </button>
      <div className="foodCartFunction" style={styleDiv}>
        <button className="btn shadow-none" style={stylebtn} onClick={incFood}>
          <img src="/icons/icons8-add-50.png" alt="increase food qty" />
        </button>
        <button className="btn btn-disabled">
          <h4>{qty}</h4>
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
}

export default FoodCard;
