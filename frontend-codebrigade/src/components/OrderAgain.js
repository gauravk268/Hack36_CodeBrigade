import React, { useState, useContext } from "react";
import FoodCard from "./FoodCard";
import { MenuContext } from "../contexts";

function OrderAgain(props) {
  const value = useContext(MenuContext);
  const [menu, setMenu] = useState([...value.food]);

  // const orderValue = () => {
  //   let cost = 0;
  //   menu.map((food) => {
  //     cost += food.qty + food.price;
  //   });
  //   return cost;
  // };

  return (
    <div>
      <h4 className="text-center display-6">Menu</h4>
      {menu.map((food) => {
        return <FoodCard food={food} key={food.id} />;
      })}

      {/* <h4 className="text-center h4">Order Value: Rs. {orderValue()}</h4> */}
    </div>
  );
}

// function OrderAgain(props) {
//   return (
//     <div>
//       <h4 className="h4">Order Again</h4>
//     </div>
//   );
// }

export default OrderAgain;
