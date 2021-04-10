import React, { useState, useContext } from "react";
import FoodCard from "./FoodCard";
import { MenuContext } from "../contexts";

function Menu(props) {
  const value = useContext(MenuContext);
  const [menu, setMenu] = useState([...value.food]);
  const cart = [...value.cart];

  let totalCost = 0;
  const orderValue = () => {
    cart.forEach((food) => {
      totalCost += food.qty * food.price;
    });
    totalCost = Math.round(totalCost).toFixed(2);
  };

  orderValue();

  return (
    <div>
      <h4 className="text-center display-6">Menu</h4>
      {menu.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}

      <h4 className="text-center h4">Order Value: Rs. {totalCost}</h4>
    </div>
  );
}

export default Menu;
