import React, { useContext } from "react";
import { MenuContext } from "../contexts";
import CartCard from "./CartCard";

function Cart(props) {
  const value = useContext(MenuContext);
  const cart = [...value.cart];
  const table = value.tableNo;

  const ifCartEmpty = () => {
    return (
      <div className="text-center no-product-in-cart">
        <h1 className="icon">&#33;</h1>
        <h1>Nothing Here.</h1>
        <button className="btn btn-primary">
          <a href="/menu">Add Food</a>
        </button>
      </div>
    );
  };

  const cartNotEmpty = () => {
    return (
      <div className="cart-function text-center">
        <button className="btn btn-primary me-2">
          <a href="/menu">Menu</a>
        </button>
        <button className="btn btn-success">
          <a href="/waiting">Order</a>
        </button>
      </div>
    );
  };

  return (
    <div className="cart container">
      <div className="alert alert-success text-center">Table No: {table}</div>
      <h4 className="text-center display-6">Cart</h4>
      {cart.map((food) => {
        return <CartCard food={food} />;
      })}
      {cart.length === 0 ? ifCartEmpty() : cartNotEmpty()}
    </div>
  );
}

export default Cart;
