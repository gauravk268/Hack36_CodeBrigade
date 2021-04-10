import React, { useContext } from "react";
import FoodCard from "./FoodCard";
import { MenuContext } from "../contexts";

function OrderAgain(props) {
  const value = useContext(MenuContext);
  const menu = [...value.food];

  return (
    <div>
      <h4 className="text-center display-6">Menu</h4>
      {menu.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}
    </div>
  );
}

export default OrderAgain;
