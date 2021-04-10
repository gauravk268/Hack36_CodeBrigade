import React, { useContext } from "react";
import FoodCard from "./FoodCard";
import { MenuContext } from "../contexts";

function Menu(props) {
  const value = useContext(MenuContext);
  const menu = [...value.food];
  const cart = [...value.cart];
  const table = value.tableNo;

  let totalCost = 0;
  const orderValue = () => {
    cart.forEach((food) => {
      totalCost += food.qty * food.price;
    });
    totalCost = Math.round(totalCost).toFixed(2);
  };

  orderValue();

  return (
    <div className="menu justify-content-center">
      <div className="alert alert-success text-center">Table No: {table}</div>
      <h4 className="text-center display-6">Menu</h4>
      {menu.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}

      <h4 className="text-center alert-text h4">
        Order Value: Rs. {totalCost}
      </h4>

      <div className="text-center">
        <button className="order btn btn-primary me-2">
          <a href="/cart">Confirm Order</a>
        </button>
      </div>
    </div>
  );
}

export default Menu;
